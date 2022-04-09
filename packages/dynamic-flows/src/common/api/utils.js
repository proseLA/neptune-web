export function isStatus2xx(status) {
  return status >= 200 && status < 300;
}

export function isStatus422(status) {
  return status === 422;
}

export function getJson(response) {
  return response.json();
}

export function isRelativePath(url = '') {
  return (
    ['https://', 'http://', 'data:'].some(
      (prefix) => url.slice(0, prefix.length) === prefix && url.length > prefix.length,
    ) === false
  );
}
