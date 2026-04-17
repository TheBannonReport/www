import type { PageServerLoad } from './$types';
import { getPost } from '$lib/ghost';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = await getPost(params.slug);
		return { post };
	} catch {
		throw error(404, 'Post not found');
	}
};
