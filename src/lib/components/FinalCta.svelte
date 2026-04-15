<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="relative overflow-hidden bg-surface-dark py-32">
	<div class="pointer-events-none absolute -right-20 -top-20 h-100 w-100 rounded-full bg-glow-1 blur-[100px]"></div>
	<div class="relative mx-auto max-w-3xl px-6 text-center">
		<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
			Ready to protect your freight operations?
		</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
			Join thousands of freight professionals who trust The Bannon Report to vet their brokers and
			carriers.
		</p>
		<div class="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button
				size="lg"
				class="h-13 bg-accent px-8 text-base font-semibold text-white hover:bg-accent/90"
			>
				Get Your Report Today
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
			<Button
				variant="outline"
				size="lg"
				class="h-13 border-white/20 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10"
			>
				Report an Incident
			</Button>
		</div>
	</div>
</section>
