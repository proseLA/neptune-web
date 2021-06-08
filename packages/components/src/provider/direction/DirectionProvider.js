import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_LOCALE, SUPPORTED_RTL } from '../../common/locale';

export const DirectionContext = React.createContext('ltr');

export const DirectionProvider = ({ locale, children }) => (
  <DirectionContext.Provider value={SUPPORTED_RTL.indexOf(locale) > -1 ? 'rtl' : 'ltr'}>
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
