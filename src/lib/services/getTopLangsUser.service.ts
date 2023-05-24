import type { ResponseRepositories, TopLangs } from '~lib/interfaces/RepositoryGithubApi'
import { API_GITHUB } from '~lib/api/instances.api'
import { topLangsAdapter } from '~lib/adapters/topLangs.adapter'
import type { FailureResponseService } from '~lib/interfaces/FailureResponseService.interface'


export type responseGetTopLangsUserService = [TopLangs | null, FailureResponseService | null]

export async function getTopLangsUserService(user: string): Promise<responseGetTopLangsUserService> {

	const abortController: AbortController = new AbortController()

	try {
		const response = await API_GITHUB.get(`/users/${user}/repos`, {
			params: {
				sort: 'updated',
				per_page: 20
			},
			signal: abortController.signal
		}).then(({ data }) => data)

		return [topLangsAdapter(response as ResponseRepositories, 3), null]
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
