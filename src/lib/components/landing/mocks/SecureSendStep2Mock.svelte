<script lang="ts">
	import { onMount } from 'svelte';
	import { Shield, FileText, Lock, Eye, Check, Camera } from '@lucide/svelte';

	let mockEl: HTMLDivElement;
	let kycBtnEl: HTMLButtonElement;

	function offsetCenterPct(el: HTMLElement, ancestor: HTMLElement) {
		let x = 0;
		let y = 0;
		let cur: HTMLElement | null = el;
		while (cur && cur !== ancestor) {
			x += cur.offsetLeft;
			y += cur.offsetTop;
			cur = cur.offsetParent as HTMLElement | null;
		}
		const cx = x + el.offsetWidth / 2;
		const cy = y + el.offsetHeight / 2;
		return [(cx / ancestor.offsetWidth) * 100, (cy / ancestor.offsetHeight) * 100];
	}

	function updateTargets() {
		if (!mockEl || !kycBtnEl) return;
		if (!mockEl.offsetWidth || !mockEl.offsetHeight) return;
		const [x1, y1] = offsetCenterPct(kycBtnEl, mockEl);
		mockEl.style.setProperty('--t1x', `${x1}%`);
		mockEl.style.setProperty('--t1y', `${y1}%`);
	}

	onMount(() => {
		updateTargets();
		const ro = new ResizeObserver(updateTargets);
		ro.observe(mockEl);
		return () => ro.disconnect();
	});
</script>

<div class="ss-mock-outer relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-950">
	<!-- Demo pill -->
	<div class="pointer-events-none absolute right-3 top-3 z-40 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
		<span class="rec-dot block size-1.5 rounded-full bg-red-500"></span>
		Demo
	</div>

	<div class="ss-mock relative" bind:this={mockEl}>
		<!-- Browser chrome -->
		<div class="absolute inset-x-0 top-0 flex h-[6%] items-center gap-1.5 border-b border-zinc-200 bg-white px-3 text-[10px] text-zinc-500">
			<span class="size-1.5 rounded-full bg-zinc-300"></span>
			<span class="size-1.5 rounded-full bg-zinc-300"></span>
			<span class="size-1.5 rounded-full bg-zinc-300"></span>
			<span class="ml-3 truncate">secure.thebannonreport.com/reveal/k7p9…</span>
		</div>

		<!-- Reveal page (light theme to match Certless) -->
		<div class="absolute inset-x-0 top-[6%] bottom-0 overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100 p-3">
			<!-- Header -->
			<div class="text-center">
				<div class="mx-auto flex size-7 items-center justify-center rounded-full bg-secure-send/10">
					<Shield class="size-4 text-secure-send" />
				</div>
				<h1 class="mt-1 text-[12px] font-bold text-zinc-900">Secure Data Access</h1>
				<p class="text-[9px] text-zinc-500">Welcome, John Smith — Q1 2026 Insurance Documents</p>
			</div>

			<!-- Documents card -->
			<div class="mt-2 rounded-md border border-zinc-200 bg-white p-1.5">
				<div class="flex items-center gap-1 px-1 text-[10px] font-semibold text-zinc-900">
					<FileText class="size-3" />
					Documents
					<span class="ml-auto text-[9px] font-normal text-zinc-500">2 files</span>
				</div>
				<div class="mt-1 space-y-1">
					<div class="doc-row flex items-center gap-1.5 rounded border border-zinc-100 bg-zinc-50 px-1.5 py-1 text-[10px]">
						<div class="flex size-5 items-center justify-center rounded bg-zinc-200">
							<FileText class="size-2.5 text-zinc-400" />
						</div>
						<div class="min-w-0 flex-1">
							<div class="truncate font-medium text-zinc-700">insurance-cert.pdf</div>
							<div class="text-[8px] text-zinc-400">124 KB</div>
						</div>
						<div class="lock-icon"><Lock class="size-3 text-zinc-400" /></div>
						<div class="eye-icon"><Eye class="size-3 text-secure-send" /></div>
					</div>
					<div class="doc-row flex items-center gap-1.5 rounded border border-zinc-100 bg-zinc-50 px-1.5 py-1 text-[10px]">
						<div class="flex size-5 items-center justify-center rounded bg-zinc-200">
							<FileText class="size-2.5 text-zinc-400" />
						</div>
						<div class="min-w-0 flex-1">
							<div class="truncate font-medium text-zinc-700">rate-confirmation.pdf</div>
							<div class="text-[8px] text-zinc-400">89 KB</div>
						</div>
						<div class="lock-icon"><Lock class="size-3 text-zinc-400" /></div>
						<div class="eye-icon"><Eye class="size-3 text-secure-send" /></div>
					</div>
				</div>
			</div>

			<!-- Verification panel -->
			<div class="verify-panel mt-2 rounded-md border border-zinc-200 bg-white p-2.5 text-center">
				<Shield class="mx-auto size-5 text-secure-send" />
				<div class="mt-1 text-[11px] font-semibold text-zinc-900">Identity Verification Required</div>
				<p class="mt-0.5 text-[9px] text-zinc-500">Verify your identity to unlock these documents.</p>
				<button
					bind:this={kycBtnEl}
					type="button"
					class="kyc-btn mt-1.5 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-secure-send py-1.5 text-[10px] font-semibold text-white"
				>
					<Shield class="size-3" />
					Start Identity Verification
				</button>
			</div>

			<!-- Verified panel (overlays after click) -->
			<div class="verified-panel pointer-events-none absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-700">
				<div class="flex size-6 items-center justify-center rounded-full bg-emerald-100">
					<Check class="size-3.5" />
				</div>
				<div class="min-w-0">
					<div class="text-[11px] font-semibold">Verification Successful</div>
					<div class="text-[9px] text-emerald-600">You can now view the documents</div>
				</div>
			</div>

			<!-- Camera viewfinder overlay (during verification) -->
			<div class="scan-overlay pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[1px]">
				<div class="scan-ring relative flex size-16 items-center justify-center rounded-full border-2 border-white/30">
					<Camera class="size-7 text-white" />
					<div class="scan-line absolute inset-x-0 h-px bg-secure-send shadow-[0_0_8px_oklch(0.541_0.281_293.009)]"></div>
				</div>
			</div>
		</div>

		<!-- Cursor -->
		<svg class="cursor pointer-events-none absolute z-30" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
			<path d="M2 2 L18 10 L10 12 L8 18 Z" fill="white" stroke="black" stroke-width="0.8" stroke-linejoin="round" />
		</svg>

	</div>

	<!-- Loop progress bar -->
	<div class="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-0.5 bg-white/5">
		<div class="progress-bar h-full bg-secure-send"></div>
	</div>
