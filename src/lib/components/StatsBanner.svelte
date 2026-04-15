<script lang="ts">
	const bannerStats = [
		{ value: '30K+', label: 'Flagged Entities' },
		{ value: '100+', label: 'Data Sources' },
		{ value: '40m+', label: 'Dirty Data Points' },
		{ value: '24/7', label: 'Monitoring' }
	];
</script>

<section class="relative overflow-hidden bg-surface-dark py-24">
	<div class="pointer-events-none absolute inset-0 bg-linear-to-r from-glow-1 via-transparent to-glow-2"></div>
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
					<div class="text-center">
						<div class="text-3xl font-bold text-accent-light sm:text-4xl lg:text-5xl">{stat.value}</div>
						<div class="mt-2 text-sm text-white/40">{stat.label}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
