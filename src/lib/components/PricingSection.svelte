<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import SectionHeader from './SectionHeader.svelte';
	import { ArrowRight, Check } from '@lucide/svelte';

	const highlights = [
		'Unlimited lookups on every plan',
		'Carrier, broker, or combo vetting',
		'Team plans for 5 or 25 seats',
		'SecureSend add-on available'
	];
</script>

<section id="pricing" class="bg-background py-32">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeader
			label="Pricing"
			title="Plans that scale with you"
			description="Simple, transparent pricing for freight professionals. Find the right plan for your business."
			variant="light"
		/>

		<div class="mx-auto mt-12 max-w-xl">
			<div class="rounded-2xl border border-border bg-card p-8 text-center">
				<div class="flex items-center justify-center gap-3">
					<span class="text-4xl font-bold text-card-foreground">From $64</span>
					<span class="text-sm text-muted-foreground">/mo</span>
				</div>
				<p class="mt-1 text-xs text-muted-foreground">with annual billing</p>

				<ul class="mx-auto mt-6 flex max-w-xs flex-col gap-2.5 text-left">
					{#each highlights as item (item)}
						<li class="flex items-center gap-2 text-sm text-muted-foreground">
							<Check class="h-4 w-4 shrink-0 text-accent" />
							{item}
						</li>
					{/each}
				</ul>

				<Button
					href="/pricing"
					size="lg"
					class="mt-8 bg-accent px-8 text-white hover:bg-accent/90"
				>
					View Plans & Pricing
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</div>
		</div>
	</div>
</section>
