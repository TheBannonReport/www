<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft, AlertTriangle, Upload, ShieldAlert, CheckCircle, X, Loader } from '@lucide/svelte';
	import { enhance } from '$app/forms';

	type FileStatus = 'uploading' | 'done' | 'error';

	type PendingFile = {
		file: File;
		status: FileStatus;
		uploadId?: number;
		error?: string;
	};

	let { form } = $props();
	let submitting = $state(false);
	let pendingFiles: PendingFile[] = $state([]);
	let fileInput: HTMLInputElement | undefined = $state();

	const MAX_FILES = 3;

	async function handleFileSelect(e: Event) {
		const input = e.target as HTMLInputElement;
		if (!input.files) return;
		const incoming = Array.from(input.files).filter(
			(f) => !pendingFiles.some((p) => p.file.name === f.name && p.file.size === f.size),
		);
		const toAdd = incoming.slice(0, MAX_FILES - pendingFiles.length);
		input.value = '';
		if (toAdd.length === 0) return;

		const startIndex = pendingFiles.length;
		pendingFiles = [...pendingFiles, ...toAdd.map((file) => ({ file, status: 'uploading' as FileStatus }))];

		await Promise.all(toAdd.map((_, i) => uploadFile(startIndex + i)));
	}

	async function uploadFile(index: number) {
		try {
			const entry = pendingFiles[index];
			const urlRes = await fetch('/upload-url', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					filename: entry.file.name,
					contentType: entry.file.type,
					sizeBytes: entry.file.size,
				}),
			});
			if (!urlRes.ok) {
				const err = await urlRes.json().catch(() => ({}));
				throw new Error((err as { message?: string }).message || 'Failed to get upload URL');
			}
			const { uploadUrl, uploadId } = await urlRes.json();

			const putRes = await fetch(uploadUrl, {
				method: 'PUT',
				body: entry.file,
				headers: { 'Content-Type': entry.file.type },
			});
			if (!putRes.ok) throw new Error(`Upload failed (${putRes.status})`);

			pendingFiles[index].status = 'done';
			pendingFiles[index].uploadId = uploadId;
		} catch (err: unknown) {
			pendingFiles[index].status = 'error';
			pendingFiles[index].error = err instanceof Error ? err.message : 'Upload failed';
		}
	}

	function removeFile(index: number) {
		pendingFiles = pendingFiles.filter((_, i) => i !== index);
	}

	const uploading = $derived(pendingFiles.some((f) => f.status === 'uploading'));
	const hasErrors = $derived(pendingFiles.some((f) => f.status === 'error'));
	const uploadIds = $derived(
		pendingFiles.filter((f) => f.status === 'done' && f.uploadId != null).map((f) => f.uploadId!),
	);

	// Repopulate fields from server on validation error
	const v = $derived(form?.values);
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
				<span class="font-semibold text-white">100,000+ flagged entities</span>.
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
				{#if form?.success}
				<div class="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 shadow-sm text-center">
					<div class="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15">
						<CheckCircle class="h-7 w-7 text-green-500" />
					</div>
					<h3 class="mt-5 text-xl font-semibold text-card-foreground">Report Submitted</h3>
					<p class="mt-2 max-w-md text-sm text-muted-foreground">
						Thank you for helping protect the freight industry. Our team will review your report and may reach out if we need additional information.
					</p>
					<a href="/" class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
						<ArrowLeft class="h-4 w-4" />
						Back to Home
					</a>
				</div>
				{:else}
				<div class="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
					<h3 class="text-lg font-semibold text-card-foreground">Incident Report Form</h3>
					<p class="mt-1 text-sm text-muted-foreground">
						Fields marked with <span class="text-destructive">*</span> are required
					</p>

					<form method="POST" use:enhance={() => { submitting = true; return async ({ update }) => { submitting = false; await update(); }; }} class="mt-8 space-y-5">
						<!-- Name Row -->
						<div class="grid gap-4 sm:grid-cols-2">
							<div>
								<label for="firstName" class="block text-sm font-medium text-card-foreground">
									First Name <span class="text-destructive">*</span>
								</label>
								<input
									id="firstName"
									name="firstName"
									type="text"
									required
									value={v?.firstName ?? ''}
									class="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
								/>
							</div>
							<div>
								<label for="lastName" class="block text-sm font-medium text-card-foreground">
									Last Name <span class="text-destructive">*</span>
								</label>
								<input
									id="lastName"
									name="lastName"
									type="text"
									required
									value={v?.lastName ?? ''}
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
								name="email"
								type="email"
								required
								value={v?.email ?? ''}
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
									name="reporterMcDot"
									type="text"
									required
									value={v?.reporterMcDot ?? ''}
									class="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
								/>
							</div>
							<div>
								<label for="yourCompany" class="block text-sm font-medium text-card-foreground">
									Your Company Name <span class="text-destructive">*</span>
								</label>
								<input
									id="yourCompany"
									name="reporterCompanyName"
									type="text"
									required
									value={v?.reporterCompanyName ?? ''}
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
								name="reportedMcDot"
								type="text"
								required
								value={v?.reportedMcDot ?? ''}
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
										name="reportedPartyType"
										value="carrier"
										required
										checked={v?.reportedPartyType === 'carrier'}
										class="h-4 w-4 border-input text-primary focus:ring-ring/20"
									/>
									Carrier
								</label>
								<label class="flex items-center gap-2 text-sm text-card-foreground cursor-pointer">
									<input
										type="radio"
										name="reportedPartyType"
										value="broker"
										checked={v?.reportedPartyType === 'broker'}
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
									name="reportedPhone"
									type="tel"
									value={v?.reportedPhone ?? ''}
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
									name="reportedCompanyName"
									type="text"
									value={v?.reportedCompanyName ?? ''}
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
								name="details"
								rows="4"
								value={v?.details ?? ''}
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
									accept=".pdf,.jpg,.jpeg,.png,.webp,.txt,.doc,.docx"
									bind:this={fileInput}
									onchange={handleFileSelect}
									class="sr-only"
								/>
							</div>
							<p class="mt-1.5 text-xs text-muted-foreground">Max 3 files, 5 MB each. PDF, JPG, PNG, WEBP, TXT, DOC, or DOCX.</p>
							{#if pendingFiles.length > 0}
								<ul class="mt-2 space-y-1">
									{#each pendingFiles as entry, i}
										<li class="flex items-center gap-1.5 text-xs">
											{#if entry.status === 'uploading'}
												<Loader class="h-3.5 w-3.5 shrink-0 animate-spin text-muted-foreground" />
											{:else if entry.status === 'done'}
												<CheckCircle class="h-3.5 w-3.5 shrink-0 text-green-500" />
											{:else}
												<X class="h-3.5 w-3.5 shrink-0 text-destructive" />
											{/if}
											<span class="truncate text-muted-foreground">{entry.file.name}</span>
											<span class="shrink-0 text-muted-foreground/60">({(entry.file.size / 1024 / 1024).toFixed(1)} MB)</span>
											{#if entry.error}
												<span class="shrink-0 text-destructive">{entry.error}</span>
											{/if}
											<button type="button" onclick={() => removeFile(i)} class="shrink-0 ml-auto rounded p-0.5 text-muted-foreground hover:text-destructive" aria-label="Remove {entry.file.name}">
												<X class="h-3.5 w-3.5" />
											</button>
										</li>
									{/each}
								</ul>
							{/if}
							<!-- Pass upload IDs to the form action -->
							<input type="hidden" name="uploadIdsJson" value={JSON.stringify(uploadIds)} />
						</div>

						<!-- Error -->
						{#if form?.error}
							<div class="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
								{form.error}
							</div>
						{/if}

						<!-- Submit -->
						<Button
							type="submit"
							size="lg"
							disabled={submitting || uploading || hasErrors}
							class="mt-2 h-12 w-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
						>
							{#if submitting}Submitting…{:else if uploading}Uploading files…{:else}Submit Report{/if}
						</Button>

						<p class="text-center text-xs text-muted-foreground">
							Your report is confidential. All submissions are subject to our
							<a href="/terms" class="underline underline-offset-2 hover:text-foreground"
								>Terms of Service</a
							>.
						</p>
					</form>
				</div>
				{/if}
			</div>
		</div>
	</section>
</div>
