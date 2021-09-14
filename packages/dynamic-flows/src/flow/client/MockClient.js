import reviewLayout from '../../layout/layouts/review.json';
import decisionStep from '../examples/decision.json';
import finalStep from '../examples/final.json';
import formStep from '../examples/form.json';
import layoutStep from '../examples/layout.json';
import receiveStep from '../examples/recipient_details.json';
import review from '../examples/review.json';

const reviewStep = {
  type: 'form',
  schemas: [],
  layout: reviewLayout,
};

const createResponse = (body) => new Response(JSON.stringify(body));

function init() {}

async function request({ action, data }) {
  // eslint-disable-next-line no-console
  console.log('request', action.url, data);

  switch (action.url) {
    case '/decision':
      return Promise.resolve(createResponse(decisionStep));
    case '/recipient':
      return Promise.resolve(createResponse(formStep));
    case '/recipient_details':
      return Promise.resolve(createResponse(receiveStep));
    case '/layout':
      return Promise.resolve(createResponse(layoutStep));
    case '/review':
      return Promise.resolve(createResponse(review));
    case '/confirm':
      return Promise.resolve(createResponse(reviewStep));
    case '/final':
      return Promise.resolve(createResponse(finalStep));
    case '/error':
      return Promise.reject({
        error: 'Something went wrong',
        validation: {},
      });
    default:
      return Promise.resolve({});
  }
}

export const mockClient = { init, request };
