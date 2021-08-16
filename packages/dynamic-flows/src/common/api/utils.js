export function isStatus2xx(status) {
  return status >= 200 && status < 300;
}

export function isStatus422(status) {
  return status === 422;
}

export function getJson(response) {
  return response.json();
}

export function QueryablePromise(promise) {
  if (promise.isResolved) {
    return promise;
  }

  let isPending = true;
  let isRejected = false;
  let isFulfilled = false;

  const result = promise.then(
    (value) => {
      isFulfilled = true;
      isPending = false;
      return value;
    },
    (error) => {
      isRejected = true;
      isPending = false;
      throw error;
    },
  );

  result.isFulfilled = () => {
    return isFulfilled;
  };

  result.isPending = () => {
    return isPending;
  };

  result.isRejected = () => {
    return isRejected;
  };

  return result;
}
