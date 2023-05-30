import { API_GITHUB } from '~lib/api/instances.api'
import type { GithubUserApi } from '~lib/interfaces/GithubUser.interface'
import { githubUserAdapter, type UserAdapter } from '~lib/adapters/githubUser.adapter'


export interface ResponseGithubUser {
	user: UserAdapter | null,
	status: number
}

export interface FailureResponseService {
	status: number
	error: string
}

export type ResponseGetGithubUserService = [ResponseGithubUser | null, FailureResponseService | null]

export async function getGithubUser(githubUser: string): Promise<ResponseGetGithubUserService> {
	const abortController: AbortController = new AbortController()

	try {
		const res = await API_GITHUB.get(`/users/${githubUser}`, {
			signal: abortController.signal
		})

		const user = res.data as GithubUserApi
		
		return [{
			user: githubUserAdapter(user),
			status: res.status
		}, null]

	} catch (e) {
		abortController.abort()

		const { message } = e as Error
		const failureResponse: FailureResponseService = {
			status: 404,
			error: message
		}
		return [null, failureResponse]
	}


}