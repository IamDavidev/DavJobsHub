import type { FailureResponseService } from '~lib/interfaces/FailureResponseService.interface';
import type { TopLangs } from '~lib/interfaces/RepositoryGithubApi';
import { API_INFOJOBS } from '~lib/api/instances.api';
import axios from 'axios';
import type { OfferItemAdapter, OfferApiItem, ResponseOffersList } from '~lib/interfaces/Offer.interface';
import { offersItemAdapterAdapter } from '~lib/adapters/offersItemAdapter.adapter';

type responseGetOffersService = [OfferItemAdapter[] | null, FailureResponseService | null];

export async function getOffersService(topLangs: TopLangs): Promise<responseGetOffersService> {
	const languages = Array.from(topLangs.keys());

	try {
		const requests = languages.map((lang: string) => API_INFOJOBS.get('/api/9/offer', {
			params: {
				q: lang,
				category: 'informatica-telecomunicaciones',
				maxResults: 15
			}
		}));

		const offers : Set<OfferApiItem>= new Set<OfferApiItem>();

		await axios.all(requests).then(axios.spread((...responses) => {
			responses.forEach(({ data }: {
				data: ResponseOffersList
			}) => {
				data.items.forEach((offer: OfferApiItem): void => {
					offers.add(offer);
				});
			});
		}));

		return [Array.from(offers).map(offersItemAdapterAdapter), null];
	} catch (e) {
		const { message } = e as Error;
		const failureResponse: FailureResponseService = {
			status: 404,
			error: message ?? null
		};

		return [null, failureResponse];
	}
}