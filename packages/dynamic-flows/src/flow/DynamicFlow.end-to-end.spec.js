import '@testing-library/jest-dom';
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import { Provider, translations as componentTranslations } from '@transferwise/components';

import { wait } from '../test-utils';

import DynamicFlow from './DynamicFlow';
import recipientDetailsJson from './examples/recipient_details.json';
import recipientDetailsRefreshJson from './examples/recipient_details_refresh.json';

const routes = {
  '/recipient-details': recipientDetailsJson,
  '/recipient-details-refresh': recipientDetailsRefreshJson,
};

const delayedJsonResponse = async (response, init = {}) => {
  await wait(1);
  return new Response(JSON.stringify(response), init);
};

const mockFetcher = (input, init) => {
  const json = routes[input] || {};
  return delayedJsonResponse(json);
};

const i18n = { locale: 'en-GB', messages: { ...componentTranslations['en'] } };

describe('E2E: Given a DynamicFlow component to render', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useFakeTimers());

  describe('when the step is refreshed and the new step contains data', () => {
    it('displays the new data in the form', async () => {
      render(
        <Provider i18n={i18n}>
          <DynamicFlow
            flowUrl="/recipient-details"
            fetcher={mockFetcher}
            onClose={jest.fn()}
            onStepChange={jest.fn()}
          />
        </Provider>,
      );

      const emailField = await screen.findByLabelText('Their email');

      act(() => fireEvent.change(emailField, { target: { value: 'anything' } }));

      await waitFor(async () => {
        expect(screen.getByDisplayValue('bobloblaw@law.blog')).toBeInTheDocument();
      });
    });
  });
});
