<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import { Search, Shield, Database, Eye } from '@lucide/svelte';

	const features = [
		{
			icon: Search,
			title: 'Real-Time Data',
			description: 'We query over 100 carrier and broker data points from FMCSA, Safer, Secretary of State, Department of Insurance, and more.'
		},
		{
			icon: Shield,
			title: 'Clear Risk Scoring',
			description: 'Every broker or carrier is scored as Safe to Proceed, Review Before Proceeding, Potential Risk, or Do Not Use.'
		},
		{
			icon: Database,
			title: 'Constantly Updated Database',
			description: 'Our fraud database grows every day — so the intelligence you act on is never stale.'
		},
		{
			icon: Eye,
			title: 'Continuous Monitoring',
			description: 'Monitor any carrier or broker. Receive automated notifications for any changes to your monitored profiles.'
		}
	];
</script>

<section id="about" class="bg-background py-32">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeader
			label="Why Choose Us"
			title="Intelligence that protects your bottom line"
			description="Our predictive scoring system ranks risk, giving you the intelligence to make informed decisions before they become costly problems."
			variant="light"
		/>

		<div class="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature (feature.title)}
				<div class="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg">
					<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
						<feature.icon class="h-6 w-6" />
					</div>
					<h3 class="mt-6 text-lg font-semibold text-card-foreground">{feature.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
