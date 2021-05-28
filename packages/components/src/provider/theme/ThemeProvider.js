import React from 'react';
import PropTypes from 'prop-types';

const SUPPORTED_THEMES = ['dark', 'light'];
const DEFAULT_THEME = 'light';

export const ThemeContext = React.createContext(DEFAULT_THEME);

export const ThemeProvider = ({ theme, children }) => (
  <ThemeContext.Provider value={SUPPORTED_THEMES.indexOf(theme) > -1 ? theme : DEFAULT_THEME}>
    {children}
  </ThemeContext.Provider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
};

ThemeProvider.defaultProps = {
  children: null,
  theme: DEFAULT_THEME,
};
