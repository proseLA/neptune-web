import '@testing-library/jest-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, translations as componentTranslations } from '@transferwise/components';

import DynamicFlow from './DynamicFlow';

const DEBOUNCE_DELAY_TIMEOUT = 1000;

const getFormStep = (overrides) => ({
  type: 'form',
  key: 'create-thing',
  title: 'Example',
  description: 'Please enter all the information',
  schemas: [
    {
      $id: '#example',
      type: 'object',
      properties: {
        email: {
          type: 'string',
          title: 'Email',
          minLength: 5,
          refreshFormOnChange: true,
          refreshFormUrl: '/example-email-refresh',
        },
        accountNumber: {
          title: 'Account number',
          type: 'string',
          minLength: 6,
          maxLength: 10,
          refreshFormOnChange: true,
          refreshFormUrl: '/example-account-refresh',
        },
        favouriteColor: {
          title: 'Favourite color',
          type: 'string',
          oneOf: [
            { title: 'Red', const: 'red' },
            { title: 'Blue', const: 'blue' },
          ],
          refreshFormOnChange: true,
          refreshFormUrl: '/example-account-refresh',
        },
      },
    },
  ],
  model: { accountNumber: '1234567890' },
  actions: [
    {
      type: 'primary',
      url: '/submit',
      title: 'Submit',
      method: 'POST',
    },
  ],
  ...overrides,
});

const delayedJsonResponse = async (response, init = {}) => {
  return new Response(JSON.stringify(response), init);
};

const mockFetcher = jest.fn((input, init) => {
  switch (input) {
    case '/example':
      return delayedJsonResponse(getFormStep());
    case '/example-email-refresh': {
      const step = getFormStep();
      step.schemas[0].properties['name'] = {
        type: 'string',
        title: 'Name',
        minLength: 2,
      };
      step.model = {
        ...JSON.parse(init.body),
        name: 'Prefilled Name from Server',
        email: 'some.other@email.com',
      };
      return delayedJsonResponse(step);
    }
    case '/example-account-refresh':
      return delayedJsonResponse(getFormStep({ model: JSON.parse(init.body) }));
    case '/submit': {
      return delayedJsonResponse(JSON.parse(init.body), {
        status: 201,
        headers: { 'X-Df-Exit': 'true' },
      });
    }
    default:
      return delayedJsonResponse({});
  }
});

const i18n = { locale: 'en-GB', messages: { ...componentTranslations['en'] } };

describe('e2E: Given a DynamicFlow component with a "initialStep" prop', () => {
  beforeAll(() => jest.useFakeTimers());
  beforeEach(() => mockFetcher.mockClear());
  afterAll(() => jest.useFakeTimers());

  function renderComponent() {
    render(
      <Provider i18n={i18n}>
        <DynamicFlow
          initialStep={getFormStep()}
          fetcher={mockFetcher}
          onClose={jest.fn()}
          onStepChange={jest.fn()}
        />
      </Provider>,
    );
  }

  it('renders the form', async () => {
    renderComponent();
    const emailInput = await screen.findByLabelText('Email');
    const accoutInput = await screen.findByLabelText('Account number');
    expect(emailInput).toBeInTheDocument();
    expect(accoutInput).toBeInTheDocument();
  });

  describe('when updating a non-string schema with refreshFormOnChange', () => {
    it('does not debounce, and makes the request immediately', async () => {
      renderComponent();

      act(() => userEvent.click(screen.getByLabelText('Red')));

      await waitFor(() => {
        expect(mockFetcher).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('when updating a string schema with refreshFormOnChange', () => {
    it('debounces the refresh request', async () => {
      renderComponent();

      const emailInput = await screen.findByLabelText('Email');

      // paste a valid email
      await act(async () => await userEvent.paste(emailInput, 'some@email.com'));

      expect(mockFetcher).toHaveBeenCalledTimes(0);

      // wait half the debounce delay time
      act(() => jest.advanceTimersByTime(DEBOUNCE_DELAY_TIMEOUT / 2));

      // simulate appending 3 more characters
      await act(async () => await userEvent.paste(emailInput, '.ar'));

      expect(mockFetcher).toHaveBeenCalledTimes(0);

      // wait half the debounce delay time again
      act(() => jest.advanceTimersByTime(DEBOUNCE_DELAY_TIMEOUT / 2));

      // email field value has now been valid the entire debounce delay time

      // but refresh is not triggered because there's been a change (.ar) one second ago
      expect(mockFetcher).toHaveBeenCalledTimes(0);

      // now we wait half the delay again
      await act(async () => {
        jest.advanceTimersByTime(DEBOUNCE_DELAY_TIMEOUT / 2);
      });

      // and ONLY ONE refresh call is expected
      expect(mockFetcher).toHaveBeenCalledTimes(1);

      // with the latest value in the body
      expect(mockFetcher).toHaveBeenLastCalledWith(
        '/example-email-refresh',
        expect.objectContaining({
          body: '{"email":"some@email.com.ar"}',
          method: 'POST',
        }),
      );
    });
  });
});

describe('e2E: Given a DynamicFlow component with a "flowUrl" prop', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useFakeTimers());

  function renderComponent() {
    render(
      <Provider i18n={i18n}>
        <DynamicFlow
          flowUrl="/example"
          fetcher={mockFetcher}
          onClose={jest.fn()}
          onStepChange={jest.fn()}
        />
      </Provider>,
    );
  }

  it('renders the form', async () => {
    renderComponent();
    const emailInput = await screen.findByLabelText('Email');
    const accoutInput = await screen.findByLabelText('Account number');
    expect(emailInput).toBeInTheDocument();
    expect(accoutInput).toBeInTheDocument();
  });

  describe('when the step is refreshed', () => {
    it('disables actions while refreshing steps', async () => {
      renderComponent();

      const inputBeforeRefresh = await screen.findByLabelText('Email');

      mockFetcher.mockClear();
      await act(async () => userEvent.paste(inputBeforeRefresh, 'some@email.com'));

      act(() => jest.advanceTimersByTime(DEBOUNCE_DELAY_TIMEOUT));

      await waitFor(() => {
        expect(mockFetcher).toHaveBeenCalledTimes(1);
        const submitButton = screen.getByText('Submit');
        expect(submitButton).toBeDisabled();
      });

      await waitFor(() => {
        const submitButton = screen.getByText('Submit');
        expect(submitButton).toBeEnabled();
      });
    });

    describe('and the refreshed step has an identical schema', () => {
      it('the focused text input is kept in focus', async () => {
        renderComponent();

        const inputBeforeRefresh = await screen.findByLabelText('Account number');

        userEvent.click(inputBeforeRefresh);
        expect(inputBeforeRefresh).toHaveFocus();

        await act(async () => await userEvent.type(inputBeforeRefresh, '12345'));

        await waitFor(() => {
          const emailFieldAfterRefresh = screen.getByLabelText('Account number');
          expect(emailFieldAfterRefresh).toHaveFocus();
        });
      });
    });

    describe('and the refreshed step has a different schema and it contains data', () => {
      it('displays the new data in the form', async () => {
        renderComponent();

        const emailField = await screen.findByLabelText('Email');

        act(() => userEvent.paste(emailField, 'some@email.com'));

        act(() => jest.advanceTimersByTime(DEBOUNCE_DELAY_TIMEOUT));

        await waitFor(async () => {
          expect(screen.getByDisplayValue('some.other@email.com')).toBeInTheDocument();
          expect(screen.getByDisplayValue('Prefilled Name from Server')).toBeInTheDocument();
        });
      });
    });
  });
});
