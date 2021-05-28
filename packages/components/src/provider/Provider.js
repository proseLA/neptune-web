import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { DirectionProvider } from './direction';
import { ThemeProvider } from './theme';
import en from '../i18n/en.json';
import { DEFAULT_LOCALE, adjustLocale } from '../common/locale';
import '../common/polyfills/intl';

async function loadTheme(theme) {
  const json = await import(`@transferwise/components/build/themes/${theme}.json`);
  return json;
}

function Provider({ i18n, children, theme }) {
  const { locale, messages, defaultRichTextElements } = i18n;
  const adjustedLocale = adjustLocale(locale);
  let intlConfig;
  if (adjustedLocale === null) {
    // eslint-disable-next-line no-console
    console.warn(
      `Unsupported locale value was provided: '${locale}', defaulting to '${DEFAULT_LOCALE}'`,
    );
    intlConfig = { locale: DEFAULT_LOCALE, messages: en };
  } else {
    intlConfig = { locale: adjustedLocale, messages };
  }

  useEffect(() => {
    loadTheme(theme).then((themeDef) => {
      Object.entries(themeDef).forEach(([cssProp, value]) => {
        document.documentElement.style.setProperty(`--${cssProp}`, value);
      });
    });
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <DirectionProvider locale={intlConfig.locale}>
        <IntlProvider
          defaultLocale={DEFAULT_LOCALE}
          locale={intlConfig.locale}
          messages={intlConfig.messages}
          defaultRichTextElements={defaultRichTextElements}
        >
          {children}
        </IntlProvider>
      </DirectionProvider>
    </ThemeProvider>
  );
}

Provider.propTypes = {
  i18n: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    messages: PropTypes.shape({}).isRequired,
    defaultRichTextElements: PropTypes.shape({}),
  }).isRequired,
  children: PropTypes.node,
  theme: PropTypes.string,
};

Provider.defaultProps = {
  children: undefined,
  theme: 'light',
};

export default Provider;
