import { API_GITHUB } from '~lib/api/instances.api';


export async  function getTopLangsByUser():Promise<void>{
	
	const response = await API_GITHUB.get('/users/midudev/repos?sort=updated&per_page=20');
	
}
