<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import {
		Shield,
		Search,
		Activity,
		AlertTriangle,
		Database,
		CheckCircle,
		ArrowRight,
		BarChart3,
		Eye,
		FileSearch,
		Lock,
		Globe,
		ChevronRight,
		Check
	} from '@lucide/svelte';

	let mcNumber = $state('');

	function handleLookup(e: SubmitEvent) {
		e.preventDefault();
		const trimmed = mcNumber.trim();
		if (!trimmed) return;
		window.location.href = `https://app.thebannonreport.com/lookup?identifier=${encodeURIComponent(trimmed)}&type=mc`;
	}

	const features = [
		{
			icon: Search,
			title: 'Real-Time Data',
			description:
				'We query over 100 carrier and broker data points from FMCSA, Safer, Secretary of State, Department of Insurance, and more.'
		},
		{
			icon: Shield,
			title: 'Clear Risk Scoring',
			description:
				'Every broker or carrier is scored as Safe to Proceed, Review Before Proceeding, Potential Risk, or Do Not Use.'
		},
		{
			icon: Database,
			title: '30,000+ Flagged Entities',
			description:
				'Our database is constantly updated to keep you ahead of fraud and risky partnerships.'
		},
		{
			icon: Eye,
			title: 'Continuous Monitoring',
			description:
				'Monitor any carrier or broker. Receive automated notifications for any changes to your monitored profiles.'
		}
	];

	const services = [
		{
			icon: FileSearch,
			title: 'Broker Forensics',
			description:
				'Our predictive scoring system with AI insights uncovers high-risk brokers, exposing scammers, stolen identities, and organized crime rings before they wreak havoc on your business.',
			tag: 'Broker Vetting'
		},
		{
			icon: Activity,
			title: 'Carrier Forensics',
			description:
				'Our predictive scoring system with AI insights flags high-risk carriers, uncovering scammers, stolen identities, and organized crime rings to keep your operations protected.',
			tag: 'Carrier Vetting'
		},
		{
			icon: Lock,
			title: 'Combo Forensics',
			description:
				'Full protection from both fraudulent carriers and brokers at a lower price — the complete solution for your freight operations.',
			tag: 'Full Protection'
		}
	];

	const steps = [
		{
			number: '01',
			icon: Globe,
			title: 'Data Extraction',
			description:
				'We query over 100 carrier and broker data points from FMCSA, Safer, Secretary of State, Department of Insurance, and more.'
		},
		{
			number: '02',
			icon: BarChart3,
			title: '20-Point Risk Assessment',
			description:
				'Every entity undergoes rigorous evaluation using our proprietary vetting process to identify potential risks.'
		},
		{
			number: '03',
			icon: AlertTriangle,
			title: 'Advanced Fraud Detection',
			description:
				'We cross-reference each profile against our extensive database of 30,000+ known scammers, fraudsters, and high-risk operators.'
		},
		{
			number: '04',
			icon: CheckCircle,
			title: 'Clear Results',
			description:
				'Every broker or carrier is scored so you can decide with confidence. No guesswork, just data-backed decisions.'
		}
	];

	const plans = [
		{
			name: 'Carrier Forensics',
			description: 'Carrier vetting only',
			price: '$80',
			period: '/mo',
			features: ['Unlimited lookups', 'Carrier vetting', 'Insurance monitoring', 'Authority history'],
			popular: false
		},
		{
			name: 'Combo Forensics',
			description: 'Carrier + broker vetting',
			price: '$125',
			period: '/mo',
			features: [
				'Unlimited lookups',
				'Carrier + broker vetting',
				'Insurance monitoring',
				'Authority history'
			],
			popular: true
		},
		{
			name: 'Team 5',
			description: 'Full vetting · 5 seats',
			price: '$150',
			period: '/mo',
			features: ['Everything in Combo', '5 team members', 'Shared organization'],
			popular: false
		}
	];

	const stats = [
		{ value: '30,000+', label: 'Flagged Entities' },
		{ value: '100+', label: 'Verified Data Sources' },
		{ value: '20-Point', label: 'Risk Assessment' },
		{ value: '2x Daily', label: 'Monitoring Alerts' }
	];
</script>

