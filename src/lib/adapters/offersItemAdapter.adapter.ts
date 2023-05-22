import type { OfferItemAdapter, OfferApiItem } from '~lib/interfaces/Offer.interface';


export function offersItemAdapterAdapter(offer: OfferApiItem): OfferItemAdapter {
	
	return {
		id: offer.id,
		position: offer.title,
		company: {
			id: offer.author.id,
			name: offer.author.name,
			uri: offer.author.uri
		},
		published: offer.updated,
		city: offer.city
	};
}