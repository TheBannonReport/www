<script lang="ts">
	import { FileText, Check, Download } from '@lucide/svelte';
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
			<span class="ml-3 truncate">app.thebannonreport.com/secure-send/engagements/eng_q1ins</span>
		</div>

		<!-- Engagement detail page (TBR dark theme) -->
		<div class="absolute inset-x-0 top-[6%] bottom-0 overflow-hidden bg-zinc-950 p-3 text-zinc-100">
			<!-- Title row -->
			<div class="flex items-start justify-between">
				<div class="min-w-0">
					<div class="text-[9px] text-zinc-500">← Back</div>
					<h1 class="truncate text-[13px] font-semibold">Q1 2026 Insurance Documents</h1>
					<div class="mt-1 flex items-center gap-2">
						<span class="status-pill rounded-full bg-emerald-900/40 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-emerald-400">Completed</span>
						<span class="text-[9px] text-zinc-500">Mar 12, 2026</span>
					</div>
				</div>
				<button class="rounded-md border border-red-900/60 px-2 py-1 text-[9px] font-medium text-red-400">Revoke</button>
			</div>

			<!-- Attachments -->
			<div class="mt-2 rounded-lg border border-zinc-800 bg-zinc-900">
				<div class="border-b border-zinc-800 px-3 py-1.5 text-[9px] font-semibold text-zinc-300">Attachments (2)</div>
				<div class="divide-y divide-zinc-800">
					<div class="flex items-center gap-2 px-3 py-1.5 text-[10px]">
						<FileText class="size-3 shrink-0 text-zinc-500" />
						<span class="truncate">insurance-cert.pdf</span>
						<span class="ml-auto text-[9px] text-zinc-500">124 KB</span>
						<Download class="size-3 text-zinc-500" />
					</div>
					<div class="flex items-center gap-2 px-3 py-1.5 text-[10px]">
						<FileText class="size-3 shrink-0 text-zinc-500" />
						<span class="truncate">rate-confirmation.pdf</span>
						<span class="ml-auto text-[9px] text-zinc-500">89 KB</span>
						<Download class="size-3 text-zinc-500" />
					</div>
				</div>
			</div>

			<!-- Recipients -->
			<div class="mt-2 rounded-lg border border-zinc-800 bg-zinc-900">
				<div class="flex items-center justify-between border-b border-zinc-800 px-3 py-1.5">
					<span class="text-[9px] font-semibold text-zinc-300">Assigned Recipients (1)</span>
					<span class="text-[9px] text-zinc-500">+ Assign</span>
				</div>
				<div class="px-3 py-2">
					<div class="flex items-start justify-between">
						<div class="min-w-0">
							<div class="text-[11px] font-semibold">John Smith</div>
							<div class="mt-0.5 flex items-center gap-1.5">
								<span class="verified-badge inline-flex items-center gap-1 rounded-full bg-emerald-900/40 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-400">
									<Check class="size-2" />
									Verified
								</span>
								<span class="text-[8px] text-zinc-500">Mar 12, 2026 · 2:14 PM</span>
							</div>
							<div class="mt-1.5 flex items-center gap-3 text-[9px]">
								<div>
									<div class="text-zinc-500">Face match</div>
									<div class="font-mono font-semibold text-emerald-400">98.7%</div>
								</div>
								<div>
									<div class="text-zinc-500">ID document</div>
									<div class="text-zinc-300">Driver's License (CA)</div>
								</div>
								<div>
									<div class="text-zinc-500">Reveals</div>
									<div class="text-zinc-300">2 / 2 viewed</div>
								</div>
							</div>
						</div>
						<button class="rounded-md border border-zinc-700 px-1.5 py-1 text-[9px] text-zinc-300">View KYC</button>
					</div>

					<!-- Activity timeline -->
					<div class="mt-2 space-y-1 border-t border-zinc-800 pt-2">
						<div class="event-row flex items-center gap-2 text-[9px] text-zinc-400">
							<span class="size-1.5 rounded-full bg-emerald-500"></span>
							<span class="text-zinc-300">insurance-cert.pdf revealed</span>
							<span class="ml-auto text-zinc-500">2:14 PM</span>
						</div>
						<div class="event-row flex items-center gap-2 text-[9px] text-zinc-400">
							<span class="size-1.5 rounded-full bg-emerald-500"></span>
							<span class="text-zinc-300">Identity verified · 98.7% face match</span>
							<span class="ml-auto text-zinc-500">2:13 PM</span>
						</div>
						<div class="event-row flex items-center gap-2 text-[9px] text-zinc-400">
							<span class="size-1.5 rounded-full bg-zinc-600"></span>
							<span>Engagement opened from email</span>
							<span class="ml-auto text-zinc-500">2:12 PM</span>
						</div>
					</div>
				</div>
			</div>
		</div>

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

	/* Stagger the timeline events appearing */
	.event-row {
		opacity: 0;
		transform: translateX(-4px);
	}
	.event-row:nth-child(3) { animation: rowIn 9s ease-out infinite; animation-delay: 0s; }
	.event-row:nth-child(2) { animation: rowIn 9s ease-out infinite; animation-delay: 0s; }
	.event-row:nth-child(1) { animation: rowIn 9s ease-out infinite; animation-delay: 0s; }
	.event-row:nth-child(1) { animation-name: rowIn1; }
	.event-row:nth-child(2) { animation-name: rowIn2; }
	.event-row:nth-child(3) { animation-name: rowIn3; }

	@keyframes rowIn1 {
		0%, 14% { opacity: 0; transform: translateX(-4px); }
		20%, 100% { opacity: 1; transform: translateX(0); }
	}
	@keyframes rowIn2 {
		0%, 24% { opacity: 0; transform: translateX(-4px); }
		30%, 100% { opacity: 1; transform: translateX(0); }
	}
	@keyframes rowIn3 {
		0%, 34% { opacity: 0; transform: translateX(-4px); }
		40%, 100% { opacity: 1; transform: translateX(0); }
	}

	/* Subtle pulse on the verified badge */
	.verified-badge { animation: badgePulse 9s ease-in-out infinite; }
	@keyframes badgePulse {
		0%, 50%, 100% { box-shadow: 0 0 0 0 rgb(16 185 129 / 0); }
		55% { box-shadow: 0 0 0 4px rgb(16 185 129 / 0.25); }
		60% { box-shadow: 0 0 0 0 rgb(16 185 129 / 0); }
	}

	/* Status pill quick highlight */
	.status-pill { animation: pillPulse 9s ease-in-out infinite; }
	@keyframes pillPulse {
		0%, 70%, 100% { background-color: rgb(6 95 70 / 0.4); }
		75% { background-color: rgb(16 185 129 / 0.5); }
		80% { background-color: rgb(6 95 70 / 0.4); }
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
		.event-row, .verified-badge, .status-pill, .rec-dot, .progress-bar {
			animation: none !important;
		}
		.event-row { opacity: 1; transform: none; }
		.progress-bar { width: 100%; }
	}
</style>
