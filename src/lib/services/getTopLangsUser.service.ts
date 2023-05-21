import type { ResponseRepositories, TopLangs } from '~lib/interfaces/RepositoryGithubApi';
import { API_GITHUB } from '~lib/api/instances.api';
import { topLangsAdapter } from '~lib/adapters/topLangs.adapter';

export async function getTopLangsUserService(user: string): Promise<TopLangs> {

	const response = await API_GITHUB.get(`/users/${user}/repos`, {
		params: {
			sort: 'updated',
			per_page: 20
		}
	});

	return topLangsAdapter(response.data as ResponseRepositories);
}
