<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, variant = 'browser', url = '', class: className = '' }: {
		children: Snippet;
		variant?: 'browser' | 'mobile';
		url?: string;
		class?: string;
	} = $props();
</script>

{#if variant === 'mobile'}
	<div class="mx-auto w-70 overflow-hidden rounded-[2.5rem] border-[3px] border-white/15 bg-surface-darker shadow-2xl {className}">
		<!-- Notch -->
		<div class="flex justify-center bg-white/5 py-2">
			<div class="h-5 w-28 rounded-full bg-white/10"></div>
		</div>
		<!-- Content -->
		<div>
			{@render children()}
		</div>
		<!-- Home bar -->
		<div class="flex justify-center bg-white/5 py-3">
			<div class="h-1.5 w-24 rounded-full bg-white/15"></div>
		</div>
	</div>
{:else}
	<div class="overflow-hidden rounded-xl border border-white/10 bg-surface-darker shadow-2xl {className}">
		<!-- Title bar -->
		<div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
			<div class="flex gap-1.5">
				<span class="h-3 w-3 rounded-full bg-white/15"></span>
				<span class="h-3 w-3 rounded-full bg-white/15"></span>
				<span class="h-3 w-3 rounded-full bg-white/15"></span>
			</div>
			{#if url}
				<div class="ml-2 flex-1 rounded-md bg-white/5 px-3 py-1">
					<span class="text-xs text-white/30">{url}</span>
				</div>
			{/if}
		</div>
		<!-- Content -->
		<div>
			{@render children()}
		</div>
	</div>
{/if}
