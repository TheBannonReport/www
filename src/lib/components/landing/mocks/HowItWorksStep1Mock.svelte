<script lang="ts">
	import { onMount } from 'svelte';
	import { Search, ArrowRight, LoaderCircle } from '@lucide/svelte';

	let mockEl: HTMLDivElement;
	let inputEl: HTMLDivElement;
	let lookupBtnEl: HTMLButtonElement;

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
		if (!mockEl || !inputEl || !lookupBtnEl) return;
		if (!mockEl.offsetWidth || !mockEl.offsetHeight) return;
		const [x1, y1] = offsetCenterPct(inputEl, mockEl);
		const [x2, y2] = offsetCenterPct(lookupBtnEl, mockEl);
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
	<!-- Demo pill -->
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

		<!-- Persistent app shell -->
		<div class="absolute inset-x-0 top-[6%] bottom-0 overflow-hidden bg-zinc-950 text-zinc-100">
			<!-- TBR wordmark -->
			<div class="px-4 pt-3 text-[11px] font-black tracking-tight">
				<span class="text-white">BANNON</span><span class="text-zinc-600">REPORT</span>
			</div>

			<!-- Search view -->
			<div class="search-view absolute inset-x-0 bottom-0 top-9 px-4">
				<div class="text-center">
					<h1 class="text-[14px] font-bold leading-tight">Lookup any carrier or broker</h1>
					<p class="mt-0.5 text-[10px] text-zinc-500">100+ data sources · 4M data points · 100k+ flagged entities</p>
				</div>

				<div class="mx-auto mt-3 flex w-fit gap-0.5 rounded-md border border-zinc-800 bg-zinc-900 p-0.5 text-[10px]">
					<button class="seg-active rounded px-2 py-0.5 font-semibold">MC</button>
					<button class="rounded px-2 py-0.5 text-zinc-400">DOT</button>
					<button class="rounded px-2 py-0.5 text-zinc-400">Name</button>
					<button class="rounded px-2 py-0.5 text-zinc-400">VIN</button>
				</div>

				<div class="mx-auto mt-2 flex max-w-md items-center gap-1.5">
					<div bind:this={inputEl} class="flex h-8 flex-1 items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-2.5 text-[11px]">
						<Search class="size-3 shrink-0 text-zinc-500" />
						<span class="typed-text inline-block overflow-hidden whitespace-nowrap font-mono text-zinc-100">135797</span><span class="caret text-zinc-500">|</span>
					</div>
					<button
						bind:this={lookupBtnEl}
						type="button"
						class="lookup-btn inline-flex h-8 items-center gap-1 rounded-md bg-white px-3 text-[11px] font-semibold text-zinc-900"
					>
						Lookup
						<ArrowRight class="size-3" />
					</button>
				</div>
			</div>

			<!-- Loading view -->
			<div class="loading-view absolute inset-x-0 bottom-0 top-9 flex flex-col items-center justify-center gap-1.5">
				<div class="spinner">
					<LoaderCircle class="size-7 text-zinc-400" />
				</div>
				<p class="text-[10px] text-zinc-500">Looking up MC 135797…</p>
			</div>

			<!-- Result view -->
			<div class="result-view absolute inset-x-0 bottom-0 top-9 px-4">
				<div class="flex items-center justify-between text-[10px]">
					<span class="text-zinc-500">Results for <span class="font-mono text-zinc-300">MC 135797</span></span>
					<span class="text-zinc-600">1 match</span>
				</div>

				<div class="mt-2 rounded-lg border border-zinc-800 bg-zinc-900 p-2.5">
					<div class="flex items-center gap-2">
						<svg viewBox="0 0 100 60" class="size-9 shrink-0">
							<path d="M 10 50 A 40 40 0 0 1 30 18" stroke="#ef4444" stroke-width="6" fill="none" stroke-linecap="round" />
							<path d="M 30 18 A 40 40 0 0 1 50 10" stroke="#f97316" stroke-width="6" fill="none" stroke-linecap="round" />
							<path d="M 50 10 A 40 40 0 0 1 70 18" stroke="#eab308" stroke-width="6" fill="none" stroke-linecap="round" />
							<path d="M 70 18 A 40 40 0 0 1 90 50" stroke="#22c55e" stroke-width="6" fill="none" stroke-linecap="round" />
							<line x1="50" y1="50" x2="74" y2="22" stroke="#fff" stroke-width="2" stroke-linecap="round" />
							<circle cx="50" cy="50" r="3" fill="#fff" />
						</svg>
						<div class="min-w-0 flex-1">
							<div class="truncate text-[11px] font-bold">ACME TRUCKING LLC</div>
							<div class="text-[9px] text-zinc-500">DOT 1234567 · MC 135797</div>
						</div>
						<span class="rounded-full border border-orange-700 bg-orange-900/30 px-1.5 py-0.5 text-[8px] font-semibold uppercase text-orange-400">Potential risk</span>
					</div>
					<div class="mt-2 grid grid-cols-3 gap-1.5 text-[9px]">
						<div class="rounded bg-zinc-800/60 px-1.5 py-1 text-center">
							<div class="text-zinc-500">Score</div>
							<div class="font-mono text-zinc-200">42 / 100</div>
						</div>
						<div class="rounded bg-zinc-800/60 px-1.5 py-1 text-center">
							<div class="text-zinc-500">Flags</div>
							<div class="font-mono text-orange-400">4</div>
						</div>
						<div class="rounded bg-zinc-800/60 px-1.5 py-1 text-center">
							<div class="text-zinc-500">Authority</div>
							<div class="text-emerald-400">Active</div>
						</div>
					</div>
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
		<div class="progress-bar h-full bg-zinc-200"></div>
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

	.seg-active {
		background-color: rgb(244 244 245);
		color: rgb(24 24 27);
	}

	/* Typing — width capped to character count via ch so the caret doesn't drift */
	.typed-text {
		width: 0;
		max-width: 100%;
		animation: typing 9s steps(6, end) infinite;
	}
	@keyframes typing {
		0%, 18% { width: 0; }
		38%, 100% { width: 6ch; }
	}
	.caret { animation: blink 1s steps(2) infinite; }
	@keyframes blink {
		0%, 50% { opacity: 1; }
		50.01%, 100% { opacity: 0; }
	}

	.lookup-btn { animation: pulseLookup 9s ease-in-out infinite; }
	@keyframes pulseLookup {
		0%, 56% { transform: scale(1); box-shadow: none; }
		60% { transform: scale(0.96); box-shadow: 0 0 0 4px rgb(255 255 255 / 0.15); }
		63%, 100% { transform: scale(1); box-shadow: none; }
	}

	/* Search view fades out after lookup is clicked */
	.search-view { animation: searchHide 9s linear infinite; }
	@keyframes searchHide {
		0%, 62% { opacity: 1; transform: translateY(0); }
		66%, 100% { opacity: 0; transform: translateY(-4px); pointer-events: none; }
	}

	/* Loading view briefly visible after click */
	.loading-view {
		opacity: 0;
		animation: loadingShow 9s linear infinite;
	}
	@keyframes loadingShow {
		0%, 62% { opacity: 0; }
		66%, 76% { opacity: 1; }
		80%, 100% { opacity: 0; }
	}
	.spinner {
		animation: spin 0.9s linear infinite;
		transform-origin: center;
	}
	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	/* Result view appears after loading */
	.result-view {
		opacity: 0;
		transform: translateY(8px);
		animation: resultShow 9s ease-out infinite;
	}
	@keyframes resultShow {
		0%, 76% { opacity: 0; transform: translateY(8px); }
		82%, 100% { opacity: 1; transform: translateY(0); }
	}

	/* Cursor disappears after click since the page transitions away */
	.cursor {
		left: 5%;
		top: 95%;
		opacity: 1;
		animation: cursorMove 9s ease-in-out infinite;
		transform-origin: top left;
	}
	@keyframes cursorMove {
		0%   { left: 5%; top: 95%; transform: scale(1); opacity: 1; }
		12%  { left: var(--t1x, 40%); top: var(--t1y, 56%); transform: scale(1); opacity: 1; }
		15%  { left: var(--t1x, 40%); top: var(--t1y, 56%); transform: scale(0.85); opacity: 1; }
		18%  { left: var(--t1x, 40%); top: var(--t1y, 56%); transform: scale(1); opacity: 1; }
		50%  { left: var(--t1x, 40%); top: var(--t1y, 56%); transform: scale(1); opacity: 1; }
		58%  { left: var(--t2x, 75%); top: var(--t2y, 56%); transform: scale(1); opacity: 1; }
		61%  { left: var(--t2x, 75%); top: var(--t2y, 56%); transform: scale(0.85); opacity: 1; }
		64%  { left: var(--t2x, 75%); top: var(--t2y, 56%); transform: scale(1); opacity: 1; }
		68%  { left: var(--t2x, 75%); top: var(--t2y, 56%); transform: scale(1); opacity: 0; }
		100% { left: var(--t2x, 75%); top: var(--t2y, 56%); transform: scale(1); opacity: 0; }
	}

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
		.typed-text, .caret, .lookup-btn, .search-view, .loading-view, .spinner, .result-view, .cursor, .rec-dot, .progress-bar {
			animation: none !important;
		}
		.typed-text { width: 6ch; }
		.search-view { display: none; }
		.loading-view { display: none; }
		.result-view { opacity: 1; transform: none; }
		.cursor { opacity: 0; }
		.progress-bar { width: 100%; }
	}
</style>
