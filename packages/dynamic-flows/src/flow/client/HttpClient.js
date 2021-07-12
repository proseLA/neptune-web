class HttpClient {
  init(params = {}) {
    this.baseUrl = params.baseUrl;
    this.oauthToken = params.oauthToken;

    return this;
  }

  async request({ action, data }) {
    const { url, method } = action;

    const endpoint = `${this.baseUrl}${url}`;
    const body = method === 'GET' ? undefined : JSON.stringify(data);

    return fetch(endpoint, {
      method,
      headers: {
        ...(this.oauthToken && { Authorization: `Bearer ${this.oauthToken}` }),
        'Content-Type': 'application/json',
      },
      body,
    }).then(async (response) => {
      if (response.status >= 400 && response.status < 600) {
        return response.json().then((error) => {
          throw error;
        });
      }
      return Promise.resolve({
        data: await response.json(),
        headers: response.headers,
      });
    });
  }
}

export const httpClient = new HttpClient();
