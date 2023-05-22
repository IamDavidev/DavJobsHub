import { API_INFOJOBS } from '~lib/api/instances.api';
import type { FailureResponseService } from '~lib/interfaces/FailureResponseService.interface';
import type { OfferApiItemExtends, OfferModel } from '~lib/interfaces/Offer.interface';
import { offerModelAdapter } from '~lib/adapters/offerModelAdapter';

export type responseGetOfferByIdService = [OfferModel | null, FailureResponseService | null]

export async function getOfferByIdService(offerId: string) : Promise<responseGetOfferByIdService>{
	const abortController: AbortController = new AbortController();

	try {
		const responseOffer = await API_INFOJOBS.get(`/api/7/offer/${offerId}`, {
			signal: abortController.signal
		}).then(({ data }) => data) as OfferApiItemExtends;

		return [offerModelAdapter(responseOffer),null]

	} catch (e: unknown) {
		abortController.abort();

		const { message } = e as Error;
		const failureResponse: FailureResponseService = {
			status: 404,
			error: message
		};

		return [null, failureResponse];
	}


}