<script lang="ts">
	import { onMount } from 'svelte';
	import { Lock, FileText, Search, Check } from '@lucide/svelte';

	let mockEl: HTMLDivElement;
	let ssBtnEl: HTMLButtonElement;
	let sendBtnEl: HTMLButtonElement;

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
		if (!mockEl || !ssBtnEl || !sendBtnEl) return;
		if (!mockEl.offsetWidth || !mockEl.offsetHeight) return;
		const [x1, y1] = offsetCenterPct(ssBtnEl, mockEl);
		const [x2, y2] = offsetCenterPct(sendBtnEl, mockEl);
		mockEl.style.setProperty('--t1x', `${x1}%`);
		mockEl.style.setProperty('--t1y', `${y1}%`);
		mockEl.style.setProperty('--t2x', `${x2}%`);
		mockEl.style.setProperty('--t2y', `${y2}%`);
	}

	onMount(() => {
		updateTargets();
		const ro = new ResizeObserver(updateTargets);
		ro.observe(mockEl);
		return () => ro.disconnect();
	});
</script>

<div class="ss-mock-outer relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-950">
	<!-- "Demo" indicator pill — top-right of the whole image area -->
	<div class="pointer-events-none absolute right-3 top-3 z-40 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
		<span class="rec-dot block size-1.5 rounded-full bg-red-500"></span>
		Demo
	</div>

	<div class="ss-mock relative" bind:this={mockEl}>
		<!-- Browser chrome -->
		<div class="absolute inset-x-0 top-0 flex h-[6%] items-center gap-1.5 border-b border-zinc-800 bg-zinc-900 px-3 text-[10px] text-zinc-500">
			<span class="size-1.5 rounded-full bg-zinc-700"></span>
			<span class="size-1.5 rounded-full bg-zinc-700"></span>
			<span class="size-1.5 rounded-full bg-zinc-700"></span>
			<span class="ml-3 truncate">app.thebannonreport.com/lookup</span>
		</div>

		<!-- Carrier results page -->
		<div class="absolute inset-x-0 top-[6%] bottom-0 bg-zinc-950 p-4">
			<div class="mb-3 flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs">
				<Search class="size-3.5 text-zinc-500" />
				<span class="text-zinc-400">MC 987654</span>
			</div>

			<div class="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
				<div class="flex items-start gap-3">
					<svg viewBox="0 0 100 60" class="size-10 shrink-0">
						<path d="M 10 50 A 40 40 0 0 1 30 18" stroke="#ef4444" stroke-width="6" fill="none" stroke-linecap="round" />
						<path d="M 30 18 A 40 40 0 0 1 50 10" stroke="#f97316" stroke-width="6" fill="none" stroke-linecap="round" />
						<path d="M 50 10 A 40 40 0 0 1 70 18" stroke="#eab308" stroke-width="6" fill="none" stroke-linecap="round" />
						<path d="M 70 18 A 40 40 0 0 1 90 50" stroke="#22c55e" stroke-width="6" fill="none" stroke-linecap="round" />
						<line x1="50" y1="50" x2="74" y2="22" stroke="#fff" stroke-width="2" stroke-linecap="round" />
						<circle cx="50" cy="50" r="3" fill="#fff" />
					</svg>
					<div class="min-w-0 flex-1 text-zinc-100">
						<h3 class="truncate text-sm font-bold tracking-tight">ACME TRUCKING LLC</h3>
						<p class="mt-0.5 text-[10px] text-zinc-500">DOT 1234567 · MC 987654</p>
						<div class="mt-1.5 flex flex-wrap gap-1">
							<span class="rounded border border-emerald-900 bg-emerald-950/50 px-1.5 py-0.5 text-[9px] text-emerald-400">COMMON — Active</span>
							<span class="rounded border border-emerald-900 bg-emerald-950/50 px-1.5 py-0.5 text-[9px] text-emerald-400">BROKER — Active</span>
						</div>
					</div>
				</div>

				<div class="mt-2.5">
					<button
						bind:this={ssBtnEl}
						type="button"
						class="ss-button inline-flex items-center gap-1.5 rounded-lg bg-secure-send px-3 py-1.5 text-[11px] font-semibold text-white"
					>
						<Lock class="size-3" />
						SecureSend
					</button>
				</div>
			</div>
		</div>

		<!-- Slide-over -->
		<div class="slideover absolute right-0 top-[6%] bottom-0 w-1/2 border-l border-secure-send/40 bg-zinc-900 shadow-2xl">
			<div class="flex items-center gap-2 border-b border-zinc-800 px-3 py-2.5 text-zinc-100">
				<div class="flex size-5 items-center justify-center rounded-md bg-secure-send/20">
					<Lock class="size-2.5 text-secure-send-light" />
				</div>
				<div class="min-w-0">
					<div class="text-[11px] font-semibold leading-tight">SecureSend</div>
					<div class="truncate text-[9px] text-zinc-500">to ACME TRUCKING LLC</div>
				</div>
			</div>

			<div class="space-y-2.5 p-3 text-zinc-100">
				<div>
					<div class="mb-1 text-[10px] font-medium text-zinc-400">Name *</div>
					<div class="flex h-7 items-center overflow-hidden rounded-md border border-zinc-700 bg-zinc-950 px-2 text-[11px]">
						<span class="typed-text inline-block overflow-hidden whitespace-nowrap">Q1 2026 Insurance Documents</span><span class="caret ml-px text-zinc-500">|</span>
					</div>
				</div>

				<div>
					<div class="mb-1 text-[10px] font-medium text-zinc-400">Attachments</div>
					<div class="file-row flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1.5 text-[10px]">
						<FileText class="size-3 shrink-0 text-zinc-500" />
						<span class="truncate">insurance-cert.pdf</span>
						<span class="ml-auto shrink-0 text-zinc-500">124 KB</span>
					</div>
				</div>

				<button
					bind:this={sendBtnEl}
					type="button"
					class="send-btn w-full rounded-md bg-zinc-100 py-1.5 text-[11px] font-semibold text-zinc-900"
				>
					Create Secure Send
				</button>
			</div>

			<div class="success absolute inset-x-3 bottom-3 flex items-center gap-1.5 rounded-md border border-emerald-700/60 bg-emerald-950/85 px-2.5 py-2 text-[11px] text-emerald-300 backdrop-blur-sm">
				<Check class="size-3.5 shrink-0" />
				Secure Send created!
			</div>
		</div>

		<!-- Cursor — top-left tip of svg is the click point -->
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
	.ss-mock-outer {
		container-type: size;
	}

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

	.slideover {
		transform: translateX(100%);
		opacity: 0;
		animation: slideIn 9s ease-in-out infinite;
	}
	@keyframes slideIn {
		0%, 22% { transform: translateX(100%); opacity: 0; }
		30%, 100% { transform: translateX(0); opacity: 1; }
	}

	.typed-text {
		max-width: 100%;
		width: 0;
		animation: typing 9s steps(28, end) infinite;
	}
	@keyframes typing {
		0%, 33% { width: 0; }
		55%, 100% { width: 100%; }
	}
	.caret {
		animation: blink 1s steps(2) infinite;
	}
	@keyframes blink {
		0%, 50% { opacity: 1; }
		50.01%, 100% { opacity: 0; }
	}

	.file-row {
		opacity: 0;
		transform: translateY(6px);
		animation: fileFade 9s ease-out infinite;
	}
	@keyframes fileFade {
		0%, 58% { opacity: 0; transform: translateY(6px); }
		66%, 100% { opacity: 1; transform: translateY(0); }
	}

	.ss-button {
		animation: pulseSs 9s ease-in-out infinite;
	}
	@keyframes pulseSs {
		0%, 17% { transform: scale(1); box-shadow: none; }
		20% { transform: scale(0.94); box-shadow: 0 0 0 6px oklch(0.541 0.281 293.009 / 0.35); }
		23%, 100% { transform: scale(1); box-shadow: none; }
	}

	.send-btn {
		animation: pulseSend 9s ease-in-out infinite;
	}
	@keyframes pulseSend {
		0%, 70% { background: #f4f4f5; transform: scale(1); }
		73% { background: #d4d4d8; transform: scale(0.97); }
		76%, 100% { background: #f4f4f5; transform: scale(1); }
	}

	.success {
		opacity: 0;
		transform: translateY(8px);
		animation: successFlash 9s ease-in-out infinite;
	}
	@keyframes successFlash {
		0%, 75% { opacity: 0; transform: translateY(8px); }
		80%, 92% { opacity: 1; transform: translateY(0); }
		96%, 100% { opacity: 0; transform: translateY(4px); }
	}

	/* Cursor reads --t1x/--t1y/--t2x/--t2y from .ss-mock — set by JS from each
	   button's measured offset center. Fallbacks are used until JS runs. */
	.cursor {
		left: 8%;
		top: 90%;
		animation: cursorMove 9s ease-in-out infinite;
		transform-origin: top left;
	}
	@keyframes cursorMove {
		0%   { left: 8%; top: 90%; transform: scale(1); }
		17%  { left: var(--t1x, 11%); top: var(--t1y, 33%); transform: scale(1); }
		20%  { left: var(--t1x, 11%); top: var(--t1y, 33%); transform: scale(0.85); }
		24%  { left: var(--t1x, 11%); top: var(--t1y, 33%); transform: scale(1); }
		60%  { left: var(--t1x, 11%); top: var(--t1y, 33%); transform: scale(1); }
		70%  { left: var(--t2x, 75%); top: var(--t2y, 54%); transform: scale(1); }
		73%  { left: var(--t2x, 75%); top: var(--t2y, 54%); transform: scale(0.85); }
		76%  { left: var(--t2x, 75%); top: var(--t2y, 54%); transform: scale(1); }
		100% { left: var(--t2x, 75%); top: var(--t2y, 54%); transform: scale(1); }
	}

	.rec-dot {
		animation: pulseDot 1.4s ease-in-out infinite;
	}
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
		.slideover, .typed-text, .file-row, .send-btn, .ss-button, .cursor, .success, .caret, .rec-dot, .progress-bar {
			animation: none !important;
		}
		.slideover { transform: translateX(0); opacity: 1; }
		.typed-text { width: 100%; }
		.file-row { opacity: 1; transform: none; }
		.success { display: none; }
		.progress-bar { width: 100%; }
	}
</style>
