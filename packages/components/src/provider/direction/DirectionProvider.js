import PropTypes from 'prop-types';
import { createContext } from 'react';

import { DEFAULT_LOCALE, SUPPORTED_RTL } from '../../common/locale';

export const DirectionContext = createContext('ltr');

export const DirectionProvider = ({ locale, children }) => (
  <DirectionContext.Provider value={SUPPORTED_RTL.includes(locale) ? 'rtl' : 'ltr'}>
    {children}
  </DirectionContext.Provider>
);

DirectionProvider.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string,
};

DirectionProvider.defaultProps = {
  children: null,
  locale: DEFAULT_LOCALE,
};
