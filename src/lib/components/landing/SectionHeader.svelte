<script lang="ts">
	let { label, title, description, variant = 'light' }: {
		label: string;
		title: string;
		description: string;
		variant?: 'light' | 'dark';
	} = $props();
</script>

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
