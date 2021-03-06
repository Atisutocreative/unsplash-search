// Reference: https://unsplash.com/documentation

const API_URL: string = 'https://api.unsplash.com';
const API_SEARCH_URL: string = API_URL + '/search/photos?';
const API_VERSION: string = 'v1';
const API_PAGE_MAX_ITEM: number = 30; // https://unsplash.com/documentation#pagination
const QUERY_LIMIT: string = 'x-ratelimit-limit';
const QUERY_REMAIN: string = 'x-ratelimit-remaining';

export {
  API_SEARCH_URL,
  API_VERSION,
  API_PAGE_MAX_ITEM,
  QUERY_LIMIT,
  QUERY_REMAIN,
};
