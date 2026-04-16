<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import logo from '$lib/assets/logo.png';
	import secureSendIcon from '$lib/assets/img/SecureSendIcon.svg';
	import { Menu, X } from '@lucide/svelte';
	import { page } from '$app/state';

	let mobileMenuOpen = $state(false);
	let activeSection = $state('');

	const navLinks = [
		{ label: 'Products', href: '/#products' },
		{ label: 'SecureSend', href: '/#securesend' },
		{ label: 'How It Works', href: '/#how-it-works' },
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'Blog', href: '/blog' }
	];

	const sectionIds = navLinks
		.filter((l) => l.href.startsWith('/#'))
		.map((l) => l.href.slice(2));

	function isActive(link: { href: string }): boolean {
		if (link.href.startsWith('/#')) {
			return page.url.pathname === '/' && activeSection === link.href.slice(2);
		}
		return page.url.pathname === link.href || page.url.pathname.startsWith(link.href + '/');
	}

	$effect(() => {
		const observers: IntersectionObserver[] = [];

		for (const id of sectionIds) {
			const el = document.getElementById(id);
			if (!el) continue;

			const obs = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) activeSection = id;
				},
				{ rootMargin: '-30% 0px -60% 0px', threshold: 0 }
			);

			obs.observe(el);
			observers.push(obs);
		}

		return () => observers.forEach((o) => o.disconnect());
	});
</script>

<nav class="fixed top-0 z-50 w-full border-b border-white/10 bg-surface-dark-alpha backdrop-blur-xl">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2">
			<img src={logo} alt="The Bannon Report" class="h-8 w-auto" />
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-10 md:flex">
			{#each navLinks as link (link.label)}
				{#if link.label === 'SecureSend'}
					<a
						href={link.href}
						class="relative flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors {isActive(link)
							? 'text-secure-send-light'
							: 'text-secure-send hover:text-secure-send-light'}"
					>
						{link.label}
						{#if isActive(link)}
							<span class="absolute -bottom-1 left-0 h-px w-full bg-secure-send"></span>
						{/if}
					</a>
				{:else}
					<a
						href={link.href}
						class="relative text-sm font-medium tracking-wide transition-colors {isActive(link)
							? 'text-white'
							: 'text-white/70 hover:text-white'}"
					>
						{link.label}
						{#if isActive(link)}
							<span class="absolute -bottom-1 left-0 h-px w-full bg-accent"></span>
						{/if}
					</a>
				{/if}
			{/each}
		</div>

		<!-- Desktop CTA -->
		<div class="hidden items-center gap-3 md:flex">
			<!-- <Button variant="ghost" class="text-white/70 hover:text-white hover:bg-white/10">
				Sign In
			</Button> -->
			<Button class="bg-white text-surface-dark hover:bg-white/90">
				Get Started
			</Button>
		</div>

		<!-- Mobile Toggle -->
		<button
			class="text-white md:hidden"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileMenuOpen}
				<X class="h-6 w-6" />
			{:else}
				<Menu class="h-6 w-6" />
			{/if}
		</button>
	</div>

</nav>

<!-- Mobile Menu (outside nav to avoid stacking context issues) -->
{#if mobileMenuOpen}
	<!-- Backdrop — covers entire screen, blurs page content -->
	<button
		class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
		onclick={() => (mobileMenuOpen = false)}
		aria-label="Close menu"
	></button>
	<!-- Panel -->
	<div class="fixed inset-x-0 top-[65px] z-50 border-t border-white/10 bg-surface-dark px-6 py-6 md:hidden">
		<div class="flex flex-col gap-4">
			{#each navLinks as link (link.label)}
				{#if link.label === 'SecureSend'}
					<a
						href={link.href}
						class="flex items-center gap-2 text-base font-medium transition-colors {isActive(link)
							? 'text-secure-send-light underline decoration-secure-send underline-offset-4'
							: 'text-secure-send/70 hover:text-secure-send-light'}"
						onclick={() => (mobileMenuOpen = false)}
					>
						<img src={secureSendIcon} alt="" aria-hidden="true" class="h-4 w-4" />
						{link.label}
					</a>
				{:else}
					<a
						href={link.href}
						class="text-base font-medium transition-colors {isActive(link)
							? 'text-white underline decoration-accent underline-offset-4'
							: 'text-white/70 hover:text-white'}"
						onclick={() => (mobileMenuOpen = false)}
					>
						{link.label}
					</a>
				{/if}
			{/each}
			<div class="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
				<Button class="w-full justify-center bg-white text-surface-dark hover:bg-white/90">
					Get Started
				</Button>
			</div>
		</div>
	</div>
{/if}
