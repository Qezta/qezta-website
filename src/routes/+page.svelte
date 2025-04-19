<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../components/organisms/Card.svelte';

	let showLogo = false;

	onMount(() => {
		// Check hostname only on the client-side
		if (window.location.hostname === 'qezta.com') {
			showLogo = true;
		}
	});
</script>

{#if showLogo}
	<div class="logo-container">
		<img src="/qezta.png" alt="Qezta Logo" class="logo" />
	</div>
{/if}

<Card />

<style>
	.logo-container {
		text-align: center;
		padding: 20px 0; /* Add some padding */
		margin-bottom: 20px; /* Add space below the logo */
	}
	.logo {
		max-width: 150px; /* Adjust size as needed */
		height: auto;
	}
</style>
