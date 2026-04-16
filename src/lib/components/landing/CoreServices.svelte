<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import SectionHeader from './SectionHeader.svelte';
	import { FileSearch, Activity, Lock, ChevronRight } from '@lucide/svelte';

	const services = [
		{
			icon: FileSearch,
			title: 'Broker Forensics',
			description: 'Vet any broker before you haul. We check bond status, authority history, complaint records, and cross-reference against known fraud rings targeting carriers.',
			tag: 'Broker Vetting'
		},
		{
			icon: Activity,
			title: 'Carrier Forensics',
			description: 'Verify carrier safety ratings, insurance coverage, operating authority, and CSA scores. Flag stolen identities and chameleon carriers before they touch your freight.',
			tag: 'Carrier Vetting'
		},
		{
			icon: Lock,
			title: 'Combo Forensics',
			description: 'Full carrier and broker protection in one plan at a lower combined price — the complete solution for brokerages and shippers who work both sides.',
			tag: 'Full Protection'
		}
	];
</script>

<section id="products" class="bg-background py-32">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeader
			label="Core Services"
			title="Protection at every level"
			description="Choose the forensics tool that fits your needs — from broker-only vetting to full carrier and broker protection."
			variant="light"
		/>

		<div class="mt-20 grid gap-8 lg:grid-cols-3">
			{#each services as service (service.title)}
				<div class="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg sm:p-10">
					<Badge variant="outline" class="mb-6 text-xs">
						{service.tag}
					</Badge>
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
						<service.icon class="h-7 w-7" />
					</div>
					<h3 class="mt-6 text-2xl font-semibold text-card-foreground">{service.title}</h3>
					<p class="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
					<a
						href="/pricing"
						class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
					>
						Learn more
						<ChevronRight class="h-4 w-4" />
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
