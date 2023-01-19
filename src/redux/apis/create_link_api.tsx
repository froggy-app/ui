import wretch from 'wretch';

export const createLinkAPI = ({url}: {url: string}) =>
  wretch('/api/random-short-url/create').errorType('json').post({url}).json();
