<script lang="ts">
	import { Bell, Activity } from '@lucide/svelte';
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
			<span class="ml-3 truncate">app.thebannonreport.com/lookup#verdict</span>
		</div>

		<!-- Verdict + monitoring page -->
		<div class="absolute inset-x-0 top-[6%] bottom-0 overflow-hidden bg-zinc-950 text-zinc-100">
			<!-- Verdict banner — animates through grades and settles on orange -->
			<div class="banner relative py-2 text-center text-[12px] font-bold uppercase tracking-[0.2em] text-white">
				<span class="banner-text banner-safe absolute inset-0 flex items-center justify-center">Safe</span>
				<span class="banner-text banner-review absolute inset-0 flex items-center justify-center">Review</span>
				<span class="banner-text banner-danger absolute inset-0 flex items-center justify-center">Do Not Use</span>
				<span class="banner-text banner-risk relative">Potential Risk</span>
			</div>

			<div class="space-y-2 p-3">
				<!-- Big grade meter card -->
				<div class="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
					<div class="flex items-center gap-3">
						<div class="relative shrink-0">
							<svg viewBox="0 0 200 120" class="size-24">
								<!-- Dim background segments -->
								<path d="M 20 100 A 80 80 0 0 1 60 36" stroke="#3f1212" stroke-width="14" fill="none" stroke-linecap="round" />
								<path d="M 60 36 A 80 80 0 0 1 100 20" stroke="#3a1d04" stroke-width="14" fill="none" stroke-linecap="round" />
								<path d="M 100 20 A 80 80 0 0 1 140 36" stroke="#3a2e07" stroke-width="14" fill="none" stroke-linecap="round" />
								<path d="M 140 36 A 80 80 0 0 1 180 100" stroke="#0f3320" stroke-width="14" fill="none" stroke-linecap="round" />
								<!-- Active highlight segments — opacity-animated to follow the needle -->
								<path class="hl-red" d="M 20 100 A 80 80 0 0 1 60 36" stroke="#ef4444" stroke-width="14" fill="none" stroke-linecap="round" />
								<path class="hl-orange" d="M 60 36 A 80 80 0 0 1 100 20" stroke="#f97316" stroke-width="14" fill="none" stroke-linecap="round" />
								<path class="hl-yellow" d="M 100 20 A 80 80 0 0 1 140 36" stroke="#eab308" stroke-width="14" fill="none" stroke-linecap="round" />
								<path class="hl-green" d="M 140 36 A 80 80 0 0 1 180 100" stroke="#22c55e" stroke-width="14" fill="none" stroke-linecap="round" />
								<!-- Needle (initial direction: upper-left, points at orange at rotate(0deg)) -->
								<g class="needle">
									<line x1="100" y1="100" x2="80" y2="40" stroke="#fff" stroke-width="3" stroke-linecap="round" />
									<circle cx="100" cy="100" r="6" fill="#fff" />
								</g>
							</svg>
						</div>
						<div class="flex-1">
							<div class="text-[9px] uppercase tracking-widest text-zinc-500">Verdict</div>
							<div class="text-[16px] font-bold leading-tight">Potential Risk</div>
							<div class="mt-1 grid grid-cols-2 gap-2 text-[9px]">
								<div>
									<div class="text-zinc-500">Composite score</div>
									<div class="font-mono text-[11px] font-semibold">42 / 100</div>
								</div>
								<div>
									<div class="text-zinc-500">Decision</div>
									<div class="font-semibold text-orange-400">Review before haul</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Monitoring card -->
				<div class="rounded-xl border border-zinc-800 bg-zinc-900 p-2.5">
					<div class="flex items-center gap-1.5 text-[10px] font-semibold">
						<Activity class="size-3 text-emerald-400" />
						Active Monitoring
						<span class="live-dot ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-900/40 px-1.5 py-0.5 text-[8px] font-semibold uppercase text-emerald-400">
							<span class="size-1.5 rounded-full bg-emerald-400"></span>
							Live · 2× daily
						</span>
					</div>
					<div class="mt-1.5 grid grid-cols-3 gap-1.5 text-[9px]">
						<div class="rounded bg-zinc-800/60 p-1.5 text-center">
							<div class="text-zinc-500">Last check</div>
							<div class="font-mono text-zinc-200">06:00 AM</div>
						</div>
						<div class="rounded bg-zinc-800/60 p-1.5 text-center">
							<div class="text-zinc-500">Next check</div>
							<div class="font-mono text-zinc-200">06:00 PM</div>
						</div>
						<div class="rounded bg-zinc-800/60 p-1.5 text-center">
							<div class="text-zinc-500">Alerts (30d)</div>
							<div class="font-mono text-zinc-200">3</div>
						</div>
					</div>
				</div>

				<!-- Alert banner -->
				<div class="alert flex items-center gap-2 rounded-lg border border-orange-900/60 bg-orange-950/30 p-2 text-[10px]">
					<div class="flex size-6 items-center justify-center rounded-full bg-orange-900/60">
						<Bell class="size-3 text-orange-400" />
					</div>
					<div class="min-w-0 flex-1">
						<div class="font-semibold text-orange-200">Authority status changed</div>
						<div class="text-[9px] text-orange-400/80">COMMON authority went Inactive · 2 days ago</div>
					</div>
					<span class="rounded-full border border-orange-700 bg-orange-900/40 px-1.5 py-0.5 text-[8px] font-semibold uppercase text-orange-400">New</span>
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

	/* Banner colour cycles green → yellow → orange → red, then resettles on orange. */
	.banner {
		background-color: #16a34a;
		animation: bannerColor 9s ease-in-out infinite;
	}
	@keyframes bannerColor {
		0%, 6% { background-color: #16a34a; }    /* green */
		18% { background-color: #ca8a04; }        /* yellow */
		28% { background-color: #ea580c; }        /* orange */
		40% { background-color: #dc2626; }        /* red */
		55%, 100% { background-color: #ea580c; }  /* settled — orange */
	}

	/* Banner text swaps between Safe / Review / Potential Risk / Do Not Use to match the colour */
	.banner-text { opacity: 0; }
	.banner-safe { animation: textSafe 9s ease-in-out infinite; }
	.banner-review { animation: textReview 9s ease-in-out infinite; }
	.banner-danger { animation: textDanger 9s ease-in-out infinite; }
	.banner-risk { animation: textRisk 9s ease-in-out infinite; }
	@keyframes textSafe {
		0%, 8% { opacity: 1; }
		14%, 100% { opacity: 0; }
	}
	@keyframes textReview {
		0%, 12% { opacity: 0; }
		18%, 22% { opacity: 1; }
		28%, 100% { opacity: 0; }
	}
	@keyframes textDanger {
		0%, 34% { opacity: 0; }
		40%, 46% { opacity: 1; }
		52%, 100% { opacity: 0; }
	}
	@keyframes textRisk {
		0%, 22% { opacity: 0; }
		28%, 34% { opacity: 1; }
		40%, 50% { opacity: 0; }
		55%, 100% { opacity: 1; }
	}

	/* Needle: rotate(0) points at orange; positive rotates toward yellow → green;
	   negative rotates toward red. Sweep visits every grade then settles at orange. */
	.needle {
		transform-origin: 100px 100px;
		transform: rotate(84deg);
		animation: needleSweep 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
	@keyframes needleSweep {
		0%, 5% { transform: rotate(84deg); }     /* green  (~+84°) */
		18% { transform: rotate(34deg); }         /* yellow (~+34°) */
		28% { transform: rotate(0deg); }          /* orange (   0°) */
		40% { transform: rotate(-46deg); }        /* red    (~-46°) */
		55%, 100% { transform: rotate(0deg); }    /* settled — orange */
	}

	/* One highlight per segment — fades in only while the needle is over it. */
	.hl-green { opacity: 0; animation: hlGreen 9s ease-in-out infinite; }
	.hl-yellow { opacity: 0; animation: hlYellow 9s ease-in-out infinite; }
	.hl-orange { opacity: 0; animation: hlOrange 9s ease-in-out infinite; }
	.hl-red { opacity: 0; animation: hlRed 9s ease-in-out infinite; }
	@keyframes hlGreen {
		0%, 8% { opacity: 1; }
		14%, 100% { opacity: 0; }
	}
	@keyframes hlYellow {
		0%, 12% { opacity: 0; }
		18%, 22% { opacity: 1; }
		28%, 100% { opacity: 0; }
	}
	@keyframes hlOrange {
		0%, 22% { opacity: 0; }
		28%, 34% { opacity: 1; }
		40%, 50% { opacity: 0; }
		55%, 100% { opacity: 1; }
	}
	@keyframes hlRed {
		0%, 34% { opacity: 0; }
		40%, 46% { opacity: 1; }
		52%, 100% { opacity: 0; }
	}

	/* Live dot pulses */
	.live-dot { animation: liveBlink 2s ease-in-out infinite; }
	@keyframes liveBlink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.6; }
	}

	/* Alert banner slides in late in the cycle */
	.alert {
		opacity: 0;
		transform: translateY(8px);
		animation: alertIn 9s ease-out infinite;
	}
	@keyframes alertIn {
		0%, 70% { opacity: 0; transform: translateY(8px); }
		78%, 95% { opacity: 1; transform: translateY(0); }
		98%, 100% { opacity: 0; transform: translateY(4px); }
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
		.banner, .banner-text, .needle, .hl-green, .hl-yellow, .hl-orange, .live-dot, .alert, .rec-dot, .progress-bar {
			animation: none !important;
		}
		.alert { opacity: 1; transform: none; }
		.banner { background-color: #ea580c; }
		.banner-safe, .banner-review { display: none; }
		.banner-risk { opacity: 1; }
		.needle { transform: rotate(0deg); }
		.hl-orange { opacity: 1; }
		.progress-bar { width: 100%; }
	}
</style>
