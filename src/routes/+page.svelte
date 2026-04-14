<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import semiTruck from '$lib/assets/semi-truck.png';
	import screenshot1 from '$lib/assets/img/Screenshot-1.png';
	import screenshot2 from '$lib/assets/img/Screenshot-2.png';
	import screenshot3 from '$lib/assets/img/Screenshot-3.png';
	import screenshot4 from '$lib/assets/img/Screenshot-4.png';
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
	let demoOpen = $state(false);
	let demoSlide = $state(0);

	const demoSlides = [
		{ img: screenshot1, step: '01', title: 'Data Extraction', comment: 'Paste any MC# or DOT number into the search bar and get instant results — no forms, no waiting.' },
		{ img: screenshot2, step: '02', title: '20-Point Risk Assessment', comment: 'Our 20-point risk scorecard surfaces hidden liabilities at a glance, so your team spends time on decisions, not digging.' },
		{ img: screenshot3, step: '03', title: 'Advanced Fraud Detection', comment: 'Red flags are automatically cross-referenced against our fraud database and highlighted with plain-language explanations.' },
		{ img: screenshot4, step: '04', title: 'Clear Results', comment: 'A single color-coded score tells you whether to proceed, proceed with caution, or walk away — in under 10 seconds.' }
	];

	function openDemo(index = 0) { demoSlide = index; demoOpen = true; }
	function closeDemo() { demoOpen = false; }
	function prevSlide() { demoSlide = (demoSlide - 1 + demoSlides.length) % demoSlides.length; }
	function nextSlide() { demoSlide = (demoSlide + 1) % demoSlides.length; }

	function handleModalKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') closeDemo();
		if (e.key === 'ArrowLeft') prevSlide();
		if (e.key === 'ArrowRight') nextSlide();
	}

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
			monthly: { price: '$80', href: 'https://app.thebannonreport.com/login?plan=core_carrier_tool&annual=false' },
			annual: { price: '$64', href: 'https://app.thebannonreport.com/login?plan=core_carrier_tool&annual=true' },
			features: ['Unlimited lookups', 'Carrier vetting', 'Insurance monitoring', 'Authority history'],
			popular: false
		},
		{
			name: 'Broker Forensics',
			description: 'Broker vetting only',
			monthly: { price: '$80', href: 'https://app.thebannonreport.com/login?plan=core_broker_tool&annual=false' },
			annual: { price: '$64', href: 'https://app.thebannonreport.com/login?plan=core_broker_tool&annual=true' },
			features: ['Unlimited lookups', 'Broker vetting', 'Insurance monitoring', 'Authority history'],
			popular: false
		},
		{
			name: 'Combo Forensics',
			description: 'Carrier + broker vetting',
			monthly: { price: '$125', href: 'https://app.thebannonreport.com/login?plan=core_combo_tool&annual=false' },
			annual: { price: '$100', href: 'https://app.thebannonreport.com/login?plan=core_combo_tool&annual=true' },
			features: ['Unlimited lookups', 'Carrier + broker vetting', 'Insurance monitoring', 'Authority history'],
			popular: true
		}
	];

	const teamPlans = [
		{
			name: 'Team 5',
			seats: '5 seats',
			description: 'Full vetting · 5 seats',
			monthly: { price: '$150', href: 'https://app.thebannonreport.com/login?plan=enterprise_5&annual=false' },
			annual: { price: '$120', href: 'https://app.thebannonreport.com/login?plan=enterprise_5&annual=true' },
			features: ['Everything in Combo', '5 team members', 'Shared organization']
		},
		{
			name: 'Team 25',
			seats: '25 seats',
			description: 'Full vetting · 25 seats',
			monthly: { price: '$350', href: 'https://app.thebannonreport.com/login?plan=enterprise_25&annual=false' },
			annual: { price: '$280', href: 'https://app.thebannonreport.com/login?plan=enterprise_25&annual=true' },
			features: ['Everything in Combo', '25 team members', 'Shared organization']
		}
	];

	let isAnnual = $state(false);

	const stats = [
		{ value: '30,000+', label: 'Flagged Entities' },
		{ value: '100+', label: 'Verified Data Sources' },
		{ value: '20-Point', label: 'Risk Assessment' },
		{ value: '2x Daily', label: 'Monitoring Alerts' }
	];

	const bannerStats = [
		{ value: '30K+', label: 'Flagged Entities' },
		{ value: '100+', label: 'Data Sources' },
		{ value: '50K+', label: 'Dirty Data Points' },
		{ value: '24/7', label: 'Monitoring' }
	];

</script>

