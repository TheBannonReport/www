<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import SectionHeader from './SectionHeader.svelte';
	import { FileSearch, Activity, Lock, ChevronRight } from '@lucide/svelte';

	const services = [
		{
			icon: FileSearch,
			title: 'Broker Forensics',
			description: 'Our predictive scoring system with AI insights uncovers high-risk brokers, exposing scammers, stolen identities, and organized crime rings before they wreak havoc on your business.',
			tag: 'Broker Vetting'
		},
		{
			icon: Activity,
			title: 'Carrier Forensics',
			description: 'Our predictive scoring system with AI insights flags high-risk carriers, uncovering scammers, stolen identities, and organized crime rings to keep your operations protected.',
			tag: 'Carrier Vetting'
		},
		{
			icon: Lock,
			title: 'Combo Forensics',
			description: 'Full protection from both fraudulent carriers and brokers at a lower price — the complete solution for your freight operations.',
			tag: 'Full Protection'
		}
	];
</script>

<section id="products" class="bg-surface-dark py-32">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeader
			label="Core Services"
			title="Protection at every level"
			description="Choose the forensics tool that fits your needs — from broker-only vetting to full carrier and broker protection."
			variant="dark"
		/>

		<div class="mt-20 grid gap-8 lg:grid-cols-3">
			{#each services as service (service.title)}
				<div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-10">
					<Badge variant="outline" class="mb-6 border-white/20 bg-white/5 text-xs text-white/60">
						{service.tag}
					</Badge>
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-surface text-accent-light">
						<service.icon class="h-7 w-7" />
					</div>
					<h3 class="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
					<p class="mt-4 text-sm leading-relaxed text-white/50">{service.description}</p>
					<a
						href="#pricing"
						class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-light transition-colors hover:text-accent-lighter"
					>
						Learn more
						<ChevronRight class="h-4 w-4" />
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
