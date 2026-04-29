import type { RequestHandler } from './$types';
import { GoogleGenAI } from '@google/genai';
import { retrieveContext, getAllContext } from '$lib/utils/rag';
import { env } from '$env/dynamic/private';

interface Message {
	role: 'user' | 'assistant';
	content: string;
}

const SYSTEM_PROMPT_BASE = `You are an AI assistant embedded in Divit Mittal's personal portfolio website. Your role is to help visitors learn about Divit in a friendly, informative, and engaging way — like a knowledgeable colleague who knows him well.

Guidelines:
- Be warm, conversational, and concise (2-3 short paragraphs maximum per response)
- Speak about Divit in the third person ("Divit is...", "He has worked on...")
- If asked something not in the context, be honest: "I don't have that specific detail, but you can reach Divit directly at divitmittal@outlook.in"
- Encourage visitors to check out his GitHub (github.com/DivitMittal) or reach out on LinkedIn for deeper conversations
- Never make up facts — only use the provided context
- Keep technical explanations accessible but not dumbed-down

Relevant information about Divit:

`;

export const POST: RequestHandler = async ({ request }) => {
	let messages: Message[];
	try {
		({ messages } = await request.json());
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	if (!Array.isArray(messages) || messages.length === 0) {
		return new Response(JSON.stringify({ error: 'messages array is required' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const apiKey = env.GEMINI_API_KEY;
	if (!apiKey) {
		return new Response(JSON.stringify({ error: 'GEMINI_API_KEY not configured' }), {
			status: 503,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// Retrieve context based on the last user message
	const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content ?? '';
	const context = lastUserMessage ? retrieveContext(lastUserMessage) : getAllContext();

	const systemPrompt = SYSTEM_PROMPT_BASE + context;

	// Limit conversation history to last 20 messages
	const trimmedMessages = messages.slice(-20);

	// Gemini uses 'user' / 'model' roles and parts-based content
	const geminiContents = trimmedMessages.map((m) => ({
		role: m.role === 'assistant' ? 'model' : 'user',
		parts: [{ text: m.content }]
	}));

	const ai = new GoogleGenAI({ apiKey });
	const encoder = new TextEncoder();

	const readable = new ReadableStream({
		async start(controller) {
			try {
				const response = await ai.models.generateContentStream({
					model: 'gemini-2.0-flash',
					config: {
						systemInstruction: systemPrompt,
						maxOutputTokens: 1024
					},
					contents: geminiContents
				});

				for await (const chunk of response) {
					const text = chunk.text;
					if (text) {
						const payload = JSON.stringify({ text });
						controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
					}
				}

				controller.enqueue(encoder.encode('data: [DONE]\n\n'));
			} catch (err) {
				const errorPayload = JSON.stringify({
					error: err instanceof Error ? err.message : 'Unknown error'
				});
				controller.enqueue(encoder.encode(`data: ${errorPayload}\n\n`));
			} finally {
				controller.close();
			}
		}
	});

	return new Response(readable, {
		headers: {
			'Content-Type': 'text/event-stream',
			'Cache-Control': 'no-cache',
			Connection: 'keep-alive'
		}
	});
};
