import axios, { type AxiosInstance } from 'axios';
import { BASE_URL_GITHUB, BASE_URL_INFOJOBS } from '~constants/urls.const';
import { GITHUB_TOKEN, INFOJOBS_TOKEN } from '~constants/envs.const';


export const API_INFOJOBS: AxiosInstance = axios.create({
	baseURL: BASE_URL_INFOJOBS,
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Basic ${INFOJOBS_TOKEN}`
	}
});



export const API_GITHUB: AxiosInstance = axios.create({
	baseURL: BASE_URL_GITHUB,
	headers: {
		'Authorization': `Bearer ${GITHUB_TOKEN}`
	},
});