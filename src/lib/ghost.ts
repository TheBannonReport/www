import GhostContentAPI from '@tryghost/content-api';
import { GHOST_URL, GHOST_CONTENT_API_KEY } from '$env/static/private';

const ghost = new GhostContentAPI({
	url: GHOST_URL,
	key: GHOST_CONTENT_API_KEY,
	version: 'v5.0'
});

export async function getPosts(page = 1, limit = 12) {
	return ghost.posts.browse({
		limit,
		page,
		include: ['tags'],
		fields: [
			'id',
			'title',
			'slug',
			'feature_image',
			'excerpt',
			'published_at',
			'reading_time'
		].join(',')
	});
}

export async function getPost(slug: string) {
	return ghost.posts.read({ slug }, { include: ['tags', 'authors'] });
}
