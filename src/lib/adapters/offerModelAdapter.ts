import type { CompanyOffer, OfferApiItemExtends, OfferModel, SkillItem } from '~lib/interfaces/Offer.interface';


export function offerModelAdapter(offer: OfferApiItemExtends): OfferModel {
	const skills = offer.skillsList.map((s: SkillItem) => s.skill);
	// const published = new Date(offer.updateDate)

	const diff = Math.abs(new Date().getTime() - new Date(offer.updateDate).getTime());
	const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
	const months = Math.ceil(days / 30);
	const years = Math.ceil(months / 12);

	let updatedAt = '';

	if (years > 0) updatedAt = `${years} años`;
	else if (months > 0) updatedAt = `${months} meses`;
	else if (days > 0) updatedAt = `${days} días`;
	else updatedAt = 'Hoy';
	
	const company : CompanyOffer= {
		id: offer.profile.id,
		uri: offer.profile.url,
		web: offer.profile.websiteUrl,
		description: offer.profile.description,
		name: offer.profile.name,
		
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
