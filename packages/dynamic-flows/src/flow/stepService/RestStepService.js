async function request({ action, data, baseUrl, headers = {} }) {
  const { url, method } = action;

  return fetch(baseUrl + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...{
      body: method === 'GET' ? undefined : JSON.stringify(data),
    },
  }).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      return response.json().then((error) => {
        throw error;
      });
    }
    return response;
  });
}

export { request };
