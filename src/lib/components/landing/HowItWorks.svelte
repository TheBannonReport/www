<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import SectionHeader from './SectionHeader.svelte';
	import { Globe, BarChart3, AlertTriangle, CheckCircle, Eye, EyeIcon, ArrowRight } from '@lucide/svelte';
	import screenshot1 from '$lib/assets/img/Screenshot-1.png';
	import screenshot2 from '$lib/assets/img/Screenshot-2.png';
	import screenshot3 from '$lib/assets/img/Screenshot-3.png';
	import screenshot4 from '$lib/assets/img/Screenshot-4.png';
	import DemoModal from '../DemoModal.svelte';

	let demoOpen = $state(false);
	let demoSlide = $state(0);

	const steps = [
		{
			number: '01',
			icon: Globe,
			title: 'Data Extraction',
			description: 'We pull from 100+ data sources — FMCSA, Safer, Secretary of State, Department of Insurance — to build a complete entity profile.'
		},
		{
			number: '02',
			icon: BarChart3,
			title: '20-Point Risk Assessment',
			description: 'Every entity undergoes a proprietary 20-point evaluation to surface hidden liabilities and risk indicators.'
		},
		{
			number: '03',
			icon: AlertTriangle,
			title: 'Fraud Database Cross-Check',
			description: 'Profiles are matched against our ever-growing database of 30,000+ flagged scammers, stolen identities, and high-risk operators.'
		},
		{
			number: '04',
			icon: CheckCircle,
			title: 'Score & Monitor',
			description: 'Get a clear risk score — Safe, Review, Potential Risk, or Do Not Use — then monitor for changes with 2× daily alerts.'
		}
	];

	const demoSlides = [
		{ img: screenshot1, step: '01', title: 'Data Extraction', comment: 'Paste any MC# or DOT number into the search bar and get instant results — no forms, no waiting.' },
		{ img: screenshot2, step: '02', title: '20-Point Risk Assessment', comment: 'Our 20-point risk scorecard surfaces hidden liabilities at a glance, so your team spends time on decisions, not digging.' },
		{ img: screenshot3, step: '03', title: 'Advanced Fraud Detection', comment: 'Red flags are automatically cross-referenced against our fraud database and highlighted with plain-language explanations.' },
		{ img: screenshot4, step: '04', title: 'Clear Results', comment: 'A single color-coded score tells you whether to proceed, proceed with caution, or walk away — in under 10 seconds.' }
	];

	function openDemo(index = 0) { demoSlide = index; demoOpen = true; }
</script>

<section id="how-it-works" class="bg-background py-32">
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
</section>

<DemoModal bind:open={demoOpen} slides={demoSlides} bind:currentSlide={demoSlide} />
