import { PUBLIC_API_BASE } from '$env/static/public';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	// input validity check - pre api call
	const id = Number(params.id);
	if (isNaN(id)) {
		throw new Error('A valid integer is expected');
	}

	//Call
	let err = 'API Call Failed';
	try {
		const res = await fetch(`${PUBLIC_API_BASE}/posts/${params.id}`);
		const data = await res.json();

		if (Object.keys(data).length > 0) {
			return data;
		} else {
			err = 'Empty Object';
			throw new Error(err);
		}
	} catch {
		throw new Error(err);
	}
}) satisfies PageLoad;