{#snippet sectionHeader(label: string, title: string, description: string, variant: 'light' | 'dark')}
	<div class="mx-auto max-w-2xl text-center">
		
			<div class="flex items-center justify-center gap-4">
				<span class="h-px flex-1 max-w-12 {variant === 'dark' ? 'bg-accent-light/30' : 'bg-accent/30'}"></span>
				<p class="text-xs font-semibold uppercase tracking-widest {variant === 'dark' ? 'text-accent-light' : 'text-accent'}">
					{label}
				</p>
				<span class="h-px flex-1 max-w-12 {variant === 'dark' ? 'bg-accent-light/30' : 'bg-accent/30'}"></span>
			</div>
		<h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl {variant === 'dark' ? 'text-white' : 'text-foreground'}">
			{title}
		</h2>
		<p class="mt-6 text-lg leading-relaxed {variant === 'dark' ? 'text-white/50' : 'text-muted-foreground'}">
			{description}
		</p>
	</div>
{/snippet}

{#snippet statItem(value: string, label: string, size: 'sm' | 'lg')}
	<div class="text-center">
		{#if size === 'sm'}
			<div class="text-xl font-bold text-white">{value}</div>
			<div class="mt-1 text-xs text-white/40">{label}</div>
		{:else}
			<div class="text-3xl font-bold text-accent-light sm:text-4xl lg:text-5xl">{value}</div>
			<div class="mt-2 text-sm text-white/40">{label}</div>
		{/if}
	</div>
{/snippet}

<!-- ==================== HERO ==================== -->
<section class="relative flex min-h-dvh items-center overflow-hidden bg-surface-dark">
	<!-- Background truck image -->
	<img
		src={semiTruck}
		alt="Magnificent Semi Truck"
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.1]"
	/>

	<!-- Subtle gradient orbs -->
	<div
		class="pointer-events-none absolute -left-40 -top-40 h-150 w-150 rounded-full bg-glow-1 blur-[120px]"
	></div>
	<div
		class="pointer-events-none absolute -bottom-40 -right-40 h-125 w-125 rounded-full bg-glow-2 blur-[120px]"
	></div>

	<div class="relative mx-auto w-full min-w-0 max-w-7xl px-6 py-32 pt-24 sm:pt-32">
		<div class="mx-auto max-w-4xl text-center">
			<h1
				class="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
			>
				The Freight Industry's
				<br />
				<span class="text-accent-light">Report Card</span>
			</h1>

			<p class="mx-auto mt-8 max-w-2xl text-md leading-relaxed text-white/50 sm:text-xl">
				It only takes one bad broker or carrier to put your business at risk. We tap 100+ data
				points and 30,000+ flagged entities to spot the red flags before they cost you millions.
			</p>

			<!-- MC Lookup Search Bar -->
			<form
				onsubmit={handleLookup}
				class="mx-auto my-8 flex max-w-md items-center rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur-sm transition-colors focus-within:border-white/30 sm:my-16 sm:mb-20"
			>
				<div class="flex flex-1 items-center gap-2 pl-4">
					<Search class="h-5 w-5 shrink-0 text-white/40" />
					<input
						type="text"
						bind:value={mcNumber}
						placeholder="Enter MC#"
						class="w-full border-none bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-0"
					/>
				</div>
				<Button
					type="submit"
					class="h-10 shrink-0 rounded-full bg-accent px-5 text-sm font-semibold text-white hover:bg-accent/90"
				>
					Lookup
					<ArrowRight class="ml-1.5 h-4 w-4" />
				</Button>
			</form>

		
            <!-- Floating stat pills -->
            <div class="mx-auto grid w-full min-w-0 max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {#each stats as stat (stat.label)}
                    <div class="rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm">
                        {@render statItem(stat.value, stat.label, 'sm')}
                    </div>
                {/each}
            </div>
        </div>
	</div>
</section>

<!-- ==================== WHY CHOOSE US ==================== -->
<section id="about" class="bg-background py-32">
	<div class="mx-auto max-w-7xl px-6">
		{@render sectionHeader(
			'Why Choose Us',
			'Intelligence that protects your bottom line',
			'Our predictive scoring system ranks risk, giving you the intelligence to make informed decisions before they become costly problems.',
			'light'
		)}

		<div class="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature (feature.title)}
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
<section id="products" class="bg-surface-dark py-32">
	<div class="mx-auto max-w-7xl px-6">
		{@render sectionHeader(
			'Core Services',
			'Protection at every level',
			'Choose the forensics tool that fits your needs — from broker-only vetting to full carrier and broker protection.',
			'dark'
		)}

		<div class="mt-20 grid gap-8 lg:grid-cols-3">
			{#each services as service (service.title)}
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
						class="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-surface text-accent-light"
					>
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

<!-- ==================== HOW IT WORKS ==================== -->
<section id="how-it-works" class="bg-background py-32">
	<div class="mx-auto max-w-7xl px-6">
		{@render sectionHeader(
			'How It Works',
			'From data to decision in seconds',
			'Four rigorous steps stand between you and a bad partnership.',
			'light'
		)}

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
						class="mt-5 bg-accent text-white hover:bg-accent/90"
				onclick={() => openDemo(0)}
			>
				View Demo
			</Button>
		</div>
	</div>
</section>

<!-- ==================== DEMO MODAL ==================== -->
{#if demoOpen}
	<div
		role="dialog"
		aria-modal="true"
		aria-label="Product demo"
		class="fixed inset-0 z-100 flex items-center justify-center p-4"
		onkeydown={handleModalKeydown}
		tabindex="-1"
	>
		<!-- Backdrop -->
		<div
			class="absolute inset-0 bg-black/70 backdrop-blur-sm"
			role="presentation"
			onclick={closeDemo}
		></div>

		<!-- Modal panel -->
		<div class="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl lg:h-140 lg:flex-row">

			<!-- Close button -->
			<button
				type="button"
				class="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80"
				onclick={closeDemo}
				aria-label="Close demo"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
			</button>

			<!-- Image / GIF -->
			<div class="relative w-full overflow-hidden bg-muted lg:w-3/5">
				<img
					src={demoSlides[demoSlide].img}
					alt={demoSlides[demoSlide].title}
					class="h-56 w-full object-cover object-top sm:h-72 lg:h-full"
				/>
			</div>

			<!-- Text panel -->
			<div class="flex w-full flex-col justify-between p-8 lg:w-2/5">
				<div>
					<p class="text-xs font-semibold uppercase tracking-widest text-accent">
						Step {demoSlides[demoSlide].step} of {demoSlides.length}
					</p>
					<h3 class="mt-2 text-2xl font-bold tracking-tight text-foreground">
						{demoSlides[demoSlide].title}
					</h3>
					<p class="mt-4 text-sm leading-relaxed text-muted-foreground">
						{demoSlides[demoSlide].comment}
					</p>
				</div>

				<!-- Dot indicators -->
				<div class="mt-8 flex items-center gap-2">
					{#each demoSlides as _, idx (idx)}
						<button
							type="button"
							class="h-2 rounded-full transition-all duration-300 {idx === demoSlide ? 'w-6 bg-accent' : 'w-2 bg-border hover:bg-muted-foreground'}"
							onclick={() => (demoSlide = idx)}
							aria-label="Go to slide {idx + 1}"
						></button>
					{/each}
					<Button
						size="sm"
						class="ml-auto bg-accent text-white hover:bg-accent/90"
						onclick={nextSlide}
					>
						{demoSlide === demoSlides.length - 1 ? 'Start over' : 'Next'}
						<ArrowRight class="ml-1 h-3.5 w-3.5" />
					</Button>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- ==================== STATS BANNER ==================== -->
<section class="relative overflow-hidden bg-surface-dark py-24">
	<div
		class="pointer-events-none absolute inset-0 bg-linear-to-r from-glow-1 via-transparent to-glow-2"
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
		<div class="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4">
			{#each bannerStats as stat (stat.label)}
				<div class="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm">
					{@render statItem(stat.value, stat.label, 'lg')}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ==================== PRICING ==================== -->
<section id="pricing" class="bg-background py-32">
	<div class="mx-auto max-w-7xl px-6">
		{@render sectionHeader(
			'Pricing',
			'Plans that scale with you',
			'Start protecting your business today. All plans include unlimited lookups.',
			'light'
		)}

		<!-- Monthly / Annual Toggle -->
		<div class="mx-auto mt-12 flex items-center justify-center gap-3">
			<span class="text-sm font-medium {!isAnnual ? 'text-foreground' : 'text-muted-foreground'}">Monthly</span>
			<button
				type="button"
				onclick={() => (isAnnual = !isAnnual)}
				class="relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-border transition-colors {isAnnual ? 'bg-accent' : 'bg-muted'}"
				role="switch"
				aria-checked={isAnnual}
				aria-label="Toggle annual billing"
			>
				<span
					class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform {isAnnual ? 'translate-x-5.5' : 'translate-x-0.75'}"
				></span>
			</button>
			<span class="text-sm font-medium {isAnnual ? 'text-foreground' : 'text-muted-foreground'}">
				Annual
				<span class="ml-1 text-xs font-semibold text-accent">Save 20%</span>
			</span>
		</div>

		<!-- Core Plans — row 1 -->
		<div class="mx-auto mt-8 grid max-w-3xl gap-4 lg:grid-cols-3">
			{#each plans as plan (plan.name)}
				{@const tier = isAnnual ? plan.annual : plan.monthly}
				<div
					class="relative flex flex-col rounded-xl border p-5 transition-all duration-300 {plan.popular
						? 'border-accent bg-accent/5 shadow-lg shadow-accent/5 lg:scale-105'
						: 'border-border bg-card hover:border-accent/30'}"
				>
					{#if plan.popular}
						<Badge class="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-3 py-0.5 text-xs text-white">
							Most Popular
						</Badge>
					{/if}
					<h3 class="text-base font-semibold text-card-foreground">{plan.name}</h3>
					<p class="mt-0.5 text-xs text-muted-foreground">{plan.description}</p>

					<div class="mt-4 flex items-baseline gap-1">
						<span class="text-3xl font-bold text-card-foreground">{tier.price}</span>
						<span class="text-sm text-muted-foreground">/mo</span>
					</div>
					{#if isAnnual}
						<p class="mt-0.5 text-xs text-muted-foreground">Billed annually</p>
					{/if}

					<Separator class="my-4" />

					<ul class="flex-1 space-y-2">
						{#each plan.features as feat (feat)}
							<li class="flex items-center gap-2 text-xs text-muted-foreground">
								<Check class="h-3.5 w-3.5 shrink-0 text-accent" />
								{feat}
							</li>
						{/each}
					</ul>

					<Button
						href={tier.href}
						class="mt-5 w-full {plan.popular
							? 'bg-accent text-white hover:bg-accent/90'
							: 'bg-primary text-primary-foreground hover:bg-primary/90'}"
					>
						Get Started
					</Button>
				</div>
			{/each}
		</div>

		<!-- Team Plans — row 2, centered -->
		<div class="mx-auto mt-4 flex max-w-3xl flex-col items-center gap-4 lg:flex-row lg:justify-center">
			{#each teamPlans as plan (plan.name)}
				{@const tier = isAnnual ? plan.annual : plan.monthly}
				<div class="flex w-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 lg:w-[calc((100%-1rem)/3)]">
					<div class="flex items-center gap-2">
						<h3 class="text-base font-semibold text-card-foreground">{plan.name}</h3>
						<Badge variant="outline" class="text-[10px] uppercase">{plan.seats}</Badge>
					</div>
					<p class="mt-0.5 text-xs text-muted-foreground">{plan.description}</p>

					<div class="mt-4 flex items-baseline gap-1">
						<span class="text-3xl font-bold text-card-foreground">{tier.price}</span>
						<span class="text-sm text-muted-foreground">/mo</span>
					</div>
					{#if isAnnual}
						<p class="mt-0.5 text-xs text-muted-foreground">Billed annually</p>
					{/if}

					<Separator class="my-4" />

					<ul class="flex-1 space-y-2">
						{#each plan.features as feat (feat)}
							<li class="flex items-center gap-2 text-xs text-muted-foreground">
								<Check class="h-3.5 w-3.5 shrink-0 text-accent" />
								{feat}
							</li>
						{/each}
					</ul>

					<Button
						href={tier.href}
						class="mt-5 w-full bg-primary text-primary-foreground hover:bg-primary/90"
					>
						Get Started
					</Button>
				</div>
			{/each}
		</div>

		<!-- SecureSend Add-on — row 3, full width -->
        <div class="flex items-center justify-between gap-6 mx-auto mt-6 max-w-3xl rounded-2xl border border-dashed border-border bg-card px-8 py-5">
            <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div class="flex items-center gap-2">
                    <h3 class="text-lg font-semibold text-card-foreground">SecureSend</h3>
                    <Badge variant="outline" class="text-[10px] uppercase">Add-on</Badge>
                </div>
                <p class="text-sm text-muted-foreground">
                    Encrypted document exchange with identity verification
                </p>
            </div>
            <div class="flex shrink-0 items-center gap-4">
                <div class="flex items-baseline gap-1">
                    <span class="text-2xl font-bold text-card-foreground">+$99</span>
                    <span class="text-sm text-muted-foreground">/mo</span>
                </div>
            </div>
        </div>

		<p class="mt-10 text-center text-sm text-muted-foreground">
			All prices in USD. Annual plans billed yearly. Cancel anytime.
		</p>
	</div>
</section>

<!-- ==================== FINAL CTA ==================== -->
<section class="relative overflow-hidden bg-surface-dark py-32">
	<div
		class="pointer-events-none absolute -right-20 -top-20 h-100 w-100 rounded-full bg-glow-1 blur-[100px]"
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
