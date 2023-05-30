import { json } from '@sveltejs/kit'
import { type ChatCompletionRequestMessage, ChatCompletionResponseMessageRoleEnum } from 'openai'
import type { ProfileData } from '~lib/interfaces/ProfileData'
import { getOfferByIdService } from '~lib/services/getOfferById.service'
import { getGithubUser } from '~lib/services/getGithubUser.service'
import { getTopLangsUserService } from '~lib/services/getTopLangsUser.service'
import type { MessageIA } from '~lib/interfaces/MessageIA.interface'
import { openAIApi } from '~lib/api/openIA.client'
import { MODELS_IA } from '~constants/modelsIA.const'



const INITIAL_MESSAGES_IA: ChatCompletionRequestMessage[] = [
	{
		role: ChatCompletionResponseMessageRoleEnum.System,
		content: `
		Now you are a HR recruiter in a high end software company, and your mission is to help candidates 
		check if their profile fits the offer to apply, you will also give feedback based on their experience 
		and the job offer, remember to give tips on how to improve their biography, how to explain in a better 
		way their experience, in case they don't have experience recommend what to put there, what they can contribute to improve, etc.
		in case the profile does not fit suggest keywords or ways in which he/she can look for a job that better suits him/her. 
		you will be passed a json as follows : 
	{
		offer: {
			jobDescription : "",
				salaryDescription: "",
				position: "",
				skills: [],
				minRequirements: "",
				companyName:"",
				city: ""
		},
		user: {
			github: {
				bio: "",
					languagesMostUsed: []
			},
			profile: {
				yearsOfExperience : "",
					knowledgeExperience : "",
					contributionOrImpact : ""
			}
		}
	}
		
		From the given information generate a feedback to the candidate, remember to give feedback based on the language used in the user profile.
		Based on the user's experience and your request, make a list of tips that you can add to your cv in order to learn how to improve and apply for this offer.
		your response has to be in the following format:
			
	  {
		feedback: [feedback],
		score: [score],
		tips:[tips]
	}	
		
		omits extra information only returns the format in string.
		this is a guide to help you try to add more information in the feedback or bio.
		`
	}
]


export async function POST({ request }: {
	request: Request
}): Promise<Response> {


	console.log('POST /api/test-profile-with-ia')

	try {


		const reqJson = await request.json()
		const data = await JSON.parse(reqJson.body) as ProfileData

		// const offer = await getOfferByIdService(data.offerId)

		const [offer, errorOffer] = await getOfferByIdService(data.offerId as string)
		const [dataGithubUser, errorUser] = await getGithubUser(data.githubUser as string)
		const [topLangUser, errorTopLangUser] = await getTopLangsUserService(data.githubUser as string)

		console.log({
			offer,
			dataGithubUser,
			topLangUser
		})

		console.log({
			errorOffer,
			errorUser,
			errorTopLangUser
		})

		if (!offer || !dataGithubUser || !topLangUser) return json({ message: 'Server Error' })

		const messageIA: MessageIA = {
			offer: {
				jobDescription: offer.jobDescription,
				salaryDescription: offer.salaryDescription,
				minRequirements: offer.minRequirements,
				positionOffer: offer.position,
				city: offer.city,
				skills: offer.skills,
				companyName: offer.company.name
			},
			user: {
				github: {
					bio: dataGithubUser.user?.bio,
					languagesMostUsed: Array.from(topLangUser.keys())
				},
				profile: {
					yearsOfExperience: data.profile.yearsOfExperience,
					contributionOrImpact: data.profile.contributionOrImpact,
					knowledgeExperience: data.profile.knowledgeExperience
				}
			}
		}
		console.log({
			messageIA
		})

		const complementation = await openAIApi.createChatCompletion({
			model: MODELS_IA['GPT-3.5'],
			temperature: 0.9,
			messages: [
				...INITIAL_MESSAGES_IA,
				{
					role: ChatCompletionResponseMessageRoleEnum.User,
					content: JSON.stringify(messageIA)

				}

			]
		})

		console.log('data', complementation.data.choices[0].message ?? 'no data')
		// error
		console.log('error', complementation.data ?? 'no error')

		const complementationResponse = complementation.data.choices[0].message?.content

		const responseDataParse = JSON.parse(complementationResponse ?? '{}')

		// setTimeout(() => {
		// 	console.log('Hello World')
		// }, 1000)

		return json({
			data: responseDataParse,
			error: null,
			status: 200
		})
	} catch (e) {

		return json({ 
			data: null,
			error: e,
			status: 500
		})
	}

} 


