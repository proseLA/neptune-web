import { Provider, translations as componentTranslations } from '@transferwise/components';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { FetcherProviderFromBaseUrl } from '../common/contexts/fetcherContext';

const getMockFetchPromise = (status, jsonFn, delay, signal) => {
  const response = {
    status,
    json: jsonFn,
  };
  return new Promise((resolve) => {
    let aborted = false;
    if (signal) {
      signal.addEventListener('abort', () => {
        aborted = true;
      });
    }
    setTimeout(() => {
      return !aborted && resolve(response);
    }, delay);
  });
};

const wait = (t) => {
  return act(() => {
    return new Promise((resolve) => setTimeout(resolve, t));
  });
};

function mountWithProviders(
  component,
  locale = 'en-GB',
  // eslint-disable-next-line unicorn/no-object-as-default-parameter
  messages = { ...componentTranslations['en'] },
  baseUrl = 'https://test-url',
) {
  return mount(
    <Provider i18n={{ locale, messages }}>
      <FetcherProviderFromBaseUrl baseUrl={baseUrl}>{component}</FetcherProviderFromBaseUrl>
    </Provider>,
  );
}

function getI18n(
  locale = 'en-GB',
  // eslint-disable-next-line unicorn/no-object-as-default-parameter
  messages = { ...componentTranslations['en'] },
) {
  return { locale, messages };
}

export { mountWithProviders as mount, getMockFetchPromise, wait, getI18n };
