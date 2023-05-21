import { getTopLangsUserService } from '~lib/services/getTopLangsUser.service';

interface LoadParams {
	params: {
		user: string;
	}
}

interface LoadResponseSuccess {
	status: number | string;
	user: string;
}

interface LoadResponseError {
	status: number | string;
	error: string;
}

export const csr = false;

export async function load({ params }: LoadParams): Promise<LoadResponseSuccess | LoadResponseError> {

	const user = params.user ;
	
	const topLangs = await getTopLangsUserService(user)
	
	console.log(topLangs)
	console.log("keys",topLangs.keys())

	return {
		status: 200,
		user
	};

}