<!-- ==================== HERO ==================== -->
<section class="relative flex min-h-dvh items-center overflow-hidden bg-[oklch(0.14_0.03_260)]">
	<!-- Subtle gradient orbs -->
	<div
		class="pointer-events-none absolute -left-40 -top-40 h-150 w-150 rounded-full bg-[oklch(0.35_0.15_250/0.15)] blur-[120px]"
	></div>
	<div
		class="pointer-events-none absolute -bottom-40 -right-40 h-125 w-125 rounded-full bg-[oklch(0.40_0.12_280/0.1)] blur-[120px]"
	></div>

	<div class="relative mx-auto w-full min-w-0 max-w-7xl px-6 py-32 pt-40">
		<div class="mx-auto max-w-4xl text-center">
			<Badge
				variant="outline"
				class="mb-8 inline-flex flex-wrap border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/60"
			>
				Trusted by freight professionals nationwide
			</Badge>

			<h1
				class="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
			>
				The Freight Industry's
				<br />
				<span class="text-[oklch(0.65_0.18_250)]">Report Card</span>
			</h1>

			<p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
				It only takes one bad broker or carrier to put your business at risk. We tap 100+ data
				points and 30,000+ flagged entities to spot the red flags before they cost you millions.
			</p>

			<!-- MC Lookup Search Bar -->
			<form
				onsubmit={handleLookup}
				class="mx-auto mt-12 flex max-w-xl flex-col gap-3 sm:flex-row sm:gap-0 sm:rounded-full sm:border sm:border-white/15 sm:bg-white/5 sm:p-1.5 sm:backdrop-blur-sm sm:transition-colors sm:focus-within:border-white/30"
			>
				<div class="flex flex-1 items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm sm:border-0 sm:bg-transparent sm:py-0 sm:pl-5 sm:pr-0">
					<Search class="h-5 w-5 shrink-0 text-white/40" />
					<input
						type="text"
						bind:value={mcNumber}
						placeholder="Enter MC# to look up"
						class="w-full border-none bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-0"
					/>
				</div>
				<Button
					type="submit"
					class="h-11 w-full rounded-full bg-accent px-6 text-sm font-semibold text-white hover:bg-accent/90 sm:w-auto"
				>
					Lookup
					<ArrowRight class="ml-1.5 h-4 w-4" />
				</Button>
			</form>

		<div class="mx-auto mt-6 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
				<Button
					size="lg"
					class="h-13 w-full bg-accent px-8 text-base font-semibold text-white hover:bg-accent/90 sm:w-auto"
				>
					Get Your Report
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
				<Button
					variant="outline"
					size="lg"
					class="h-13 w-full border-white/20 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
				>
					See How It Works
				</Button>
			</div>
		</div>

		<!-- Floating stat pills -->
		<div class="mx-auto mt-24 grid w-full min-w-0 max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
			{#each stats as stat}
				<div class="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-sm">
					<div class="text-xl font-bold text-white">{stat.value}</div>
					<div class="mt-1 text-xs text-white/40">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ==================== WHY CHOOSE US ==================== -->
<section id="about" class="bg-background py-32">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mx-auto max-w-2xl text-center">
			<p class="text-xs font-semibold uppercase tracking-widest text-accent">Why Choose Us</p>
			<h2 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
				Intelligence that protects your bottom line
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-muted-foreground">
				Our predictive scoring system ranks risk, giving you the intelligence to make informed
				decisions before they become costly problems.
			</p>
		</div>

		<div class="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature}
				<div
					class="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20"
					>
						<feature.icon class="h-6 w-6" />
					</div>
					<h3 class="mt-6 text-lg font-semibold text-card-foreground">{feature.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ==================== CORE SERVICES ==================== -->
<section id="products" class="bg-[oklch(0.14_0.03_260)] py-32">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mx-auto max-w-2xl text-center">
			<p class="text-xs font-semibold uppercase tracking-widest text-[oklch(0.65_0.18_250)]">
				Core Services
			</p>
			<h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
				Protection at every level
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-white/50">
				Choose the forensics tool that fits your needs — from broker-only vetting to full
				carrier and broker protection.
			</p>
		</div>

		<div class="mt-20 grid gap-8 lg:grid-cols-3">
			{#each services as service}
				<div
					class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-10"
				>
					<Badge
						variant="outline"
						class="mb-6 border-white/20 bg-white/5 text-xs text-white/60"
					>
						{service.tag}
					</Badge>
					<div
						class="flex h-14 w-14 items-center justify-center rounded-xl bg-[oklch(0.55_0.18_250/0.15)] text-[oklch(0.65_0.18_250)]"
					>
						<service.icon class="h-7 w-7" />
					</div>
					<h3 class="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
					<p class="mt-4 text-sm leading-relaxed text-white/50">{service.description}</p>
					<a
						href="#pricing"
						class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[oklch(0.65_0.18_250)] transition-colors hover:text-[oklch(0.75_0.18_250)]"
					>
						Learn more
						<ChevronRight class="h-4 w-4" />
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ==================== HOW IT WORKS ==================== -->
<section id="how-it-works" class="bg-background py-32">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mx-auto max-w-2xl text-center">
			<p class="text-xs font-semibold uppercase tracking-widest text-accent">How It Works</p>
			<h2 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
				From data to decision in seconds
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-muted-foreground">
				Four rigorous steps stand between you and a bad partnership.
			</p>
		</div>

		<div class="mt-20 grid gap-10 lg:grid-cols-4">
			{#each steps as step, i}
				<div class="relative">
					<!-- Connector line (hidden on last item and mobile) -->
					{#if i < steps.length - 1}
						<div
							class="absolute right-0 top-10 hidden h-px w-[calc(100%-3rem)] translate-x-[calc(50%+1.5rem)] bg-border lg:block"
						></div>
					{/if}

					<div class="flex flex-col items-center text-center lg:items-start lg:text-left">
						<div
							class="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card"
						>
							<step.icon class="h-8 w-8 text-accent" />
							<span
								class="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white"
							>
								{step.number}
							</span>
						</div>
						<h3 class="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
						<p class="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
							{step.description}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<Button
				variant="outline"
				size="lg"
				class="h-12 px-8 text-base font-semibold"
			>
				View Demo
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
		</div>
	</div>
</section>

<!-- ==================== STATS BANNER ==================== -->
<section class="relative overflow-hidden bg-[oklch(0.14_0.03_260)] py-24">
	<div
		class="pointer-events-none absolute inset-0 bg-linear-to-r from-[oklch(0.35_0.15_250/0.1)] via-transparent to-[oklch(0.40_0.12_280/0.1)]"
	></div>
	<div class="relative mx-auto max-w-7xl px-6">
		<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
				Let our numbers speak
			</h2>
			<p class="mt-4 text-lg text-white/50">
				Backed by data. Driven by results.
			</p>
		</div>
		<div class="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
			<div class="text-center">
				<div class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">30K+</div>
				<div class="mt-2 text-sm text-white/40">Flagged Entities</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">100+</div>
				<div class="mt-2 text-sm text-white/40">Data Sources</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">50K+</div>
				<div class="mt-2 text-sm text-white/40">Dirty Data Points</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">24/7</div>
				<div class="mt-2 text-sm text-white/40">Monitoring</div>
			</div>
		</div>
	</div>
</section>

<!-- ==================== PRICING ==================== -->
<section id="pricing" class="bg-background py-32">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mx-auto max-w-2xl text-center">
			<p class="text-xs font-semibold uppercase tracking-widest text-accent">Pricing</p>
			<h2 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
				Plans that scale with you
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-muted-foreground">
				Start protecting your business today. All plans include unlimited lookups.
			</p>
		</div>

		<div class="mx-auto mt-20 grid max-w-5xl gap-8 lg:grid-cols-3">
			{#each plans as plan}
				<div
					class="relative flex flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-10 {plan.popular
						? 'border-accent bg-accent/5 shadow-xl shadow-accent/5'
						: 'border-border bg-card hover:border-accent/30'}"
				>
					{#if plan.popular}
						<Badge class="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-4 py-1 text-white">
							Most Popular
						</Badge>
					{/if}
					<h3 class="text-xl font-semibold text-card-foreground">{plan.name}</h3>
					<p class="mt-1 text-sm text-muted-foreground">{plan.description}</p>
					<div class="mt-6 flex items-baseline gap-1">
						<span class="text-4xl font-bold text-card-foreground">{plan.price}</span>
						<span class="text-muted-foreground">{plan.period}</span>
					</div>
					<Separator class="my-8" />
					<ul class="flex-1 space-y-4">
						{#each plan.features as feat}
							<li class="flex items-center gap-3 text-sm text-muted-foreground">
								<Check class="h-4 w-4 shrink-0 text-accent" />
								{feat}
							</li>
						{/each}
					</ul>
					<Button
						class="mt-10 w-full {plan.popular
							? 'bg-accent text-white hover:bg-accent/90'
							: 'bg-primary text-primary-foreground hover:bg-primary/90'}"
					>
						Get Started
					</Button>
				</div>
			{/each}
		</div>

		<p class="mt-10 text-center text-sm text-muted-foreground">
			All prices in USD. Annual plans available. Cancel anytime.
		</p>
	</div>
</section>

<!-- ==================== FINAL CTA ==================== -->
<section class="relative overflow-hidden bg-[oklch(0.14_0.03_260)] py-32">
	<div
		class="pointer-events-none absolute -right-20 -top-20 h-100 w-100 rounded-full bg-[oklch(0.35_0.15_250/0.15)] blur-[100px]"
	></div>
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
