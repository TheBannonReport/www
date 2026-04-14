<script lang="ts">
	import './app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	/**
	 * Change this one value to switch the entire color scheme.
	 * Options: "navy" | "emerald" | "crimson" | "slate" | "amber"
	 */
	const theme = 'amber';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div data-theme={theme}>
	<Navbar />
	{@render children()}
	<Footer />
</div>
