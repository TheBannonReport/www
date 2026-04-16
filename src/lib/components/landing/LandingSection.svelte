<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id = undefined,
		variant = 'light',
		py = 'py-16 sm:py-32',
		class: extraClass = '',
		children
	}: {
		id?: string;
		variant?: 'dark' | 'light';
		py?: string;
		class?: string;
		children: Snippet;
	} = $props();

	const base =
		variant === 'dark'
			? `relative overflow-hidden bg-surface-dark ${py}`
			: `bg-background ${py}`;
</script>

<section {id} class="{base} {extraClass}">
	{@render children()}
</section>
