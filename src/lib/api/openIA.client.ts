import { Configuration, OpenAIApi } from 'openai'

import { OPENAI_API_KEY } from '~constants/envs.const'


const configOpenAI = new Configuration({
	apiKey: OPENAI_API_KEY
})

export const openAIApi = new OpenAIApi(configOpenAI)







