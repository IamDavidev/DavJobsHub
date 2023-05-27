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
	
	// const [data,error] = await getOfferByIdService(offerId)
	
	
	// if(error!== null) throw errorPage(404,error.error ?? "")
	
	const offerMock  : OfferModel= {
		id: "18018",
		minRequirements: "At least 5 years of experience in JavaScript development with expertise in Node.js, Angular or React.js, TypeScript, and GitHub Strong knowledge of JavaScript, HTML, and CSS Experience with server-side technologies such as Express.js or Koa.js Experience with database technologies such as MongoDB or PostgreSQL Strong problem-solving and troubleshooting skills Excellent communication and teamwork skills Bachelor's degree in Computer Science or a related field",
		company: {
			id: "jflkajsdl",
			name: "Google",
			web: "https://www.google.com",
			description: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
			uri: "https://www.google.com"
		},
		skills: ["JavaScript", "Node.js", "Angular", "React.js", "TypeScript", "GitHub"],
		position: "JavaScript Developer (Node.js, Angular/React.js, TypeScript, GitHub)",
		city: "New York",
		published: new Date(),
		jobDescription: "Funciones Our company is seeking an experienced JavaScript developer with expertise in Node.js, Angular or React.js, TypeScript, and GitHub. As a JavaScript developer, you will be responsible for creating and implementing high-quality code for web applications. You will work closely with our team of developers, designers, and project managers to ensure that projects are completed on time and to the highest standards. Design, develop, and maintain web applications using Node.js, Angular or React.js, and TypeScript Write clean, efficient, and maintainable code Collaborate with team members to develop and implement new features Troubleshoot and debug issues with existing applications Participate in code reviews and contribute to team development standards Use GitHub for version control, code review, and issue tracking Se ofrece Competitive salary and benefits package Opportunities for professional growth and development Collaborative and supportive work environment Flexible work arrangements",
		updatedAt: "Today",
		tags: ["JavaScript", "Node.js", "Angular", "React.js", "TypeScript", "GitHub"],
		seniority: "Senior",
		contractType : "Full-time",
		salaryDescription: "Competitive salary and benefits package",
	} 
	
	return {
		status: 200,
		offerId,
		offer: offerMock
	}
	
}