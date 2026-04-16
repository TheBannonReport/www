<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import DemoModal from '../DemoModal.svelte';
	import BrowserMockup from '../BrowserMockup.svelte';
	import { Shield, FileSearch, Lock, Activity, ArrowRight, EyeIcon } from '@lucide/svelte';
	import secureSendIcon from '$lib/assets/img/SecureSendIcon.svg';
	import screenshot1 from '$lib/assets/img/Screenshot-1.png';
	import screenshot2 from '$lib/assets/img/Screenshot-2.png';
	import screenshot3 from '$lib/assets/img/Screenshot-3.png';
	import screenshot4 from '$lib/assets/img/Screenshot-4.png';
	import screenshotSecureSend from '$lib/assets/img/Screenshot-securesend.png';
	import screenshotSecureSendMobile from '$lib/assets/img/Screenshot-securesend-mobile.png';
	import type { Component } from 'svelte';

	let ssOpen = $state(false);
	let ssSlide = $state(0);

	const ssSlides = [
		{ img: screenshot1, step: '01', title: 'Carrier Lookup', comment: 'Look up any carrier by DOT number in TBR, then launch a SecureSend engagement directly from the results.' },
		{ img: screenshot2, step: '02', title: 'Send Secure Request', comment: 'A tracked, identity-gated request is sent to the carrier\'s principals — owners, drivers, or contacts — to submit their documents.' },
		{ img: screenshot3, step: '03', title: 'KYC Verification', comment: 'The recipient must pass identity verification before the document is revealed. No more impersonation or document interception.' },
		{ img: screenshot4, step: '04', title: 'Document Delivered', comment: 'Once verified, the document is unlocked and you get a full engagement history, email notifications, and audit trail.' }
	];

	function openSsDemo(index = 0) { ssSlide = index; ssOpen = true; }

	const cardContent = [
		{
			icon: Shield,
			title: 'Identity-Gated Access',
			text: 'KYC verification before any document is revealed'
		},
		{
			icon: FileSearch,
			title: 'Full Audit Trail',
			text: 'Engagement history, email notifications, and tracking'
		},
		{
			icon: Lock,
			title: 'Fraud Elimination',
			text: 'Eliminates interception and impersonation risk'
		},
		{
			icon: Activity,
			title: 'Usage-Metered',
			text: 'Pay per engagement and reveal — scale as you grow'
		}
	];
	import LandingSection from './LandingSection.svelte';
</script>

<LandingSection id="securesend" variant="dark">
	<div class="relative mx-auto max-w-7xl px-6">
		<div class="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
			<div class="w-full lg:w-1/2">
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-secure-send/15">
						<img src={secureSendIcon} alt="" aria-hidden="true" class="h-6 w-6" />
					</div>
					<Badge class="border-secure-send/30 bg-secure-send/10 text-secure-send text-xs font-semibold">
						Premium Add-on
					</Badge>
				</div>

				<div class="flex flex-col justify-between mt-6 sm:flex-row  gap-6">
					<div>
						<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
							SecureSend
						</h2>
						<p class="mt-2 text-lg font-medium text-secure-send-light">
							Verified document delivery for freight
						</p>
					</div>
					<Button
							variant="outline"
							class="h-12 border-white/20 bg-transparent px-6 text-base font-semibold text-white hover:bg-white"
							onclick={() => openSsDemo(0)}
						>
							View Demo
							<EyeIcon class="ml-2 h-4 w-4" />
						</Button>
				</div>

				<p class="mt-6 text-base leading-relaxed text-white/60">
					Close the gap between finding a carrier and qualifying them. After looking up a carrier by DOT number,
					launch a SecureSend engagement directly — sending a secure, identity-gated request to the carrier's
					principals to submit their documents.
				</p>
				<p class="mt-4 text-base leading-relaxed text-white/60">
					The recipient must pass KYC identity verification before documents are unlocked.
					No more chasing carriers over email and phone to collect W-9s, insurance certs, and compliance docs.
				</p>

				<div class="mt-8 grid grid-cols-2 gap-4">
				{#snippet card(Icon: Component, title: string, text: string)}
					<div class="rounded-xl border border-primary bg-primary/50 p-4">
						<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-secure-send/20">
							<Icon class="h-5 w-5 text-secure-send-light" />
						</div>
						<p class="mt-3 text-sm font-medium text-white">{title}</p>
						<p class="mt-1 text-xs text-white/50">{text}</p>
					</div>
				{/snippet}
				{#each cardContent as { icon, title, text } (title)}
					{@const Icon = icon}
					{@render card( Icon, title, text )}
				{/each}
				</div>
			</div>

			<div class="w-full lg:w-1/2">
				<div class="relative">
					<BrowserMockup variant="mobile" url="app.thebannonreport.com/securesend" class="relative border-secure-send/30">
						<img
							src={screenshotSecureSendMobile}
							alt="SecureSend workflow"
							class="h-120 w-full object-cover object-top"
						/>
					</BrowserMockup>
				</div>
			</div>
		</div>
	</div>
</LandingSection>

<DemoModal
	bind:open={ssOpen}
	slides={ssSlides}
	bind:currentSlide={ssSlide}
	accentClass="bg-secure-send"
	accentTextClass="text-secure-send"
	borderClass="border-secure-send/30"
	icon={{ src: secureSendIcon, alt: 'SecureSend' }}
/>
