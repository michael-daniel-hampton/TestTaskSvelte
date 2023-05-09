import { PUBLIC_API_BASE } from '$env/static/public';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	// input validity check - pre api call
	const id = Number(params.id);
	if (isNaN(id)) {
		throw new Error('A valid integer is expected');
	}

	//Post Call
	let err = 'API Call Failed';
	try {
		const res = await fetch(`${PUBLIC_API_BASE}/posts/${params.id}`);
		const data = await res.json();

		if (Object.keys(data).length > 0) {
			let comments = null;
			try {
				const CommentRes = await fetch(`${PUBLIC_API_BASE}/posts/${params.id}/comments`);
				const CommentData = await CommentRes.json();
				comments = CommentData;
			} catch {
				throw new Error(err);
			}

			return { data: data, comments: comments };
		} else {
			err = 'Empty Object';
			throw new Error(err);
		}
	} catch {
		throw new Error(err);
	}
}) satisfies PageLoad;
