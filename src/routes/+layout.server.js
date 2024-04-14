export const prerender = 'auto';

import { createClient } from '$lib/prismicio';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	//const page = await client.getByUID('page', params.uid);
	const settings = await client.getSingle('settings');

	return {
		settings
	};
}