<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { Separator } from '$lib/components/ui/separator';

	const productLinks = [
		{ label: 'Broker Forensics Tool', href: '/products/broker-forensics' },
		{ label: 'Carrier Forensics Tool', href: '/products/carrier-forensics' },
		{ label: 'Combo Forensics Tool', href: '/products/combo-forensics' },
		{ label: 'Report an Incident', href: '/report-incident' }
	];

	const companyLinks = [
		{ label: 'About', href: '#about' },
		{ label: 'How It Works', href: '#how-it-works' },
		{ label: 'News & Media', href: '/news' },
		{ label: 'Pricing', href: '#pricing' }
	];

	const socialLinks = [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/thebannonreport' },
		{ label: 'Facebook', href: 'https://www.facebook.com/bannonreport/' },
		{ label: 'Affiliate Program', href: '/affiliates' },
		{ label: 'Support', href: 'mailto:support@thebannonreport.com' }
	];
</script>

<footer class="bg-surface-darker text-white">
	<div class="mx-auto max-w-7xl px-6 pb-10 pt-20">
		<!-- Top section -->
		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
			<!-- Brand -->
			<div class="lg:col-span-1">
				<a href="/" class="inline-block">
					<img src={logo} alt="The Bannon Report" class="h-8 w-auto" />
				</a>
				<p class="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
					Protecting the freight industry with real-time vetting, predictive scoring, and 30,000+ flagged entities.
				</p>
			</div>

			<!-- Products -->
			<div>
				<h4 class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">Products</h4>
				<ul class="space-y-3">
					{#each productLinks as link (link.label)}
						<li>
							<a href={link.href} class="text-sm text-white/60 transition-colors hover:text-white">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Company -->
			<div>
				<h4 class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">Company</h4>
				<ul class="space-y-3">
					{#each companyLinks as link (link.label)}
						<li>
							<a href={link.href} class="text-sm text-white/60 transition-colors hover:text-white">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Social / Contact -->
			<div>
				<h4 class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">Connect</h4>
				<ul class="space-y-3">
					{#each socialLinks as link (link.label)}
						<li>
							<a href={link.href} class="text-sm text-white/60 transition-colors hover:text-white">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<Separator class="my-10 bg-white/10" />

		<!-- Bottom -->
		<div class="flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
			<p>&copy; {new Date().getFullYear()} The Bannon Report. All rights reserved.</p>
			<div class="flex gap-6">
				<a href="/terms" class="transition-colors hover:text-white/60">Terms of Service</a>
				<a href="/privacy" class="transition-colors hover:text-white/60">Privacy Policy</a>
			</div>
		</div>
	</div>
</footer>
