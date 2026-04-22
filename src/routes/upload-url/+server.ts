import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// Proxies presigned upload URL requests to NestJS so the browser
// never needs to know the API's internal URL or credentials.
export const POST: RequestHandler = async ({ request }) => {
	const apiUrl = env.API_URL || 'http://localhost:3000';
	const body = await request.text();
	const res = await fetch(`${apiUrl}/api/incidents/upload-url`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body,
	});
	const data = await res.json().catch(() => ({}));
	return new Response(JSON.stringify(data), {
		status: res.status,
		headers: { 'Content-Type': 'application/json' },
	});
};
