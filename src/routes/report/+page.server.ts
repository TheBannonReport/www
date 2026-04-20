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

		const res = await fetch(`${apiUrl}/api/incidents`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		if (!res.ok) {
			const body = await res.json().catch(() => ({}));
			return fail(res.status, { error: body.message || 'Submission failed', values: payload });
		}

		return { success: true };
	},
};
