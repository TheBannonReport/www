<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import { Check, X, ArrowRight, Users, Shield, FileSearch, Zap } from '@lucide/svelte';

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
		{ feature: 'Unlimited lookups', carrier: true, broker: true, combo: true },
		{ feature: 'Carrier vetting', carrier: true, broker: false, combo: true },
		{ feature: 'Broker vetting', carrier: false, broker: true, combo: true },
		{ feature: 'Insurance monitoring', carrier: true, broker: true, combo: true },
		{ feature: 'Authority history', carrier: true, broker: true, combo: true },
		{ feature: 'Combined carrier + broker reports', carrier: false, broker: false, combo: true }
	];
</script>

<div class="min-h-screen bg-background pt-24">
	<!-- Header -->
	<div class="mx-auto max-w-4xl px-6 text-center">
		<Badge variant="outline" class="mb-4 border-accent/30 text-accent">Pricing</Badge>
		<h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
			Plans that scale with you
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
			Start protecting your business today. All plans include unlimited lookups.
		</p>
	</div>

	<!-- Recommendation Questionnaire -->
	<div class="mx-auto mt-16 max-w-2xl px-6">
		<div class="rounded-2xl border border-accent/20 bg-card p-8">
			<div class="flex items-center gap-3">
				<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
					<Zap class="h-5 w-5 text-accent" />
				</div>
				<div>
					<h2 class="text-lg font-semibold text-card-foreground">Find your plan</h2>
					<p class="text-sm text-muted-foreground">Tell us what you need and we'll recommend the best fit.</p>
				</div>
			</div>

			<div class="mt-6 space-y-4">
				<label class="flex cursor-pointer items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-accent/40 has-checked:border-accent has-checked:bg-accent/5">
					<input type="checkbox" bind:checked={vetCarriers} class="sr-only" />
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg {vetCarriers ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'}">
						<Shield class="h-5 w-5" />
					</div>
					<div>
						<p class="font-medium text-card-foreground">I need to vet carriers</p>
						<p class="text-sm text-muted-foreground">Verify carrier authorities, insurance, and safety records.</p>
					</div>
					<div class="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 {vetCarriers ? 'border-accent bg-accent' : 'border-border'}">
						{#if vetCarriers}
							<Check class="h-3 w-3 text-white" />
						{/if}
					</div>
				</label>

				<label class="flex cursor-pointer items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-accent/40 has-checked:border-accent has-checked:bg-accent/5">
					<input type="checkbox" bind:checked={vetBrokers} class="sr-only" />
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg {vetBrokers ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'}">
						<FileSearch class="h-5 w-5" />
					</div>
					<div>
						<p class="font-medium text-card-foreground">I need to vet brokers</p>
						<p class="text-sm text-muted-foreground">Check broker bonds, authority status, and complaint history.</p>
					</div>
					<div class="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 {vetBrokers ? 'border-accent bg-accent' : 'border-border'}">
						{#if vetBrokers}
							<Check class="h-3 w-3 text-white" />
						{/if}
					</div>
				</label>
			</div>

			<Separator class="my-6" />

			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm text-muted-foreground">We recommend</p>
					<p class="text-lg font-semibold text-card-foreground">{recommendedPlan}</p>
				</div>
				<Button href="#plans" class="bg-accent text-white hover:bg-accent/90">
					See Plan
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</div>
		</div>
	</div>

	<!-- Billing Toggle -->
	<div id="plans" class="mx-auto mt-20 flex items-center justify-center gap-3 scroll-mt-24">
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
	<div class="mx-auto mt-6 flex max-w-3xl items-center justify-between gap-6 rounded-2xl border border-dashed border-secure-send/30 bg-secure-send/5 px-8 py-5">
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
	<div class="mx-auto mt-20 max-w-3xl px-6 pb-32">
		<h2 class="text-center text-2xl font-bold tracking-tight text-foreground">Compare Plans</h2>
		<p class="mt-2 text-center text-sm text-muted-foreground">See exactly what's included in each plan.</p>

		<div class="mt-8 overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-border">
						<th class="py-3 pr-4 text-left font-medium text-muted-foreground">Feature</th>
						<th class="px-4 py-3 text-center font-medium text-muted-foreground">Carrier</th>
						<th class="px-4 py-3 text-center font-medium text-muted-foreground">Broker</th>
						<th class="px-4 py-3 text-center font-medium text-muted-foreground">
							<span class="inline-flex items-center gap-1.5">
								Combo
								<Badge class="bg-accent px-1.5 py-0 text-[9px] text-white">Best</Badge>
							</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{#each featureRows as row (row.feature)}
						<tr class="border-b border-border/50">
							<td class="py-3 pr-4 text-card-foreground">{row.feature}</td>
							<td class="px-4 py-3 text-center">
								{#if row.carrier}
									<Check class="mx-auto h-4 w-4 text-accent" />
								{:else}
									<X class="mx-auto h-4 w-4 text-muted-foreground/40" />
								{/if}
							</td>
							<td class="px-4 py-3 text-center">
								{#if row.broker}
									<Check class="mx-auto h-4 w-4 text-accent" />
								{:else}
									<X class="mx-auto h-4 w-4 text-muted-foreground/40" />
								{/if}
							</td>
							<td class="px-4 py-3 text-center">
								{#if row.combo}
									<Check class="mx-auto h-4 w-4 text-accent" />
								{:else}
									<X class="mx-auto h-4 w-4 text-muted-foreground/40" />
								{/if}
							</td>
						</tr>
					{/each}
					<!-- Price row -->
					<tr class="border-t border-border">
						<td class="py-4 pr-4 font-medium text-card-foreground">Monthly price</td>
						<td class="px-4 py-4 text-center font-semibold text-card-foreground">$80</td>
						<td class="px-4 py-4 text-center font-semibold text-card-foreground">$80</td>
						<td class="px-4 py-4 text-center font-semibold text-card-foreground">$125</td>
					</tr>
				</tbody>
			</table>
		</div>

		<p class="mt-10 text-center text-sm text-muted-foreground">
			All prices in USD. Annual plans billed yearly. Cancel anytime.
		</p>
	</div>
</div>
