<script lang="ts">
	import { Shield, FileText, Users, TriangleAlert } from '@lucide/svelte';
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
			<span class="ml-3 truncate">app.thebannonreport.com/lookup?identifier=135797</span>
		</div>

		<!-- Carrier results page -->
		<div class="absolute inset-x-0 top-[6%] bottom-0 overflow-hidden bg-zinc-950 text-zinc-100">
			<!-- Verdict banner -->
			<div class="banner bg-orange-600 py-1 text-center text-[10px] font-bold uppercase tracking-widest text-white">
				Potential Risk
			</div>

			<div class="space-y-2 p-3">
				<!-- Carrier header -->
				<div class="panel rounded-xl border border-zinc-800 bg-zinc-900 p-3">
					<div class="flex items-start gap-3">
						<svg viewBox="0 0 100 60" class="size-12 shrink-0">
							<path d="M 10 50 A 40 40 0 0 1 30 18" stroke="#ef4444" stroke-width="6" fill="none" stroke-linecap="round" />
							<path d="M 30 18 A 40 40 0 0 1 50 10" stroke="#f97316" stroke-width="6" fill="none" stroke-linecap="round" />
							<path d="M 50 10 A 40 40 0 0 1 70 18" stroke="#eab308" stroke-width="6" fill="none" stroke-linecap="round" />
							<path d="M 70 18 A 40 40 0 0 1 90 50" stroke="#22c55e" stroke-width="6" fill="none" stroke-linecap="round" />
							<line x1="50" y1="50" x2="68" y2="28" stroke="#fff" stroke-width="2" stroke-linecap="round" />
							<circle cx="50" cy="50" r="3" fill="#fff" />
						</svg>
						<div class="min-w-0 flex-1">
							<h1 class="truncate text-[12px] font-bold tracking-tight">ACME TRUCKING LLC</h1>
							<div class="mt-0.5 text-[9px] text-zinc-500">DOT 1234567 · MC 135797</div>
							<div class="mt-1.5 flex flex-wrap gap-1">
								<span class="rounded border border-emerald-900 bg-emerald-950/50 px-1.5 py-0.5 text-[8px] text-emerald-400">COMMON — Active</span>
								<span class="rounded border border-emerald-900 bg-emerald-950/50 px-1.5 py-0.5 text-[8px] text-emerald-400">CONTRACT — Active</span>
								<span class="rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 text-[8px] text-zinc-400">BROKER — Inactive</span>
							</div>
						</div>
						<div class="text-right text-[9px]">
							<div class="text-zinc-500">Operation</div>
							<div class="font-semibold">Interstate</div>
							<div class="mt-0.5 text-zinc-500">Power Units</div>
							<div class="font-semibold">28</div>
						</div>
					</div>
				</div>

				<!-- Section nav -->
				<div class="flex gap-3 border-b border-zinc-800 px-1 text-[9px]">
					<span class="border-b border-white pb-1 font-semibold">Overview</span>
					<span class="pb-1 text-zinc-500">Risk Flags</span>
					<span class="pb-1 text-zinc-500">Contact</span>
					<span class="pb-1 text-zinc-500">Insurance</span>
					<span class="pb-1 text-zinc-500">Inspections</span>
					<span class="pb-1 text-zinc-500">Authority</span>
					<span class="pb-1 text-zinc-500">Associations</span>
				</div>

				<!-- Section panels grid -->
				<div class="grid grid-cols-2 gap-2">
					<div class="panel rounded-lg border border-zinc-800 bg-zinc-900 p-2">
						<div class="flex items-center gap-1 text-[9px] font-semibold text-zinc-300">
							<TriangleAlert class="size-3 text-orange-400" />
							Risk Flags
							<span class="ml-auto rounded-full bg-orange-900/40 px-1.5 text-[8px] text-orange-400">4</span>
						</div>
						<div class="mt-1 space-y-0.5 text-[8px] text-zinc-400">
							<div>· Possible chameleon carrier</div>
							<div>· 4 violations · 6 months</div>
							<div>· Insurance lapse · Jan 2026</div>
						</div>
					</div>

					<div class="panel rounded-lg border border-zinc-800 bg-zinc-900 p-2">
						<div class="flex items-center gap-1 text-[9px] font-semibold text-zinc-300">
							<Shield class="size-3 text-emerald-400" />
							Insurance
						</div>
						<div class="mt-1 space-y-0.5 text-[8px] text-zinc-400">
							<div>BIPD · $1,000,000</div>
							<div>Cargo · $250,000</div>
							<div class="text-orange-400">Lapsed Jan 14, 2026</div>
						</div>
					</div>

					<div class="panel rounded-lg border border-zinc-800 bg-zinc-900 p-2">
						<div class="flex items-center gap-1 text-[9px] font-semibold text-zinc-300">
							<FileText class="size-3 text-zinc-300" />
							Inspections
						</div>
						<div class="mt-1 grid grid-cols-3 gap-1 text-center text-[8px]">
							<div class="rounded bg-zinc-800 py-1">
								<div class="font-mono text-zinc-200">12</div>
								<div class="text-zinc-500">Total</div>
							</div>
							<div class="rounded bg-orange-950/40 py-1 text-orange-400">
								<div class="font-mono">4</div>
								<div>Violations</div>
							</div>
							<div class="rounded bg-zinc-800 py-1">
								<div class="font-mono text-zinc-200">2</div>
								<div class="text-zinc-500">OOS</div>
							</div>
						</div>
					</div>

					<div class="panel rounded-lg border border-zinc-800 bg-zinc-900 p-2">
						<div class="flex items-center gap-1 text-[9px] font-semibold text-zinc-300">
							<Users class="size-3 text-zinc-300" />
							Contact &amp; Officers
						</div>
						<div class="mt-1 space-y-0.5 text-[8px] text-zinc-400">
							<div>1234 Oak St, Dallas TX</div>
							<div>(555) 123‑4567</div>
							<div>3 officers · 2 entities</div>
						</div>
					</div>
				</div>
			</div>
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

	/* Banner appears first */
	.banner {
		opacity: 0;
		animation: bannerIn 9s ease-out infinite;
	}
	@keyframes bannerIn {
		0%, 5% { opacity: 0; }
		15%, 100% { opacity: 1; }
	}

	/* Panels stagger in */
	.panel {
		opacity: 0;
		transform: translateY(6px);
	}
	.panel:nth-of-type(1) { animation: panelIn 9s ease-out infinite; animation-delay: 0s; }
	.panel:nth-of-type(2) { animation: panelIn2 9s ease-out infinite; }
	.panel:nth-of-type(3) { animation: panelIn3 9s ease-out infinite; }
	.panel:nth-of-type(4) { animation: panelIn4 9s ease-out infinite; }
	.panel:nth-of-type(5) { animation: panelIn5 9s ease-out infinite; }

	@keyframes panelIn  { 0%, 14% { opacity: 0; transform: translateY(6px); } 22%, 100% { opacity: 1; transform: translateY(0); } }
	@keyframes panelIn2 { 0%, 22% { opacity: 0; transform: translateY(6px); } 30%, 100% { opacity: 1; transform: translateY(0); } }
	@keyframes panelIn3 { 0%, 30% { opacity: 0; transform: translateY(6px); } 38%, 100% { opacity: 1; transform: translateY(0); } }
	@keyframes panelIn4 { 0%, 38% { opacity: 0; transform: translateY(6px); } 46%, 100% { opacity: 1; transform: translateY(0); } }
	@keyframes panelIn5 { 0%, 46% { opacity: 0; transform: translateY(6px); } 54%, 100% { opacity: 1; transform: translateY(0); } }

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
		.banner, .panel, .rec-dot, .progress-bar {
			animation: none !important;
		}
		.banner, .panel { opacity: 1; transform: none; }
		.progress-bar { width: 100%; }
	}
</style>
