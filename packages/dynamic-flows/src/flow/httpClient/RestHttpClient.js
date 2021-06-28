class HttpClient {
  init(params = {}) {
    if (params.baseUrl) {
      this.apiUrl = params.baseUrl;
    }

    return this;
  }

  async request({ action, data }) {
    const { url, method } = action;

    return fetch(`${this.apiUrl}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...{
        body: method === 'GET' ? undefined : JSON.stringify(data),
      },
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
