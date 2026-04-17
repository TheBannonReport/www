<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import { Check, X, ArrowRight, ArrowLeft, Users, Shield, FileSearch, Zap } from '@lucide/svelte';

	type Plan = {
		name: string;
		description: string;
		monthly: { price: string; href: string };
		annual: { price: string; href: string };
		features: string[];
		popular?: boolean;
		seats?: string;
	};

	let isAnnual = $state(false);

	/* ── Questionnaire state ── */
	let vetCarriers = $state(false);
	let vetBrokers = $state(false);

	const recommendedPlan = $derived.by(() => {
		if (vetCarriers && vetBrokers) return 'Combo Forensics';
		if (vetCarriers) return 'Carrier Forensics';
		if (vetBrokers) return 'Broker Forensics';
		return 'Combo Forensics'; // default recommendation
	});

	/* ── Plan data ── */
	const plans: Plan[] = [
		{
			name: 'Carrier Forensics',
			description: 'Carrier vetting only',
			monthly: { price: '$80', href: 'https://app.thebannonreport.com/login?plan=core_carrier_tool&annual=false' },
			annual: { price: '$64', href: 'https://app.thebannonreport.com/login?plan=core_carrier_tool&annual=true' },
			features: ['Unlimited lookups', 'Carrier vetting', 'Insurance monitoring', 'Authority history']
		},
		{
			name: 'Broker Forensics',
			description: 'Broker vetting only',
			monthly: { price: '$80', href: 'https://app.thebannonreport.com/login?plan=core_broker_tool&annual=false' },
			annual: { price: '$64', href: 'https://app.thebannonreport.com/login?plan=core_broker_tool&annual=true' },
			features: ['Unlimited lookups', 'Broker vetting', 'Insurance monitoring', 'Authority history']
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

	const teamPlans: Plan[] = [
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

	/* ── Feature comparison table ── */
	const featureRows = [
		{ feature: 'Unlimited lookups', carrier: true, broker: true, combo: true, team5: true, team25: true },
		{ feature: 'Carrier vetting', carrier: true, broker: false, combo: true, team5: true, team25: true },
		{ feature: 'Broker vetting', carrier: false, broker: true, combo: true, team5: true, team25: true },
		{ feature: 'Insurance monitoring', carrier: true, broker: true, combo: true, team5: true, team25: true },
		{ feature: 'Authority history', carrier: true, broker: true, combo: true, team5: true, team25: true },
		{ feature: 'Combined carrier + broker reports', carrier: false, broker: false, combo: true, team5: true, team25: true },
		{ feature: 'Team members', carrier: false, broker: false, combo: false, team5: true, team25: true },
		{ feature: 'Shared organization', carrier: false, broker: false, combo: false, team5: true, team25: true }
	];
</script>

<div class="min-h-screen">
	<!-- Hero -->
	<section class="relative overflow-hidden bg-surface-dark py-16 sm:py-24">
		<div
			class="pointer-events-none absolute -right-20 -top-20 h-100 w-100 rounded-full bg-glow-1 blur-[120px]"
		></div>
		<div class="relative mx-auto max-w-4xl px-6 text-center">
			<a
				href="/"
				class="mb-6 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
			>
				<ArrowLeft class="h-4 w-4" />
				Back to Home
			</a>
			<div class="mt-4">
				<Badge variant="outline" class="border-white/20 text-white/60">Pricing</Badge>
			</div>
			<h1 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
				Plans that scale with you
			</h1>
			<p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
				Start protecting your business today. All plans include unlimited lookups.
			</p>
		</div>
	</section>

	<!-- Content -->
	<div class="bg-background pt-16">

	<!-- Recommendation Questionnaire -->
	<div class="mx-auto max-w-3xl px-6">
		<div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-xl border border-border bg-card px-6 py-4">
			<p class="text-sm font-medium text-muted-foreground w-full sm:w-auto">I need to vet:</p>
			<label class="flex cursor-pointer items-center gap-2 text-sm">
				<input
					type="checkbox"
					bind:checked={vetCarriers}
					class="h-4 w-4 rounded border-input text-accent focus:ring-ring/20"
				/>
				<span class="font-medium text-card-foreground">Carriers</span>
			</label>
			<label class="flex cursor-pointer items-center gap-2 text-sm">
				<input
					type="checkbox"
					bind:checked={vetBrokers}
					class="h-4 w-4 rounded border-input text-accent focus:ring-ring/20"
				/>
				<span class="font-medium text-card-foreground">Brokers</span>
			</label>
			<span class="hidden h-4 w-px bg-border sm:block"></span>
			<p class="text-sm text-muted-foreground">
				Recommended: <span class="font-semibold text-card-foreground">{recommendedPlan}</span>
			</p>
		</div>
	</div>

	<!-- Billing Toggle -->
	<div id="plans" class="mx-auto mt-12 flex items-center justify-center gap-3 scroll-mt-24">
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

	<!-- Core Plans -->
	<div class="mx-auto mt-8 grid max-w-3xl gap-4 px-6 lg:grid-cols-3">
		{#each plans as plan (plan.name)}
			{@const tier = isAnnual ? plan.annual : plan.monthly}
			{@const isRecommended = plan.name === recommendedPlan}
			<div
				class="relative flex flex-col rounded-xl border p-5 transition-all duration-300 {isRecommended
					? 'border-accent bg-accent/5 shadow-lg shadow-accent/5 lg:scale-105'
					: 'border-border bg-card hover:border-accent/30'}"
			>
				{#if isRecommended}
					<Badge class="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-3 py-0.5 text-xs text-white">
						Recommended
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
					class="mt-5 w-full {isRecommended
						? 'bg-accent text-white hover:bg-accent/90'
						: 'bg-primary text-primary-foreground hover:bg-primary/90'}"
				>
					Get Started
				</Button>
			</div>
		{/each}
	</div>

	
	<!-- Team Plans -->
	<div class="mx-auto mt-4 flex max-w-3xl flex-col items-center gap-4 px-6 lg:flex-row lg:justify-center">
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

	<!-- SecureSend Add-on -->
	<div class="mx-auto mt-6 mb-20 flex max-w-3xl items-center justify-between gap-6 rounded-2xl border border-dashed border-secure-send/30 bg-secure-send/5 px-8 py-5">
		<div class="flex flex-wrap items-center gap-x-6 gap-y-2">
			<div class="flex items-center gap-2">
				<h3 class="text-lg font-semibold text-secure-send">SecureSend</h3>
				<Badge class="border-secure-send/30 bg-secure-send/10 text-[10px] uppercase text-secure-send">Add-on</Badge>
			</div>
			<p class="text-sm text-muted-foreground">
				Encrypted document exchange with identity verification
			</p>
		</div>
		<div class="flex shrink-0 items-center gap-4">
			<div class="flex items-baseline gap-1">
				<span class="text-2xl font-bold text-secure-send">+$99</span>
				<span class="text-sm text-muted-foreground">/mo</span>
			</div>
		</div>
	</div>

	<!-- Feature Comparison Table -->
	<div class="bg-surface-dark py-20">
		<div class="mx-auto max-w-5xl px-6">
			<h2 class="text-center text-2xl font-bold tracking-tight text-white">Compare Plans</h2>
			<p class="mt-2 text-center text-sm text-white/50">See exactly what's included in each plan.</p>

			<div class="mt-8 overflow-x-auto">
				<table class="w-full text-sm">
					<thead>
						<tr class="border-b border-white/10">
							<th class="py-3 pr-4 text-left font-medium text-white/50">Feature</th>
							<th class="px-4 py-3 text-center font-medium text-white/50">Carrier</th>
							<th class="px-4 py-3 text-center font-medium text-white/50">Broker</th>
							<th class="px-4 py-3 text-center font-medium text-white/50">
								<span class="inline-flex items-center gap-1.5">
									Combo
									<Badge class="bg-white/20 px-1.5 py-0 text-[9px] text-white">Best</Badge>
								</span>
						</th>
						<th class="px-4 py-3 text-center font-medium text-white/50">Team 5</th>
						<th class="px-4 py-3 text-center font-medium text-white/50">Team 25</th>
					</tr>
					</thead>
					<tbody>
						{#each featureRows as row (row.feature)}
							<tr class="border-b border-white/5">
								<td class="py-3 pr-4 text-white/80">{row.feature}</td>
								<td class="px-4 py-3 text-center">
									{#if row.carrier}
										<Check class="mx-auto h-4 w-4 text-accent-light" />
									{:else}
										<X class="mx-auto h-4 w-4 text-white/20" />
									{/if}
								</td>
								<td class="px-4 py-3 text-center">
									{#if row.broker}
										<Check class="mx-auto h-4 w-4 text-accent-light" />
									{:else}
										<X class="mx-auto h-4 w-4 text-white/20" />
									{/if}
								</td>
								<td class="px-4 py-3 text-center">
									{#if row.combo}
										<Check class="mx-auto h-4 w-4 text-accent-light" />
									{:else}
										<X class="mx-auto h-4 w-4 text-white/20" />
									{/if}
								</td>							<td class="px-4 py-3 text-center">
								{#if row.team5}
									<Check class="mx-auto h-4 w-4 text-accent-light" />
								{:else}
									<X class="mx-auto h-4 w-4 text-white/20" />
								{/if}
							</td>
							<td class="px-4 py-3 text-center">
								{#if row.team25}
									<Check class="mx-auto h-4 w-4 text-accent-light" />
								{:else}
									<X class="mx-auto h-4 w-4 text-white/20" />
								{/if}
							</td>							</tr>
						{/each}
						<!-- Price row -->
						<tr class="border-t border-white/10">
							<td class="py-4 pr-4 font-medium text-white/80">Monthly price</td>
							<td class="px-4 py-4 text-center font-semibold text-white">$80</td>
							<td class="px-4 py-4 text-center font-semibold text-white">$80</td>
							<td class="px-4 py-4 text-center font-semibold text-white">$125</td>						<td class="px-4 py-4 text-center font-semibold text-white">$150</td>
						<td class="px-4 py-4 text-center font-semibold text-white">$350</td>						</tr>
					</tbody>
				</table>
			</div>

			<p class="mt-10 text-center text-sm text-white/40">
				All prices in USD. Annual plans billed yearly. Cancel anytime.
			</p>
		</div>
	</div>
	</div>
</div>
