import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/ghost';

export const load: PageServerLoad = async ({ url }) => {
	const page = Number(url.searchParams.get('page') ?? '1');
	const posts = await getPosts(page);

	return {
		posts,
		meta: (posts as any).meta?.pagination ?? { page, pages: 1 }
	};
};
