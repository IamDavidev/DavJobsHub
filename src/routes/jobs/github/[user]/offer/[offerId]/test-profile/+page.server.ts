

export function load(p){
	console.log(p)
	
	return {
		offerId: p.params.offerId,
		githubUser: p.params.user,
		status: 200,
	}
}