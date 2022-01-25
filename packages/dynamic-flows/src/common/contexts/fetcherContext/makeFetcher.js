export function makeFetcher(baseUrl) {
  return function fetcher(input, init) {
    const resource = applyBaseUrl(input, baseUrl || '');
    return init !== undefined ? fetch(resource, init) : fetch(resource);
  };
}

function applyBaseUrl(input, baseUrl) {
  return typeof input === 'string' && isRelative(input) ? baseUrl + input : input;
}

function isRelative(url = '') {
  return (
    ['https://', 'http://', 'data:'].some(
      (prefix) => url.slice(0, prefix.length) === prefix && url.length > prefix.length,
    ) === false
  );
}
