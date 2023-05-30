import { getGithubUser } from '~lib/services/getGithubUser.service'


export async function checkUserExistenceService(user: string): Promise<boolean> {
	const abortController: AbortController = new AbortController()

	try {
		const [res] = await getGithubUser(user)
		
		if (res?.status === 200) return true
		throw new Error('User not found')
	} catch (e) {
		abortController.abort()
		return false
	}
}