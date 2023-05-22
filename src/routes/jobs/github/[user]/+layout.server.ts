import { getOffersService } from '~lib/services/getOffers.service';
import type { TopLangs } from '~lib/interfaces/RepositoryGithubApi';
import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface';

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

	const user = params.user;
	
	const mockTopLangs: TopLangs = new Map([
		['JavaScript', 1]
	]);

	const [data, error] = await getOffersService(mockTopLangs);


	if (error !== null) {
		return {
			status: error.status,
			error: error.error ?? ''
		};
	}

	return {
		status: 200,
		user,
		offers: data ?? []
	};

}