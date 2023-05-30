import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface'
import { checkUserExistenceService } from '~lib/services/checkUserExistence.service'
import { getTopLangsUserService } from '~lib/services/getTopLangsUser.service'
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
	topLangs: TopLangs | null;
}

interface LoadResponseError {
	status: number | string;
	error: string;
}


export async function load({ params }: LoadParams): Promise<LoadResponseSuccess | LoadResponseError> {
	const user = params.user

	try {

		const userFound = await checkUserExistenceService(user)
		if (!userFound) return {
			status: 404,
			error: 'User not found'
		}

		const [topLangUser, errorTopLangs] = await getTopLangsUserService(user)

		if (errorTopLangs !== null && topLangUser === null) throw new Error(errorTopLangs.error ?? '')


		const [data, errorOffers] = await getOffersService(topLangUser as TopLangs)

		if (errorOffers !== null) throw new Error(errorOffers.error ?? '')

		const offers = Array.from(new Set(data)) ?? []

		const topLangs = topLangUser

		return {
			status: 200,
			user,
			offers,
			topLangs
		}

	} catch (error) {
		const errorMessage = (error as Error).message ?? ''
		return {
			status: 500,
			error: errorMessage
		}
	}
}
