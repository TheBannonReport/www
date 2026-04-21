import type { Actions } from './$types';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		const payload = {
			firstName: form.get('firstName')?.toString().trim() ?? '',
			lastName: form.get('lastName')?.toString().trim() ?? '',
			email: form.get('email')?.toString().trim() ?? '',
			reporterMcDot: form.get('reporterMcDot')?.toString().trim() ?? '',
			reporterCompanyName: form.get('reporterCompanyName')?.toString().trim() ?? '',
			reportedMcDot: form.get('reportedMcDot')?.toString().trim() ?? '',
			reportedPartyType: form.get('reportedPartyType')?.toString().trim() ?? '',
			reportedPhone: form.get('reportedPhone')?.toString().trim() || undefined,
			reportedCompanyName: form.get('reportedCompanyName')?.toString().trim() || undefined,
			details: form.get('details')?.toString().trim() || undefined,
		};

		// Basic required-field check
		const labels: Record<string, string> = {
			firstName: 'First name',
			lastName: 'Last name',
			email: 'Email',
			reporterMcDot: 'Your MC or DOT #',
			reporterCompanyName: 'Your company name',
			reportedMcDot: 'Reported MC or DOT #',
			reportedPartyType: 'Reported party type',
		};
		const required = Object.keys(labels) as Array<keyof typeof payload & keyof typeof labels>;
		for (const key of required) {
			if (!payload[key]) {
				return fail(400, { error: `${labels[key]} is required`, values: payload });
			}
		}

		const apiUrl = env.API_URL || 'http://localhost:3000';

		// Build multipart form to forward text fields + files to the API
		const apiForm = new FormData();
		for (const [key, value] of Object.entries(payload)) {
			if (value !== undefined) apiForm.set(key, value);
		}

		const MAX_FILES = 3;
		const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
		const files = form.getAll('files');
		let fileCount = 0;
		for (const file of files) {
			if (file instanceof File && file.size > 0) {
				if (++fileCount > MAX_FILES) {
					return fail(400, { error: `Maximum ${MAX_FILES} files allowed`, values: payload });
				}
				if (file.size > MAX_FILE_SIZE) {
					return fail(400, { error: `${file.name} exceeds the 5 MB size limit`, values: payload });
				}
				apiForm.append('files', file);
			}
		}

		const res = await fetch(`${apiUrl}/api/incidents`, {
			method: 'POST',
			body: apiForm,
		});

		if (!res.ok) {
			const body = await res.json().catch(() => ({}));
			return fail(res.status, { error: body.message || 'Submission failed', values: payload });
		}

		return { success: true };
	},
};
