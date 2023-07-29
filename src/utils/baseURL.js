import {API_KEY} from '@env';

const base_URL = 'https://gnews.io/api/v4';

const KEY = `apikey=${API_KEY}`;

export const SEARCH = `${base_URL}/search?${KEY}&`;

export const TOP_HEADLINES = `${base_URL}/top-headlines?${KEY}&`;
