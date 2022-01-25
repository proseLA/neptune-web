import reviewLayout from '../../layout/layouts/review.json';
import decisionStep from '../examples/decision.json';
import finalStep from '../examples/final.json';
import formStep from '../examples/form.json';
import layoutStep from '../examples/layout.json';
import receiveStep from '../examples/recipient_details.json';
import receiveStepRefresh from '../examples/recipient_details_refresh.json';
import review from '../examples/review.json';

const reviewStep = {
  type: 'form',
  schemas: [],
  layout: reviewLayout,
};

const createResponse = (body) => new Response(JSON.stringify(body));

const delayedResponse = async (response) => {
  await wait(500);
  return response;
};

const delayedReject = async (reason) => {
  await wait(100);
  throw reason;
};

export async function mockFetcher(input, init) {
  // eslint-disable-next-line no-console
  console.log('mockFetcher', input, init);

  switch (input) {
    case '/decision':
      return delayedResponse(createResponse(decisionStep));
    case '/recipient':
      return delayedResponse(createResponse(formStep));
    case '/recipient-details':
      return delayedResponse(createResponse(receiveStep));
    case '/recipient-details-refresh': {
      const requestModel = JSON.parse(init.body);
      if (requestModel.email.slice(0, 6) === 'match') {
        return delayedResponse(createResponse(receiveStepRefresh));
      }
      return delayedResponse(createResponse({ ...receiveStep, model: requestModel }));
    }
    case '/layout':
      return delayedResponse(createResponse(layoutStep));
    case '/review':
      return delayedResponse(createResponse(review));
    case '/confirm':
      return delayedResponse(createResponse(reviewStep));
    case '/final':
      return delayedResponse(createResponse(finalStep));
    case '/error':
      return delayedReject({ error: 'Something went wrong', validation: {} });
    default:
      return delayedResponse({});
  }
}

const wait = (t) => new Promise((resolve) => setTimeout(resolve, t));
