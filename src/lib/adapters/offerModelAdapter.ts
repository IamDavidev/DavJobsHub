import type { CompanyOffer, OfferApiItemExtends, OfferModel, SkillItem } from '~lib/interfaces/Offer.interface';


export function offerModelAdapter(offer: OfferApiItemExtends): OfferModel {
	const skills = offer.skillsList.map((s: SkillItem) => s.skill);
	// const published = new Date(offer.updateDate)

	const diff = Math.abs(new Date().getTime() - new Date(offer.updateDate).getTime());
	const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
	const months = Math.ceil(days / 30);
	const years = Math.ceil(months / 12);

	let updatedAt = 'Hoy';

	if(days > 2 && days < 29) updatedAt = `${days} días`;
	if(days > 30) updatedAt = `${months} meses`;
	if(months > 12) updatedAt = `${years} años`;
	
	
	
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
