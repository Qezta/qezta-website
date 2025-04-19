<script lang="ts">
	import { scale } from '../../store/cursor';
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<pre
	aria-label="Divit Mittal's profile picture ASCII art"
	on:mouseover={() => scale.set(1.2)}
	on:mouseleave={() => scale.set(0)}
>{`
 @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ # + = = - . . . + + + # @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ @ @ + - - . .   .   . . . . . . . . - = + @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ + - .   .         . . . . . . . . . . . - = + # @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ = . .         . . . . . . . . . . . . . . . . - # @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ # - . . .       . . . . . . . . . . . . . . .   - @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ + . . . . .   . . . . . . . . . . . . . . . .   - @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ + . . .   . - - - - .   .       . . . . . . . - @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ # . . . . = # + + - - - = = = - . . . . . .   . = @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ - . . - # # # # + # @ @ @ # # + + + + = .   . # @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ = . - # @ # + + - = @ @ @ # + = = = + = . . # @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ # = - @ @ # + - - = + @ @ # = - - = = + # . - # @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ # # # # @ @ @ # # # # @ @ @ # # # + + + # # = # @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ # # # @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ # # # # @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ # # # + + # # # # # # # @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ # # # # # # # # # # # # @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ # # # # # # # # # # # # @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ # # # # # # # # # # # # @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ # # # # # # # # + + # # @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ @ + = - - + @ # # # # # # # # + + # # + + + # @ @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ @ = . . . - + @ @ # # # # # # # # # # # # # = - . . = + @ @ @ @ @ @ @ @ @ @ @ @
 @ @ @ @ @ @ @ @ @ @ # - . . . = + # @ # # # # # # # # # # # # # # = - . . . - = + # @ @ @ @ @ @ @ @ @
 + = - - . . . . . . . . . - + @ # # # # # # # # # # # # # # # # # # = . . . . . . . . . = + # @ @ @
 . . . .     . . . . . . = + @ # # # # # # # # # # # # # # # # # # # # + - . . . . . . . . . . . .
 . . . . . . . . . . . . - = @ # # # # # # # # # # # # # # # # # # # # # + = . . . . . . . . . . . .
`}</pre>

<style lang="scss">
	pre {
		cursor: pointer;
		// Adjust width as needed, or let it be determined by content
		// width: 450px;
		font-family: monospace; // Crucial for ASCII art alignment
		font-size: 0.6em; // Adjust for optimal display size
		line-height: 0.7; // Adjust for optimal display density
		// animation-name: hovering; // Animation might look odd on text
		// animation-timing-function: ease-in-out;
		// animation-duration: 2.5s;
		// animation-iteration-count: infinite;
		transition: 0.3s filter ease;
		&:hover {
			filter: brightness(1.3);
		}

		// Consider removing or adjusting media query if width is content-based
		// @media (max-width: 505px) {
		// 	width: 100%;
		// }
	}

	// @keyframes hovering { // Remove or adjust animation
	// 	0% {
	// 		transform: translateY(6px);
	// 	}

	// 	50% {
	// 		transform: translateY(-6px);
	// 	}
	// 	100% {
	// 		transform: translateY(6px);
	// 	}
	// }
</style>
