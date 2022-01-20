export class HttpClient {
  constructor(params = {}) {
    this.baseUrl = params.baseUrl;
    this.headers = params.headers || {};
  }

  async request({
    method,
    url,
    data,
    signal,
    contentType = 'application/json',
    credentials = 'include',
  }) {
    const endpoint = startsWithHTTP(url) ? url : `${this.baseUrl}${url}`;

    const body = method === 'GET' ? undefined : JSON.stringify(data);

    return fetch(endpoint, {
      method,
      headers: {
        'Content-Type': contentType,
        'X-Access-Token': 'Tr4n5f3rw153',
        ...this.headers,
      },
      credentials,
      body,
      signal,
    }).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        throw response;
      }
      return response;
    });
  }
}

function startsWithHTTP(url = '') {
  return ['https://', 'http://'].some(
    (prefix) => url.slice(0, prefix.length) === prefix && url.length > prefix.length,
  );
}
