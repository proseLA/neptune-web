import { isRelativePath } from '../../api/utils';

export function makeFetcher(baseUrl) {
  return function fetcher(input, init) {
    const resource = applyBaseUrl(input, baseUrl || '');
    return init !== undefined ? fetch(resource, init) : fetch(resource);
  };
}

function applyBaseUrl(input, baseUrl) {
  return typeof input === 'string' && isRelativePath(input) ? baseUrl + input : input;
}
