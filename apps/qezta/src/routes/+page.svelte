<script lang="ts">
	const mainSiteUrl = 'https://divit.qezta.com';
	const logoSrc = '/qezta.gif';
	const logoAlt = 'Qezta Logo';
</script>

<div class="placeholder-container">
	<img src={logoSrc} alt={logoAlt} class="logo" />

	<h1>Under Development</h1>

	<p>
		This version of the site is currently under active development. Thanks for stopping by!
	</p>

	<!-- Added a class to this paragraph -->
	<p class="link-paragraph">
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
		min-height: 80vh;
		text-align: center;
		padding: 2rem;
		gap: 1.5rem;
	}

	.logo {
		max-width: 250px;
		height: auto;
		margin-bottom: 1rem;
	}

	h1 {
		margin-bottom: 0.5rem;
	}

	p {
		line-height: 1.6;
		max-width: 500px;
	}

	.link-paragraph {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
	}
	/* --- End Added style --- */


	a {
		text-decoration: underline;
		font-weight: bold;

		&:hover {
			text-decoration: none;
		}
	}
</style>