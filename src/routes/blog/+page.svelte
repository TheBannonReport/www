<script lang="ts">
	import { ArrowRight, ArrowLeft, Clock } from '@lucide/svelte';

	let { data } = $props();

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog — The Bannon Report</title>
	<meta name="description" content="Insights, guides, and news from The Bannon Report." />
</svelte:head>

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
			<h1 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Blog</h1>
			<p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
				Insights, guides, and news on security and compliance.
			</p>
		</div>
	</section>

	<!-- Posts -->
	<section class="bg-background py-16 sm:py-24">
		<div class="mx-auto max-w-5xl px-6">
			{#if data.posts.length === 0}
				<p class="text-muted-foreground">No posts yet. Check back soon.</p>
			{:else}
				<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{#each data.posts as post}
						<a
							href="/blog/{post.slug}"
							class="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-lg"
						>
							{#if post.feature_image}
								<img
									src={post.feature_image}
									alt={post.title}
									class="h-48 w-full object-cover"
								/>
							{:else}
								<div class="h-48 w-full bg-muted"></div>
							{/if}

							<div class="flex flex-1 flex-col p-5">
								<div class="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
								{#if post.published_at}
									<span>{formatDate(post.published_at)}</span>
								{/if}
									{#if post.reading_time}
										<span class="flex items-center gap-1">
											<Clock class="h-3 w-3" />
											{post.reading_time} min
										</span>
									{/if}
								</div>

								<h2 class="mb-2 text-lg font-semibold leading-snug text-foreground group-hover:text-accent transition">
									{post.title}
								</h2>

								{#if post.excerpt}
									<p class="mb-4 line-clamp-3 flex-1 text-sm text-muted-foreground">
										{post.excerpt}
									</p>
								{/if}

								<span class="mt-auto flex items-center gap-1 text-sm font-medium text-accent group-hover:text-foreground transition">
									Read more <ArrowRight class="h-4 w-4" />
								</span>
							</div>
						</a>
					{/each}
				</div>

				<!-- Pagination -->
				{#if data.meta.pages > 1}
					<nav class="mt-16 flex items-center justify-center gap-4">
						{#if data.meta.page > 1}
							<a
								href="/blog?page={data.meta.page - 1}"
								class="rounded-lg border border-border px-4 py-2 text-sm text-foreground transition hover:bg-muted"
							>
								Previous
							</a>
						{/if}
						<span class="text-sm text-muted-foreground">
							Page {data.meta.page} of {data.meta.pages}
						</span>
						{#if data.meta.page < data.meta.pages}
							<a
								href="/blog?page={data.meta.page + 1}"
								class="rounded-lg border border-border px-4 py-2 text-sm text-foreground transition hover:bg-muted"
							>
								Next
							</a>
						{/if}
					</nav>
				{/if}
			{/if}
		</div>
	</section>
</div>
