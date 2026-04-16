<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft, AlertTriangle, Upload, ShieldAlert } from '@lucide/svelte';

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let yourMcDot = $state('');
	let yourCompanyName = $state('');
	let reportedMcDot = $state('');
	let reportedPartyType = $state('');
	let reportedPhone = $state('');
	let reportedCompanyName = $state('');
	let details = $state('');
	let files: FileList | null = $state(null);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// TODO: wire to backend
	}
</script>

<div class="min-h-screen">
	<!-- Hero -->
	<section class="relative overflow-hidden bg-surface-dark py-16 sm:py-24">
		<div
			class="pointer-events-none absolute -left-20 -top-20 h-100 w-100 rounded-full bg-destructive/10 blur-[120px]"
		></div>
		<div class="relative mx-auto max-w-4xl px-6 text-center">
			<a
				href="/"
				class="mb-6 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
			>
				<ArrowLeft class="h-4 w-4" />
				Back to Home
			</a>
			<div class="mt-4 flex items-center justify-center">
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/15">
					<AlertTriangle class="h-6 w-6 text-destructive" />
				</div>
			</div>
			<h1 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
				Report an Incident
			</h1>
			<p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
				Help protect the freight industry. Every report is reviewed by our team and cross-referenced
				against <span class="font-semibold text-white">4M+ dirty data points</span> and
				<span class="font-semibold text-white">30,000+ flagged entities</span>.
			</p>
		</div>
	</section>

	<!-- Why It Matters + Form -->
	<section class="bg-background py-16 sm:py-24">
		<div class="mx-auto max-w-5xl px-6">
			<div class="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
				<!-- Sidebar -->
				<div class="lg:sticky lg:top-24 lg:self-start">
					<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
						<ShieldAlert class="h-5 w-5 text-destructive" />
					</div>
					<h2 class="mt-4 text-2xl font-bold text-foreground">Why Your Report Matters</h2>
					<div class="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
						<p>
							Freight fraud — including double brokering, cargo theft, and identity fraud — costs the
							industry an estimated <strong class="text-foreground">$500 million to $1 billion</strong>
							annually. These crimes thrive when they go unreported.
						</p>
						<p>
							When you file a report, you create a permanent record that helps our team identify
							patterns, flag bad actors, and protect fellow brokers and carriers from falling victim
							to the same schemes.
						</p>
						<p>
							Reports can be filed <strong class="text-foreground">anonymously</strong>. All
							submissions are reviewed by our team and handled confidentially.
						</p>
					</div>

					<div class="mt-8 rounded-lg border border-border bg-card p-4">
						<p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
							What can you report?
						</p>
						<ul class="mt-3 space-y-1.5 text-sm text-card-foreground">
							<li>• Double brokering</li>
							<li>• Cargo theft or hijacking</li>
							<li>• Identity theft / MC# fraud</li>
							<li>• Chameleon carrier activity</li>
							<li>• Non-payment or payment fraud</li>
							<li>• Falsified safety records</li>
							<li>• Other fraudulent activity</li>
						</ul>
					</div>
				</div>

				<!-- Form -->
				<div class="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
					<h3 class="text-lg font-semibold text-card-foreground">Incident Report Form</h3>
					<p class="mt-1 text-sm text-muted-foreground">
						Fields marked with <span class="text-destructive">*</span> are required
					</p>

					<form onsubmit={handleSubmit} class="mt-8 space-y-5">
						<!-- Name Row -->
						<div class="grid gap-4 sm:grid-cols-2">
							<div>
								<label for="firstName" class="block text-sm font-medium text-card-foreground">
									First Name <span class="text-destructive">*</span>
								</label>
								<input
									id="firstName"
									type="text"
									required
									bind:value={firstName}
									class="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
								/>
							</div>
							<div>
								<label for="lastName" class="block text-sm font-medium text-card-foreground">
									Last Name <span class="text-destructive">*</span>
								</label>
								<input
									id="lastName"
									type="text"
									required
									bind:value={lastName}
									class="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
								/>
							</div>
						</div>

						<!-- Email -->
						<div>
							<label for="email" class="block text-sm font-medium text-card-foreground">
								Email <span class="text-destructive">*</span>
							</label>
							<input
								id="email"
								type="email"
								required
								bind:value={email}
								class="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
							/>
						</div>

						<!-- Your MC/DOT + Company -->
						<div class="grid gap-4 sm:grid-cols-2">
							<div>
								<label for="yourMcDot" class="block text-sm font-medium text-card-foreground">
									Your MC or DOT # <span class="text-destructive">*</span>
								</label>
								<input
									id="yourMcDot"
									type="text"
									required
									bind:value={yourMcDot}
									class="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
								/>
							</div>
							<div>
								<label for="yourCompany" class="block text-sm font-medium text-card-foreground">
									Your Company Name <span class="text-destructive">*</span>
								</label>
								<input
									id="yourCompany"
									type="text"
									required
									bind:value={yourCompanyName}
									class="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
								/>
							</div>
						</div>

						<hr class="border-border" />

						<!-- Reported Party Section -->
						<p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
							Party Being Reported
						</p>

						<!-- Reported MC/DOT -->
						<div>
							<label for="reportedMcDot" class="block text-sm font-medium text-card-foreground">
								MC or DOT # Being Reported <span class="text-destructive">*</span>
							</label>
							<input
								id="reportedMcDot"
								type="text"
								required
								bind:value={reportedMcDot}
								class="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
							/>
						</div>

						<!-- Carrier or Broker -->
						<fieldset>
							<legend class="text-sm font-medium text-card-foreground">
								The Party Being Reported is a: <span class="text-destructive">*</span>
							</legend>
							<div class="mt-2 flex gap-6">
								<label class="flex items-center gap-2 text-sm text-card-foreground cursor-pointer">
									<input
										type="radio"
										name="partyType"
										value="carrier"
										required
										bind:group={reportedPartyType}
										class="h-4 w-4 border-input text-primary focus:ring-ring/20"
									/>
									Carrier
								</label>
								<label class="flex items-center gap-2 text-sm text-card-foreground cursor-pointer">
									<input
										type="radio"
										name="partyType"
										value="broker"
										bind:group={reportedPartyType}
										class="h-4 w-4 border-input text-primary focus:ring-ring/20"
									/>
									Broker
								</label>
							</div>
						</fieldset>

						<!-- Optional Fields -->
						<div class="grid gap-4 sm:grid-cols-2 sm:items-end">
							<div>
								<label for="reportedPhone" class="block text-sm font-medium text-card-foreground">
									Phone Number Used By Reported Party
								</label>
								<input
									id="reportedPhone"
									type="tel"
									bind:value={reportedPhone}
									class="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
								/>
							</div>
							<div>
								<label
									for="reportedCompany"
									class="block text-sm font-medium text-card-foreground"
								>
									Company Name Being Reported
								</label>
								<input
									id="reportedCompany"
									type="text"
									bind:value={reportedCompanyName}
									class="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
								/>
							</div>
						</div>

						<!-- Details -->
						<div>
							<label for="details" class="block text-sm font-medium text-card-foreground">
								Please Provide Any Further Details Pertaining To This Report
							</label>
							<textarea
								id="details"
								rows="4"
								bind:value={details}
								class="mt-1.5 w-full resize-y rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
							></textarea>
						</div>

						<!-- File Upload -->
						<div>
							<label for="files" class="block text-sm font-medium text-card-foreground">
								Upload Documents to Support Your Case
							</label>
							<div
								class="mt-1.5 flex items-center gap-3 rounded-lg border border-dashed border-input bg-background px-4 py-6"
							>
								<Upload class="h-5 w-5 shrink-0 text-muted-foreground" />
								<div class="flex-1 text-sm text-muted-foreground">
									<label
										for="files"
										class="cursor-pointer font-medium text-foreground underline underline-offset-2 hover:text-primary"
									>
										Select Files
									</label>
									<span class="ml-1">or drag and drop</span>
								</div>
								<input
									id="files"
									type="file"
									multiple
									bind:files
									class="sr-only"
								/>
							</div>
							{#if files && files.length > 0}
								<p class="mt-2 text-xs text-muted-foreground">
									{files.length} file{files.length > 1 ? 's' : ''} selected
								</p>
							{/if}
						</div>

						<!-- Submit -->
						<Button
							type="submit"
							size="lg"
							class="mt-2 h-12 w-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
						>
							Submit Report
						</Button>

						<p class="text-center text-xs text-muted-foreground">
							Your report is confidential. All submissions are subject to our
							<a href="/terms" class="underline underline-offset-2 hover:text-foreground"
								>Terms of Service</a
							>.
						</p>
					</form>
				</div>
			</div>
		</div>
	</section>
</div>
