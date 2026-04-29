import { knowledgeBase, type KnowledgeChunk } from '../data/knowledge-base';

function tokenize(text: string): string[] {
	return text
		.toLowerCase()
		.split(/\W+/)
		.filter((t) => t.length > 2);
}

function scoreChunk(chunk: KnowledgeChunk, queryTokens: Set<string>, rawQuery: string): number {
	const contentTokens = tokenize(chunk.content);
	const contentSet = new Set(contentTokens);

	// Term overlap between query and chunk content
	let overlap = 0;
	for (const token of queryTokens) {
		if (contentSet.has(token)) overlap++;
	}

	// Keyword match bonus (2x weight — keywords are curated signals)
	const keywordBonus = chunk.keywords.filter((kw) =>
		rawQuery.toLowerCase().includes(kw.toLowerCase())
	).length * 2;

	// Title match bonus
	const titleBonus = tokenize(chunk.title).filter((t) => queryTokens.has(t)).length * 1.5;

	return overlap + keywordBonus + titleBonus;
}

/**
 * Retrieves the most relevant knowledge chunks for a given query.
 * Returns formatted context string ready to inject into the system prompt.
 */
export function retrieveContext(query: string, topK = 4): string {
	const queryTokens = new Set(tokenize(query));

	const scored = knowledgeBase
		.map((chunk) => ({ chunk, score: scoreChunk(chunk, queryTokens, query) }))
		.sort((a, b) => b.score - a.score);

	// Always include identity chunk if it's not already in top results
	const topChunks = scored.slice(0, topK).map((s) => s.chunk);
	const hasIdentity = topChunks.some((c) => c.id === 'identity');
	if (!hasIdentity && scored.length > topK) {
		const identityEntry = scored.find((s) => s.chunk.id === 'identity');
		if (identityEntry) {
			topChunks[topK - 1] = identityEntry.chunk;
		}
	}

	return topChunks.map((chunk) => `### ${chunk.title}\n${chunk.content}`).join('\n\n---\n\n');
}

/**
 * Returns all chunks — useful for the system prompt baseline when query is empty.
 */
export function getAllContext(): string {
	return knowledgeBase.map((chunk) => `### ${chunk.title}\n${chunk.content}`).join('\n\n---\n\n');
}
