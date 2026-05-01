<script lang="ts">
	import { TriangleAlert, Database } from '@lucide/svelte';
</script>

<div class="ss-mock-outer relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-950">
	<!-- Demo pill -->
	<div class="pointer-events-none absolute right-3 top-3 z-40 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
		<span class="rec-dot block size-1.5 rounded-full bg-red-500"></span>
		Demo
	</div>

	<div class="ss-mock relative">
		<!-- Browser chrome -->
		<div class="absolute inset-x-0 top-0 flex h-[6%] items-center gap-1.5 border-b border-zinc-800 bg-zinc-900 px-3 text-[10px] text-zinc-500">
			<span class="size-1.5 rounded-full bg-zinc-700"></span>
			<span class="size-1.5 rounded-full bg-zinc-700"></span>
			<span class="size-1.5 rounded-full bg-zinc-700"></span>
			<span class="ml-3 truncate">app.thebannonreport.com/lookup#flags</span>
		</div>

		<!-- Risk Flags page -->
		<div class="absolute inset-x-0 top-[6%] bottom-0 overflow-hidden bg-zinc-950 p-3 text-zinc-100">
			<!-- Cross-check header -->
			<div class="mb-2 flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1.5">
				<div class="flex items-center gap-1.5">
					<Database class="size-3.5 text-zinc-400" />
					<div>
						<div class="text-[10px] font-semibold">Fraud database cross-check</div>
						<div class="text-[8px] text-zinc-500">100,000+ flagged scammers · stolen identities · chameleon carriers</div>
					</div>
				</div>
				<span class="match-pill rounded-full border border-red-700 bg-red-900/40 px-1.5 py-0.5 text-[8px] font-semibold uppercase text-red-400">2 matches</span>
			</div>

			<!-- Flags panel header -->
			<div class="flex items-center gap-1.5 text-[10px] font-semibold text-zinc-200">
				<TriangleAlert class="size-3 text-orange-400" />
				Risk Flags
				<span class="rounded bg-zinc-800 px-1 text-[8px] text-zinc-300">4</span>
			</div>

			<!-- Flag list with scan line -->
			<div class="mt-1.5 flex-col space-y-1.5">
				<div class="flag-row flag-1 relative flex items-start gap-2 rounded-md border border-red-900/50 bg-red-950/30 p-2 text-[9px]">
					<span class="rounded border border-red-700 bg-red-900/40 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-red-400">Red</span>
					<div class="min-w-0 flex-1">
						<div class="font-semibold text-red-200">Possible chameleon carrier</div>
						<div class="text-red-400/80">DOT 1234567 active for 18 days · prior DOT 9988221 (revoked) shares 2 officers and address.</div>
					</div>
				</div>

				<div class="flag-row flag-2 flex items-start gap-2 rounded-md border border-orange-900/50 bg-orange-950/30 p-2 text-[9px]">
					<span class="rounded border border-orange-700 bg-orange-900/40 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-orange-400">Orange</span>
					<div class="min-w-0 flex-1">
						<div class="font-semibold text-orange-200">Insurance coverage lapsed</div>
						<div class="text-orange-400/80">BIPD policy lapsed Jan 14, 2026 — currently operating without active filing.</div>
					</div>
				</div>

				<div class="flag-row flag-3 flex items-start gap-2 rounded-md border border-orange-900/50 bg-orange-950/30 p-2 text-[9px]">
					<span class="rounded border border-orange-700 bg-orange-900/40 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-orange-400">Orange</span>
					<div class="min-w-0 flex-1">
						<div class="font-semibold text-orange-200">4 inspection violations · 6 months</div>
						<div class="text-orange-400/80">2 out-of-service · driver hours and vehicle maintenance categories.</div>
					</div>
				</div>

				<div class="flag-row flag-4 flex items-start gap-2 rounded-md border border-yellow-900/50 bg-yellow-950/20 p-2 text-[9px]">
					<span class="rounded border border-yellow-600 bg-yellow-900/40 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-yellow-300">Yellow</span>
					<div class="min-w-0 flex-1">
						<div class="font-semibold text-yellow-100">2 authority status changes · last 12 months</div>
						<div class="text-yellow-200/70">Reinstated after revocation in Aug 2025.</div>
					</div>
				</div>
			</div>

			<!-- Scanning line that sweeps across the flag list -->
			<div class="scan-sweep pointer-events-none absolute left-3 right-3 top-[40%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
		</div>

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

	/* Each flag row appears with a scale+fade as the scan line passes */
	.flag-row { opacity: 0; transform: translateY(4px); }
	.flag-1 { animation: flagIn1 9s ease-out infinite; }
	.flag-2 { animation: flagIn2 9s ease-out infinite; }
	.flag-3 { animation: flagIn3 9s ease-out infinite; }
	.flag-4 { animation: flagIn4 9s ease-out infinite; }

	@keyframes flagIn1 { 0%, 14% { opacity: 0; transform: translateY(4px); } 22%, 100% { opacity: 1; transform: translateY(0); } }
	@keyframes flagIn2 { 0%, 26% { opacity: 0; transform: translateY(4px); } 34%, 100% { opacity: 1; transform: translateY(0); } }
	@keyframes flagIn3 { 0%, 38% { opacity: 0; transform: translateY(4px); } 46%, 100% { opacity: 1; transform: translateY(0); } }
	@keyframes flagIn4 { 0%, 50% { opacity: 0; transform: translateY(4px); } 58%, 100% { opacity: 1; transform: translateY(0); } }

	/* The matches pill flashes when fraud DB cross-check resolves */
	.match-pill { animation: matchFlash 9s ease-in-out infinite; }
	@keyframes matchFlash {
		0%, 60% { background-color: rgb(127 29 29 / 0.4); box-shadow: 0 0 0 0 rgb(220 38 38 / 0); }
		65% { background-color: rgb(220 38 38 / 0.55); box-shadow: 0 0 0 6px rgb(220 38 38 / 0.18); }
		72%, 100% { background-color: rgb(127 29 29 / 0.4); box-shadow: 0 0 0 0 rgb(220 38 38 / 0); }
	}

	/* Scan line sweeps top-to-bottom */
	.scan-sweep {
		opacity: 0;
		animation: sweep 9s ease-in-out infinite;
	}
	@keyframes sweep {
		0%, 12% { top: 18%; opacity: 0; }
		18% { opacity: 0.9; }
		60% { top: 92%; opacity: 0.9; }
		68%, 100% { top: 92%; opacity: 0; }
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
		.flag-row, .match-pill, .scan-sweep, .rec-dot, .progress-bar {
			animation: none !important;
		}
		.flag-row { opacity: 1; transform: none; }
		.scan-sweep { display: none; }
		.progress-bar { width: 100%; }
	}
</style>
