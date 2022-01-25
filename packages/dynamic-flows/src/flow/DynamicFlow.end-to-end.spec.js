import '@testing-library/jest-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, translations as componentTranslations } from '@transferwise/components';

import { wait } from '../test-utils';

import DynamicFlow from './DynamicFlow';
import recipientDetailsJson from './examples/recipient_details.json';
import recipientDetailsRefreshJson from './examples/recipient_details_refresh.json';

const delayedJsonResponse = async (response, init = {}) => {
  await wait(1);
  return new Response(JSON.stringify(response), init);
};

const mockFetcher = (input, init) => {
  switch (input) {
    case '/recipient-details':
      return delayedJsonResponse(recipientDetailsJson);
    case '/recipient-details-refresh': {
      const requestModel = JSON.parse(init.body);
      if (requestModel.email.slice(0, 6) === 'match') {
        return delayedJsonResponse(recipientDetailsRefreshJson);
      }
      return delayedJsonResponse({ ...recipientDetailsJson, model: requestModel });
    }
    default:
      return delayedJsonResponse({});
  }
};

const i18n = { locale: 'en-GB', messages: { ...componentTranslations['en'] } };

describe('E2E: Given a DynamicFlow component to render', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useFakeTimers());

  describe('when the step is refreshed and the new step contains data', () => {
    function renderComponent() {
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
    }

    it('displays the new data in the form', async () => {
      renderComponent();

      const emailField = await screen.findByLabelText('Their email');

      act(() => userEvent.paste(emailField, 'some@email.com'));

      await waitFor(async () => {
        expect(screen.getByDisplayValue('some@email.com')).toBeInTheDocument();
      });
    });

    it('the focused text input is kept in focus', async () => {
      renderComponent();

      const inputBeforeRefresh = await screen.findByLabelText('Their email');

      userEvent.click(inputBeforeRefresh);
      expect(inputBeforeRefresh).toHaveFocus();

      act(() => userEvent.type(inputBeforeRefresh, 's'));

      await waitFor(() => {
        const emailFieldAfterRefresh = screen.getByLabelText('Their email');
        expect(emailFieldAfterRefresh).toHaveFocus();
      });
    });
  });
});
