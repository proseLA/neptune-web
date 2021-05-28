import React, { useState } from 'react';
import { Switch } from '@transferwise/components';
import { ThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {
  const [checked, toggleSwitch] = useState(false);
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme }) => {
        return (
          <span>
            <Switch
              checked={checked}
              id="toggle"
              aria-labelledby="toggle-label"
              onClick={() => {
                toggleTheme();
                toggleSwitch(!checked);
              }}
            />
            <label id="toggle-label" htmlFor="toggle" className="m-l-1 h2">
              🌚
            </label>
          </span>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeSwitcher;
