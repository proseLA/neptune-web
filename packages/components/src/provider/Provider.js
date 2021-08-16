import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import { DEFAULT_LOCALE, adjustLocale } from '../common/locale';
import en from '../i18n/en.json';

import { DirectionProvider } from './direction';

const Provider = ({ i18n, children }) => {
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

  return (
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
  );
};

Provider.propTypes = {
  i18n: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    messages: PropTypes.shape({}).isRequired,
    defaultRichTextElements: PropTypes.shape({}),
  }).isRequired,
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: undefined,
};

export default Provider;
