import axios from 'axios';
import keys from '../config/keys';


export const FETCH_PAGES = 'fetch_pages';
export const FETCH_PAGE = 'fetch_page';

const ROOT_URL = keys.ROOT_URL;


export function fetchPages() {
	const request = axios.get(`${ROOT_URL}/pages`);

	return {
		type: FETCH_PAGES,
		payload: request
	}
}

export function fetchPage(slug) {
	const request = axios.get(`${ROOT_URL}/pages?slug=${slug}`)

	return {
		type: FETCH_PAGE,
		payload: request
	}
}