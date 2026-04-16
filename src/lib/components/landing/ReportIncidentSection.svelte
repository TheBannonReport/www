<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, ShieldAlert } from '@lucide/svelte';
</script>

<section id="report" class="bg-background py-14 sm:py-20">
	<div class="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:text-left">
		<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-destructive/10">
			<ShieldAlert class="h-6 w-6 text-destructive" />
		</div>
		<div class="flex-1">
			<h2 class="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
				See something? Report it.
			</h2>
			<p class="mt-2 text-base text-muted-foreground">
				Freight fraud thrives in silence. Filing a report takes minutes and helps protect the entire
				industry. All reports are reviewed by our team and cross-referenced against 4M+ data points.
			</p>
		</div>
		<Button
			href="/report"
			size="lg"
			class="h-12 shrink-0 bg-primary px-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
		>
			Report an Incident
			<ArrowRight class="ml-2 h-4 w-4" />
		</Button>
	</div>
</section>
