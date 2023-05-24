import { getOffersService } from '~lib/services/getOffers.service'
import type { TopLangs } from '~lib/interfaces/RepositoryGithubApi'
import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface'
import { checkUserExistenceService } from '~lib/services/checkUserExistence.service'
import { getTopLangsUserService } from '~lib/services/getTopLangsUser.service'

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

}