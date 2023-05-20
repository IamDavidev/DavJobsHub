/** @type {import('./$types').PageLoad} */
export async function load() {

	// const tokeGit = env.TOKEN_GIT
	//
	// const url ="https://api.github.com/users/midudev/repos?sort=updated&per_page=20"
	//
	// const {data} = await axios.get(url,{
	// 	headers: {
	// 		Authorization: `Bearer ${tokeGit}`
	// 	}
	// })  as {
	// 	data: []
	// }
	//
	// const languages = data.map((repo: {
	// 	language: string,
	// 	full_name: string,
	// 	description: string
	// }) =>{
	// 	return {
	// 		language: repo?.language,
	// 	}
	// })
	//
	// const top_languages = new Map()
	//
	// languages.forEach((language) =>{
	// 	if(!language.language) return
	// 	if(top_languages.has(language.language)) top_languages.set(language.language, top_languages.get(language.language) + 1)
	// 	else top_languages.set(language.language, 1)
	// })
	//
	//
	//
	//
	// console.log({
	// 	languages
	// })
	//
	// console.log({
	// 	top_languages
	// })

	// const token = env.INFOJOBS_TOKEN as string;
	// const url = 'https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones';
	//
	// const response = await fetch(url, {
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		Authorization: `Basic ${token}`
	// 	}
	// });
	//
	// const offers = await response.json();

	// console.log({
	// 	offers
	// })
	//
	return {};
}

export const csr = false;