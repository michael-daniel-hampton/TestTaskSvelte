import type { PageLoad } from './$types';
import { PUBLIC_API_BASE } from '$env/static/public';

export const load = (async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_API_BASE}/posts`);
	const data = await res.json();
	return { dataArr: data};
}) satisfies PageLoad;
