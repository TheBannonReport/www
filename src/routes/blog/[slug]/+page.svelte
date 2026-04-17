<script lang="ts">
	import { ArrowLeft, Clock } from '@lucide/svelte';

	let { data } = $props();

	const post = $derived(data.post);

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{post.title} — The Bannon Report</title>
	{#if post.excerpt}
		<meta name="description" content={post.excerpt} />
	{/if}
	{#if post.feature_image}
		<meta property="og:image" content={post.feature_image} />
	{/if}
</svelte:head>

<div class="min-h-screen">
	<!-- Hero -->
	<section class="relative overflow-hidden bg-surface-dark py-16 sm:py-24">
		<div
			class="pointer-events-none absolute -right-20 -top-20 h-100 w-100 rounded-full bg-glow-1 blur-[120px]"
		></div>
		<div class="relative mx-auto max-w-3xl px-6">
			<a
				href="/blog"
				class="mb-6 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
			>
				<ArrowLeft class="h-4 w-4" />
				Back to Blog
			</a>

			<!-- Tags -->
			{#if post.tags?.length}
				<div class="mt-4 flex flex-wrap gap-2">
					{#each post.tags as tag}
						<span class="rounded-full border border-white/20 px-3 py-0.5 text-xs text-white/60">
							{tag.name}
						</span>
					{/each}
				</div>
			{/if}

			<h1 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
				{post.title}
			</h1>

			<div class="mt-4 flex items-center gap-4 text-sm text-white/60">
				{#if post.published_at}
					<time datetime={post.published_at}>{formatDate(post.published_at)}</time>
				{/if}
				{#if post.reading_time}
					<span class="flex items-center gap-1">
						<Clock class="h-3.5 w-3.5" />
						{post.reading_time} min read
					</span>
				{/if}
				{#if post.authors?.[0]}
					<span>by {post.authors[0].name}</span>
				{/if}
			</div>
		</div>
	</section>

	<!-- Content -->
	<section class="bg-background py-16 sm:py-24">
		<div class="mx-auto max-w-3xl px-6">
			{#if post.feature_image}
				<img
					src={post.feature_image}
					alt={post.title}
					class="-mt-12 mb-10 w-full rounded-xl shadow-lg"
				/>
			{/if}

			<div class="prose prose-lg max-w-none prose-headings:tracking-tight prose-a:text-accent prose-a:underline hover:prose-a:text-foreground">
				{@html post.html}
			</div>
		</div>
	</section>
</div>
