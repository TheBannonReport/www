<script lang="ts">
	import './app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>
<Navbar />
{@render children()}
<Footer />
