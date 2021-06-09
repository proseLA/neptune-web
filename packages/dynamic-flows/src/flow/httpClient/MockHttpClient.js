import decisionStep from '../examples/decision.json';
import formStep from '../examples/form.json';
import receiveStep from '../examples/recipient_details.json';
import finalStep from '../examples/final.json';
import layoutStep from '../examples/layout.json';

import review from '../examples/review.json';
import reviewLayout from '../../layout/layouts/review.json';

const reviewStep = {
  type: 'form',
  schemas: [],
  layout: reviewLayout,
};

function init() {}

async function request({ action, data }) {
  console.log('request', action.url, data); // eslint-disable-line

  switch (action.url) {
    case '/decision':
      return Promise.resolve({ data: decisionStep });
    case '/recipient':
      return Promise.resolve({ data: formStep });
    case '/recipient_details':
      return Promise.resolve({ data: receiveStep });
    case '/layout':
      return Promise.resolve({ data: layoutStep });
    case '/review':
      return Promise.resolve({ data: review });
    case '/confirm':
      return Promise.resolve({ data: reviewStep });
    case '/final':
      return Promise.resolve({ data: finalStep });
    case '/error':
      return Promise.reject({
        error: 'Something went wrong',
        validation: {},
      });
    default:
      return Promise.resolve({});
  }
}

export const httpClient = { init, request };
