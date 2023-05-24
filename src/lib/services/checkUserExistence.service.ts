import { API_GITHUB } from '~lib/api/instances.api'


export async function checkUserExistenceService(user: string): Promise<boolean> {
	const abortController: AbortController = new AbortController()

	try {
		const response = await API_GITHUB.get(`/users/${user}`, {
			signal: abortController.signal
		})

		if (response.status === 200) return true
		throw new Error('User not found')

	} catch (e) {
		abortController.abort()
		return false
	}
}