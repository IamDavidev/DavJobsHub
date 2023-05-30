import type { GithubUserApi } from '~lib/interfaces/GithubUser.interface'

export interface UserAdapter {
	name: string
	location: string
	bio: string
	followers: number
	following: number
	twitter_username: string
}

export function githubUserAdapter(user: GithubUserApi){
	return {
		name: user.name,
		location: user.location,
		bio: user.bio,
		followers: user.followers,
		following: user.following,
		twitter_username: user.twitter_username
	}
}
