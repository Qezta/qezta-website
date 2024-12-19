<script lang="ts">
	import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
	import SectionHeader from '../atoms/SectionHeader.svelte';
</script>

<section>
	<SectionHeader text="About me" icon={faAddressCard} />
	<p>
		22-year-old computer science student
		at <a target="_blank" href="https://uni-augsburg.de/">University of Augsburg</a>.
		forums.
	</p>
</section>

<style>
	a {
		white-space: nowrap;
	}

	p {
		text-align: justify;
	}
</style>