</div>

<style>
	.ss-mock-outer { container-type: size; }
	.ss-mock {
		width: 100%;
		height: 100%;
	}
	@media (min-width: 1024px) {
		.ss-mock {
			aspect-ratio: 4 / 3;
			width: min(100cqi, calc(100cqh * 4 / 3));
			height: auto;
		}
	}

	/* Cursor — same pattern as step 1: keyframes consume --t1x/--t1y set by JS */
	.cursor {
		left: 8%;
		top: 92%;
		animation: cursorMove 9s ease-in-out infinite;
		transform-origin: top left;
	}
	@keyframes cursorMove {
		0%   { left: 8%; top: 92%; transform: scale(1); }
		28%  { left: var(--t1x, 50%); top: var(--t1y, 78%); transform: scale(1); }
		32%  { left: var(--t1x, 50%); top: var(--t1y, 78%); transform: scale(0.85); }
		36%  { left: var(--t1x, 50%); top: var(--t1y, 78%); transform: scale(1); }
		100% { left: var(--t1x, 50%); top: var(--t1y, 78%); transform: scale(1); }
	}

	/* KYC button — pulse at click */
	.kyc-btn { animation: pulseKyc 9s ease-in-out infinite; }
	@keyframes pulseKyc {
		0%, 30% { transform: scale(1); box-shadow: none; }
		33% { transform: scale(0.97); box-shadow: 0 0 0 4px oklch(0.541 0.281 293.009 / 0.3); }
		36%, 100% { transform: scale(1); box-shadow: none; }
	}

	/* Verification panel fades out once verified */
	.verify-panel { animation: panelFade 9s ease-in-out infinite; }
	@keyframes panelFade {
		0%, 60% { opacity: 1; }
		68%, 100% { opacity: 0.4; }
	}

	/* Camera scan overlay appears between click and success */
	.scan-overlay {
		opacity: 0;
		animation: scanShow 9s ease-in-out infinite;
	}
	@keyframes scanShow {
		0%, 36% { opacity: 0; pointer-events: none; }
		40%, 56% { opacity: 1; }
		60%, 100% { opacity: 0; }
	}
	.scan-ring { animation: ringPulse 1.6s ease-in-out infinite; }
	@keyframes ringPulse {
		0%, 100% { box-shadow: 0 0 0 0 oklch(0.541 0.281 293.009 / 0.4); }
		50% { box-shadow: 0 0 0 8px oklch(0.541 0.281 293.009 / 0); }
	}
	.scan-line { animation: scanSweep 1.4s ease-in-out infinite; }
	@keyframes scanSweep {
		0%, 100% { top: 10%; }
		50% { top: 90%; }
	}

	/* Verified panel slides in after scan */
	.verified-panel {
		opacity: 0;
		transform: translateY(8px);
		animation: verifiedShow 9s ease-out infinite;
	}
	@keyframes verifiedShow {
		0%, 60% { opacity: 0; transform: translateY(8px); }
		68%, 92% { opacity: 1; transform: translateY(0); }
		96%, 100% { opacity: 0; transform: translateY(4px); }
	}

	/* Document rows: locked icon visible early, eye icon after verification */
	.doc-row .eye-icon { display: none; }
	.lock-icon { animation: lockHide 9s ease-in-out infinite; }
	.eye-icon { animation: eyeShow 9s ease-in-out infinite; }
	@keyframes lockHide {
		0%, 60% { opacity: 1; transform: scale(1); }
		66%, 100% { opacity: 0; transform: scale(0.8); }
	}
	@keyframes eyeShow {
		0%, 60% { opacity: 0; transform: scale(0.8); }
		66%, 100% { opacity: 1; transform: scale(1); }
	}
	.doc-row .eye-icon { display: block; position: absolute; right: 6px; }
	.doc-row { position: relative; }

	.rec-dot { animation: pulseDot 1.4s ease-in-out infinite; }
	@keyframes pulseDot {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.45; transform: scale(0.8); }
	}

	.progress-bar {
		width: 0;
		animation: progress 9s linear infinite;
	}
	@keyframes progress {
		0% { width: 0%; }
		100% { width: 100%; }
	}

	@media (prefers-reduced-motion: reduce) {
		.cursor, .kyc-btn, .verify-panel, .scan-overlay, .scan-ring, .scan-line, .verified-panel, .lock-icon, .eye-icon, .rec-dot, .progress-bar {
			animation: none !important;
		}
		.scan-overlay { display: none; }
		.verified-panel { opacity: 1; transform: none; }
		.lock-icon { opacity: 0; }
		.eye-icon { opacity: 1; }
		.progress-bar { width: 100%; }
	}
</style>
