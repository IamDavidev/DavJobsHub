import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface'
import { getTopLangsUserService } from '~lib/services/getTopLangsUser.service'
import { checkUserExistenceService } from '~lib/services/checkUserExistence.service'
import { getOffersService } from '~lib/services/getOffers.service'
import type { TopLangs } from '~lib/interfaces/RepositoryGithubApi'

interface LoadParams {
	params: {
		user: string;
	};
}

interface LoadResponseSuccess {
	status: number | string;
	user: string;
	offers: OfferItemAdapter[];
}

interface LoadResponseError {
	status: number | string;
	error: string;
}


export async function load({ params }: LoadParams): Promise<LoadResponseSuccess | LoadResponseError> {
	const user = params.user

	const userFound = await checkUserExistenceService(user)
	if (!userFound) return {
		status: 404,
		error: 'User not found'
	}

	const [topLangUser, errroTopLangs] = await getTopLangsUserService(user)
	if (errroTopLangs !== null && topLangUser === null) return {
		status: errroTopLangs.status,
		error: errroTopLangs.error ?? ''
	}

	const [data, errorOffers] = await getOffersService(topLangUser as TopLangs)
	if (errorOffers !== null) {
		return {
			status: errorOffers.status,
			error: errorOffers.error ?? ''
		}
	}

	return {
		status: 200,
		user,
		offers: data ?? []
	}
	
	// const offers = Array.from({ length: 5 }, (v, i) => i).map((item) => ({
	// 	id: '1',
	// 	company: {
	// 		id: '11',
	// 		name: 'Google',
	// 		logo: 'https://images.unsplash.com/photo-1577071835592-d5d55ffef660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
	// 		uri: 'https://www.google.com',
	// 		description: 'Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.',
	// 		web: 'https://www.google.com'
	// 	},
	// 	city: 'New York',
	// 	published: new Date(),
	// 	position: 'JavaScript Developer (Node.js, Angular/React.js, TypeScript, GitHub)'
	//
	//
	// }))
	//
	// return {
	// 	status: 200,
	// 	user,
	// 	offers
	// }

}