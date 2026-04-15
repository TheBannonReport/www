<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Search, ArrowRight } from '@lucide/svelte';
	import semiTruck from '$lib/assets/img/semi-truck.png';

	let mcNumber = $state('');

	function handleLookup(e: SubmitEvent) {
		e.preventDefault();
		const trimmed = mcNumber.trim();
		if (!trimmed) return;
		window.location.href = `https://app.thebannonreport.com/lookup?identifier=${encodeURIComponent(trimmed)}&type=mc`;
	}

	const stats = [
		{ value: '30,000+', label: 'Flagged Entities' },
		{ value: '100+', label: 'Verified Data Sources' },
		{ value: '20-Point', label: 'Risk Assessment' },
		{ value: '2x Daily', label: 'Monitoring Alerts' }
	];
</script>

<section class="relative flex min-h-dvh items-center overflow-hidden bg-surface-dark">
	<img
		src={semiTruck}
		alt="Magnificent Semi Truck"
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.1]"
	/>

	<div class="pointer-events-none absolute -left-40 -top-40 h-150 w-150 rounded-full bg-glow-1 blur-[120px]"></div>
	<div class="pointer-events-none absolute -bottom-40 -right-40 h-125 w-125 rounded-full bg-glow-2 blur-[120px]"></div>

	<div class="relative mx-auto w-full min-w-0 max-w-7xl px-6 py-32 pt-24 sm:pt-32">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
				The Freight Industry's
				<br />
				<span class="text-accent-light">Report Card</span>
			</h1>

			<p class="mx-auto mt-8 max-w-2xl text-md leading-relaxed text-white/50 sm:text-xl">
				It only takes one bad broker or carrier to put your business at risk. We tap 100+ data
				points and 30,000+ flagged entities to spot the red flags before they cost you millions.
			</p>

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

			<div class="mx-auto grid w-full min-w-0 max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
				{#each stats as stat (stat.label)}
					<div class="rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm">
						<div class="text-center">
							<div class="text-xl font-bold text-white">{stat.value}</div>
							<div class="mt-1 text-xs text-white/40">{stat.label}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
