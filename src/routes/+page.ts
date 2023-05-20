import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageLoad} */
export async function load() {

	const token = env.INFOJOBS_TOKEN as string;
	const url = 'https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones';

	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${token}`
		}
	});

	const offers = await response.json();
	
	console.log({
		offers
	})
	
	return {
		status: 200,
		offers
	};
}

export const csr = false;