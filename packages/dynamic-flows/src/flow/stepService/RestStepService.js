async function request(action, data, baseUrl) {
  const { url, method } = action;

  return fetch(baseUrl + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...{
      body: method === 'GET' ? undefined : JSON.stringify(data),
    },
  }).then((res) => res.json());
}

export { request };
