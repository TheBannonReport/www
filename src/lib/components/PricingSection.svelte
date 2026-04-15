<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import SectionHeader from './SectionHeader.svelte';
	import { Check } from '@lucide/svelte';

	let isAnnual = $state(false);

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
</script>

<section id="pricing" class="bg-background py-32">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeader
			label="Pricing"
			title="Plans that scale with you"
			description="Start protecting your business today. All plans include unlimited lookups."
			variant="light"
		/>

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
		<div class="mx-auto mt-6 flex max-w-3xl items-center justify-between gap-6 rounded-2xl border border-dashed border-border bg-card px-8 py-5">
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
