<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import SectionHeader from './SectionHeader.svelte';
	import { Globe, BarChart3, AlertTriangle, CheckCircle, Eye, EyeIcon, ArrowRight } from '@lucide/svelte';
	import HowItWorksStep1Mock from './mocks/HowItWorksStep1Mock.svelte';
	import HowItWorksStep2Mock from './mocks/HowItWorksStep2Mock.svelte';
	import HowItWorksStep3Mock from './mocks/HowItWorksStep3Mock.svelte';
	import HowItWorksStep4Mock from './mocks/HowItWorksStep4Mock.svelte';
	import DemoModal from '../DemoModal.svelte';

	let demoOpen = $state(false);
	let demoSlide = $state(0);

	const steps = [
		{
			number: '01',
			icon: Globe,
			title: 'Search Any Carrier or Broker',
			description: 'Paste an MC#, DOT, VIN — or just type a name. We pull from 100+ data sources (FMCSA, SAFER, Secretary of State, Department of Insurance) and build a complete profile in seconds.'
		},
		{
			number: '02',
			icon: BarChart3,
			title: 'Get the Full Profile',
			description: 'Authority history, insurance, inspections, contacts, associated entities — every data point we have, organized in one view.'
		},
		{
			number: '03',
			icon: AlertTriangle,
			title: '20-Point Risk + Fraud Cross-Check',
			description: 'Each entity is scored across 20 risk dimensions and matched against 100,000+ flagged scammers, stolen identities, and chameleon carriers.'
		},
		{
			number: '04',
			icon: CheckCircle,
			title: 'Clear Verdict + 2× Daily Monitoring',
			description: 'A single color-coded grade — Safe, Review, Potential Risk, or Do Not Use — plus continuous monitoring with alerts when status changes.'
		}
	];

	const demoSlides = [
		{ component: HowItWorksStep1Mock, step: '01', title: 'Search Any Carrier or Broker', comment: 'Paste an MC#, DOT, VIN — or just type a name. Results come back in seconds, no forms, no waiting.' },
		{ component: HowItWorksStep2Mock, step: '02', title: 'Get the Full Profile', comment: 'Authority, insurance, inspections, contacts, and associated entities — every data point we collected, organized in one view.' },
		{ component: HowItWorksStep3Mock, step: '03', title: '20-Point Risk + Fraud Cross-Check', comment: 'Red flags are scored, cross-referenced against our fraud database, and explained in plain language so your team decides — not digs.' },
		{ component: HowItWorksStep4Mock, step: '04', title: 'Clear Verdict + 2× Daily Monitoring', comment: 'A single color-coded grade tells you whether to proceed, proceed with caution, or walk away — and alerts you when anything changes.' }
	];

	function openDemo(index = 0) { demoSlide = index; demoOpen = true; }
	import LandingSection from './LandingSection.svelte';
</script>

<LandingSection id="how-it-works">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeader
			label="How It Works"
			title="From data to decision in seconds"
			description="Four rigorous steps stand between you and a bad partnership."
			variant="light"
		/>

		<div class="mt-20 grid gap-10 lg:grid-cols-4">
			{#each steps as step, i (step.number)}
				<div class="relative">
					{#if i < steps.length - 1}
						<div class="absolute right-0 top-10 hidden h-px w-[calc(100%-3rem)] translate-x-[calc(50%+1.5rem)] bg-border lg:block"></div>
					{/if}
					<button
						type="button"
						class="group flex w-full flex-col items-center text-center lg:items-start lg:text-left"
						onclick={() => openDemo(i)}
					>
						<div class="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/5">
							<step.icon class="h-8 w-8 text-accent" />
							<span class="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
								{step.number}
							</span>
						</div>
						<h3 class="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
						<p class="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.description}</p>
					</button>
				</div>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<Button
				size="lg"
				class="mt-5 bg-primary text-primary-foreground hover:bg-primary/90"
				onclick={() => openDemo(0)}
			>
				View Demo
				<EyeIcon class="ml-2" />
			</Button>
		</div>
	</div>
</LandingSection>

<DemoModal bind:open={demoOpen} slides={demoSlides} bind:currentSlide={demoSlide} />
