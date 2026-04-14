<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import logo from '$lib/assets/logo.png';
	import { Menu, X } from '@lucide/svelte';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ label: 'Products', href: '#products' },
		{ label: 'How It Works', href: '#how-it-works' },
		{ label: 'Pricing', href: '#pricing' },
		{ label: 'About', href: '#about' },
		{ label: 'Blog', href: '/blog' }
	];
</script>

<nav class="fixed top-0 z-50 w-full border-b border-white/10 bg-[oklch(0.14_0.03_260/0.9)] backdrop-blur-xl">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2">
			<img src={logo} alt="The Bannon Report" class="h-8 w-auto" />
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-10 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-white"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Desktop CTA -->
		<div class="hidden items-center gap-3 md:flex">
			<Button variant="ghost" class="text-white/70 hover:text-white hover:bg-white/10">
				Sign In
			</Button>
			<Button class="bg-accent text-white hover:bg-accent/90">
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

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-white/10 bg-[oklch(0.14_0.03_260)] px-6 py-6 md:hidden">
			<div class="flex flex-col gap-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-base font-medium text-white/70 transition-colors hover:text-white"
						onclick={() => (mobileMenuOpen = false)}
					>
						{link.label}
					</a>
				{/each}
				<div class="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
					<Button variant="ghost" class="w-full justify-center text-white/70 hover:text-white hover:bg-white/10">
						Sign In
					</Button>
					<Button class="w-full justify-center bg-accent text-white hover:bg-accent/90">
						Get Started
					</Button>
				</div>
			</div>
		</div>
	{/if}
</nav>
