<script lang="ts">
	import { scale } from '../../store/cursor';

	// Define image properties - adjust path and dimensions as needed
	export let src = '/pp_ascii.png'; // Assuming the image is in the static/public folder
	export let alt = "Divit Mittal's profile picture";
	export let width = '150'; // Example width, adjust as necessary
	export let height = '150'; // Example height, adjust as necessary
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- Removed the pre tag and ASCII art -->
<img
	{src}
	{alt}
	{width}
	{height}
	on:mouseover={() => scale.set(1.2)}
	on:mouseleave={() => scale.set(0)}
/>

<style lang="scss">
	img {
		cursor: pointer;
		display: block;
		max-width: 100%;
		height: auto;
		transition: 0.3s filter ease;
		&:hover {
			filter: brightness(1.3);
		}
	}
</style>
