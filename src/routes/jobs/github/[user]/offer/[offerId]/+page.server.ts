

interface LoadParams {
	params: {
		offerId: string
	}
}

export function load({params: {
	offerId
}}:LoadParams){
	
	console.log(offerId)
	return {
		status: 200,
		offerId
	}
	
}