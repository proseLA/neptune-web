import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import { Provider } from '..';
import { DEFAULT_LOCALE } from '../common/locale';
import en from '../i18n/en.json';

/**
 * Custom `render` function which wraps passed elements in Provider component
 * Source: https://testing-library.com/docs/example-react-intl/#creating-a-custom-render-function
 *
 */
function customRender(
  ui,
  { locale = DEFAULT_LOCALE, messages = en, direction, ...renderOptions } = {},
) {
  // eslint-disable-next-line react/prop-types
  var Wrapper = ({ children }) => {
    return (
      <Provider i18n={{ locale, messages }} direction={direction}>
        {children}
      </Provider>
    );
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

/**
 * Custom `renderHook` function which wraps passed elements in Provider component
 * For more info: https://react-hooks-testing-library.com/usage/advanced-hooks#context
 *
 */
function customRenderHook(callback, { locale = DEFAULT_LOCALE, messages = en, direction } = {}) {
  return renderHook(callback, {
    // eslint-disable-next-line react/prop-types
    wrapper: ({ children }) => (
      <Provider i18n={{ locale, messages }} direction={direction}>
        {children}
      </Provider>
    ),
  });
}

export * from '@testing-library/react';
export { userEvent };
export { customRender as render, customRenderHook as renderHook };
