import { API_GITHUB } from '~lib/api/instances.api';
import type { RepositoryGithubApi } from '~lib/interfaces/RepositoryGithubApi';

type ResponseApiRepos = RepositoryGithubApi[]

export async  function getTopLangsUser(user: string):Promise<void>{
	
	const response = await API_GITHUB.get(`/users/${user}/repos`,{
		params: {
			sort: 'updated',
			per_page: 20
		}
	});
	const data = response.data as ResponseApiRepos
	
	const languages = data.map((repo: RepositoryGithubApi) =>{
		return {
			language: repo?.language,
			name: repo?.name,
		}
	})
	
	console.log({
		languages
	})
	
}
