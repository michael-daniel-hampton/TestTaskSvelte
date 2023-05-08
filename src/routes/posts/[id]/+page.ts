import { PUBLIC_API_BASE } from '$env/static/public';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`${PUBLIC_API_BASE}/posts/${params.id}`);
	const data = await res.json();
	return data;
}) satisfies PageLoad;
