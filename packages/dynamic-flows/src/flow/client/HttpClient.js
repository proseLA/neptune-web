/* eslint-disable no-throw-literal */

class HttpClient {
  init(params = {}) {
    this.baseUrl = params.baseUrl;

    return this;
  }

  async request({ action, data }) {
    const { url, method } = action;

    const endpoint = `${this.baseUrl}${url}`;
    const body = method === 'GET' ? undefined : JSON.stringify(data);

    return fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': 'Tr4n5f3rw153',
      },
      body,
    }).then(async (response) => {
      if (response.status >= 400 && response.status < 600) {
        return response
          .json()
          .then((error) => {
            throw { error, status: response.status };
          })
          .catch((jsonParsingError) => {
            throw { error: jsonParsingError, status: response.status };
          });
      }
      return response;
    });
  }
}

export const httpClient = new HttpClient();
