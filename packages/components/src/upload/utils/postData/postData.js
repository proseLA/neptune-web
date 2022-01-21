export const postData = (httpOptions, data = {}, fetcher = fetch) =>
  fetcher(`${httpOptions.url}`, {
    method: 'POST',
    body: data,
    ...httpOptions,
  })
    .then((response) => {
      if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        error.response = response;
        throw error;
      }
      return response;
    })
    .catch((error) => {
      throw error;
    });
