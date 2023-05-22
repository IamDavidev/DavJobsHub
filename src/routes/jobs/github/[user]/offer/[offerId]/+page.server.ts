import  { error as errorPage} from '@sveltejs/kit'
import { getOfferByIdService } from '~lib/services/getOfferById.service';
import type { OfferModel } from '~lib/interfaces/Offer.interface';


interface LoadParams {
	params: {
		offerId: string
	}
}

interface LoadResponseSuccess {
	status: number | string;
	offerId: string
	offer: OfferModel | null
}

export async  function load({params: {
	offerId
}}:LoadParams): Promise<LoadResponseSuccess>{
	
	const [data,error] = await getOfferByIdService(offerId)
	
	
	if(error!== null) throw errorPage(404,error.error ?? "")
	
	return {
		status: 200,
		offerId,
		offer: data
	}
	
}