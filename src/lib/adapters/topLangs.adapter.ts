import type { RepositoryGithubApi, ResponseRepositories, TopLangs } from '~lib/interfaces/RepositoryGithubApi'


export function topLangsAdapter(repositories: ResponseRepositories, max: number): TopLangs {
	const topLangs = new Map<string, number>()

	const languages = repositories.map((repo: RepositoryGithubApi) => {
		return repo?.language
	}).slice(0, max) as string[]


	languages.forEach((language: string): void => {
		if (!language) return
		if (topLangs.has(language)) topLangs.set(language, topLangs.get(language) as number + 1)
		else topLangs.set(language, 1)
	})

	return topLangs
}

