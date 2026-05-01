<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from '@lucide/svelte';
	import type { Component } from 'svelte';

	type Slide = {
		step: string;
		title: string;
		comment: string;
		img?: string;
		component?: Component;
	};

	let {
		open = $bindable(false),
		slides,
		currentSlide = $bindable(0),
		accentClass = 'bg-accent',
		accentTextClass = 'text-accent',
		borderClass = 'border-border',
		icon
	}: {
		open: boolean;
		slides: Slide[];
		currentSlide: number;
		accentClass?: string;
		accentTextClass?: string;
		borderClass?: string;
		icon?: { src: string; alt: string } | undefined;
	} = $props();

	function close() { open = false; }
	function prev() { currentSlide = (currentSlide - 1 + slides.length) % slides.length; }
	function next() { currentSlide = (currentSlide + 1) % slides.length; }

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	}
</script>

{#if open}
	<div
		role="dialog"
		aria-modal="true"
		aria-label="Demo"
		class="fixed inset-0 z-100 flex items-center justify-center p-4"
		onkeydown={handleKeydown}
		tabindex="-1"
	>
		<div
			class="absolute inset-0 bg-black/70 backdrop-blur-sm"
			role="presentation"
			onclick={close}
		></div>

		<div class="relative z-10 flex h-[85vh] max-h-190 w-full max-w-5xl flex-col overflow-hidden rounded-2xl border {borderClass} bg-background shadow-2xl lg:h-140 lg:flex-row">
			<div class="relative min-h-0 w-full flex-1 overflow-hidden bg-muted lg:h-full lg:w-3/5 lg:flex-none">
				{#if slides[currentSlide].component}
					{@const Mock = slides[currentSlide].component}
					<Mock />
				{:else if slides[currentSlide].img}
					<img
						src={slides[currentSlide].img}
						alt={slides[currentSlide].title}
						class="mx-auto h-full w-full object-contain"
					/>
				{/if}
			</div>

			<div class="relative flex h-56 w-full shrink-0 flex-col justify-between gap-4 p-6 sm:p-8 lg:h-full lg:w-2/5">
				<button
					type="button"
					class="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80"
					onclick={close}
					aria-label="Close demo"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
				</button>

				<div class="min-h-0 overflow-y-auto pr-12">
					<div class="flex items-center gap-2">
						{#if icon}
							<img src={icon.src} alt={icon.alt} aria-hidden="true" class="h-5 w-5" />
						{/if}
						<p class="text-xs font-semibold uppercase tracking-widest {accentTextClass}">
							Step {slides[currentSlide].step} of {slides.length}
						</p>
					</div>
					<h3 class="mt-2 text-2xl font-bold tracking-tight text-foreground">
						{slides[currentSlide].title}
					</h3>
					<p class="mt-3 text-sm leading-relaxed text-muted-foreground">
						{slides[currentSlide].comment}
					</p>
				</div>

				<div class="flex shrink-0 items-center gap-2">
					{#each slides as _, idx (idx)}
						<button
							type="button"
							class="h-2 rounded-full transition-all duration-300 {idx === currentSlide ? `w-6 ${accentClass}` : 'w-2 bg-border hover:bg-muted-foreground'}"
							onclick={() => (currentSlide = idx)}
							aria-label="Go to slide {idx + 1}"
						></button>
					{/each}
					<Button
						size="sm"
						class="ml-auto {accentClass} text-white hover:opacity-90"
						onclick={next}
					>
						{currentSlide === slides.length - 1 ? 'Start over' : 'Next'}
						<ArrowRight class="ml-1 h-3.5 w-3.5" />
					</Button>
				</div>
			</div>
		</div>
	</div>
{/if}
