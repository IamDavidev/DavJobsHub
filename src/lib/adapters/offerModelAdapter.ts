import type { CompanyOffer, OfferApiItemExtends, OfferModel, SkillItem } from '~lib/interfaces/Offer.interface';
import { formatDate } from '~lib/utils/formatDate'


export function offerModelAdapter(offer: OfferApiItemExtends): OfferModel {
	const skills = offer.skillsList.map((s: SkillItem) => s.skill);
	
	
	const updatedAt = formatDate(new Date(offer.updateDate))
	
	const company : CompanyOffer= {
		id: offer.profile.id,
		uri: offer.profile.url,
		web: offer.profile.websiteUrl,
		description: offer.profile.description,
		name: offer.profile.name,
		logo: offer.profile.logoUrl
	}


	return {
		id: offer.id,
		city: offer.city,
		contractType: offer.contractType.value,
		jobDescription: offer.description,
		minRequirements: offer.minRequirements,
		position: offer.title,
		salaryDescription: offer.salaryDescription,
		seniority: offer.experienceMin.value,
		published: new Date(offer.updateDate),
		updatedAt,
		skills,
		company
	};
}
