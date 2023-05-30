export interface MessageIA {
	offer: {
		jobDescription: string
		salaryDescription: string
		minRequirements: string
		positionOffer: string
		skills: string[]
		companyName: string | undefined
		city: string
	}
	user: {
		github: {
			bio: string | undefined
			languagesMostUsed: string[]
		},
		profile: {
			yearsOfExperience : string,
			knowledgeExperience : string,
			contributionOrImpact : string
		}
	}
}