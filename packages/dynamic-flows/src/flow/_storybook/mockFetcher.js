/* eslint-disable no-console */
import reviewLayout from '../../layout/layouts/review.json';
import decisionStep from '../examples/decision.json';
import finalStep from '../examples/final.json';
import formStep from '../examples/form.json';
import layoutStep from '../examples/layout.json';
import persistAsyncStep from '../examples/persist_async_step.json';
import receiveStep from '../examples/recipient_details.json';
import receiveStepRefresh from '../examples/recipient_details_refresh.json';
import review from '../examples/review.json';

const reviewStep = {
  type: 'form',
  schemas: [],
  layout: reviewLayout,
};

const DELAY = 500;

const respondWith = async (body, init) => {
  await wait(DELAY);
  return new Response(JSON.stringify(body), init);
};
const respondWithEtag = async (body, etag) => {
  await wait(DELAY);
  return new Response(JSON.stringify(body), { headers: { etag } });
};
const emptyResposeWithEtag = async (etag) => {
  await wait(DELAY);
  return new Response(null, { headers: { etag }, status: 304 });
};

const delayedReject = async (reason) => {
  await wait(DELAY);
  throw reason;
};

export async function mockFetcher(input, init) {
  // eslint-disable-next-line no-console
  console.log('mockFetcher', input, init);

  switch (input) {
    case '/decision':
      return respondWith(decisionStep);
    case '/recipient':
      return respondWith(formStep);
    case '/recipient-details':
      return respondWithEtag(receiveStep, eTagFromStep(receiveStep));
    case '/recipient-details-refresh': {
      const requestModel = JSON.parse(init.body);
      if (requestModel.email?.slice(0, 5) === 'match') {
        return respondWith(receiveStepRefresh);
      }
      const schemaEtag = eTagFromStep(receiveStep);
      const requestEtag = init?.headers?.['If-None-Match'] || undefined;
      if (requestEtag != null && requestEtag === schemaEtag) {
        return emptyResposeWithEtag(schemaEtag);
      } else {
        console.log('schemaEtag', schemaEtag, 'requestEtag', requestEtag);
      }
      return respondWithEtag({ ...receiveStep, model: requestModel }, eTagFromStep(receiveStep));
    }
    case '/persist-async': {
      return respondWith(persistAsyncStep);
    }
    case '/persist-async-upload': {
      await wait(DELAY * 2); // extra delay - it's a bit upload!
      return respondWith({ nameToken: `some-token-from-server-${JSON.parse(init.body).name}` });
    }
    case '/persist-async-submit': {
      return respondWith(JSON.parse(init.body), { headers: { 'X-DF-Exit': true } });
    }
    case '/layout':
      return respondWith(layoutStep);
    case '/review':
      return respondWith(review);
    case '/confirm':
      return respondWith(reviewStep);
    case '/final':
      return respondWith(finalStep);
    case '/error':
      return delayedReject({ error: 'Something went wrong', validation: {} });
    case '/submit':
      return respondWith({ error: 'This is an error ' }, { status: 422 });
    default:
      return respondWith({});
  }
}

const wait = (t) => new Promise((resolve) => setTimeout(resolve, t));

// eslint-disable-next-line unicorn/prevent-abbreviations
const eTagFromStep = (step) => {
  const schema = JSON.stringify(step.schemas[0] || {});
  return `${schema.slice(0, 50)}-${schema.length}`;
};
