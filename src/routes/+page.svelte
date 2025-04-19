<script lang="ts">
	const mainSiteUrl = 'https://divit.qezta.com';
	const logoSrc = '/qezta.png';
	const logoAlt = 'Qezta Logo';
</script>

<div class="placeholder-container">
	<img src={logoSrc} alt={logoAlt} class="logo" />

	<h1>Under Development</h1>

	<p>
		This version of the site is currently under active development. Thanks for stopping by!
	</p>

	<p>
		Until then you can visit the my site here:
		<a href={mainSiteUrl} target="_blank" rel="noopener noreferrer">{mainSiteUrl}</a>
	</p>
</div>

<style lang="scss">
	.placeholder-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 80vh; // Adjust as needed to center vertically
		text-align: center;
		padding: 2rem;
		gap: 1.5rem; // Adds space between elements

		// Inherit font from global styles or set explicitly
		// font-family: var(--font-main, sans-serif); // Example using CSS variable
	}

	.logo {
		max-width: 150px; // Adjust size as needed
		height: auto;
		margin-bottom: 1rem; // Space below the logo
	}

	h1 {
		// Inherit color/font-size or set explicitly
		// color: var(--color-primary, #333); // Example
		margin-bottom: 0.5rem;
	}

	p {
		// Inherit color/font-size or set explicitly
		// color: var(--color-text, #555); // Example
		line-height: 1.6;
		max-width: 500px; // Limit text width for readability
	}

	a {
		// Inherit link color or set explicitly
		// color: var(--color-accent, blue); // Example
		text-decoration: underline;
		font-weight: bold;

		&:hover {
			text-decoration: none;
		}
	}
</style>