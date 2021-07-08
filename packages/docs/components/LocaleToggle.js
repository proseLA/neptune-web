import React, { useState } from 'react';
import { Switch } from '@transferwise/components';
import { LocaleContext } from './LocaleContext';

const LocaleSwitcher = () => {
  const [checked, setChecked] = useState(false);
  return (
    <LocaleContext.Consumer>
      {({ locale, toggleLocale }) => {
        const isRTL = locale === 'he-IL';
        return (
          <span className="d-inline-flex align-items-center">
            <Switch
              checked={checked}
              id="toggle"
              aria-label="Locale page direction Switch"
              onClick={() => {
                setChecked(!checked);
                toggleLocale();
              }}
            />
            <label
              htmlFor="toggle"
              className="m-b-0 m-x-1"
              style={{ color: 'var(--color-text-control)' }}
            >
              {isRTL ? 'Right-to-left' : 'Left-to-right'}
            </label>
          </span>
        );
      }}
    </LocaleContext.Consumer>
  );
};

export default LocaleSwitcher;
