<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, Check } from '@lucide/svelte';

	const highlights = [
		'Unlimited lookups on every plan',
		'Carrier, broker, or combo vetting',
		'Team plans for 5 or 25 seats',
		'SecureSend add-on available'
	];
</script>

<section id="pricing" class="relative overflow-hidden bg-surface-dark py-16 sm:py-32">
	<div class="pointer-events-none absolute -right-20 -top-20 h-100 w-100 rounded-full bg-glow-1 blur-[100px]"></div>
	<div class="relative mx-auto max-w-3xl px-6 text-center">
		<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
			Ready to protect your freight operations?
		</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
			Join thousands of freight professionals who trust The Bannon Report to vet their brokers and
			carriers.
		</p>

		<div class="mx-auto mt-12 max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
			<div class="flex items-center justify-center gap-2">
				<span class="text-4xl font-bold text-white">From $64</span>
				<span class="text-sm text-white/50">/mo</span>
			</div>
			<p class="mt-1 text-xs text-white/40">with annual billing</p>

			<ul class="mx-auto mt-6 flex max-w-xs flex-col gap-2.5 text-left">
				{#each highlights as item (item)}
					<li class="flex items-center gap-2 text-sm text-white/60">
						<Check class="h-4 w-4 shrink-0 text-accent-light" />
						{item}
					</li>
				{/each}
			</ul>
		</div>

		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button
				href="/pricing"
				size="lg"
				class="h-13 bg-white px-8 text-base font-semibold text-surface-dark hover:bg-white/90"
			>
				View Plans & Pricing
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
			<Button
				href="https://app.thebannonreport.com/report"
				variant="outline"
				size="lg"
				class="h-13 border-white/20 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10"
			>
				Report an Incident
			</Button>
		</div>
	</div>
</section>
