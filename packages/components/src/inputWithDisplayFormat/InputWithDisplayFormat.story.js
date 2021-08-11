import { text } from '@storybook/addon-knobs';
import { useState } from 'react';

import InputWithDisplayFormat from '.';

export default {
  component: InputWithDisplayFormat,
  title: 'InputWithDisplayFormat',
};

export const basic = () => {
  const [pattern, setPattern] = useState('** / **');

  const placeholder = text('Placeholder', '** / **');
  const displayPattern = text('DisplayPattern', pattern);

  const handleOnChange = (value) => {
    setTimeout(() => {

      if (["2", "3", "4", "5", "6", "7", "8", "9"].indexOf(value) >= 0) {
        setPattern('0* / **');
      }
      if (value === "") {
        setPattern('** / **');
      }
    }, 0);
  }

  const handleOnPaste = (event, unformattedValue) => {
    const fullYear = new RegExp('^[0-9]{6}$');
    if (fullYear.test(unformattedValue)) {
      return unformattedValue.substring(0, 2) + unformattedValue.substring(4, 6);
    }
  }

  return (
    <InputWithDisplayFormat
      placeholder={placeholder}
      displayPattern={pattern}
      className="form-control"
      onChange={handleOnChange}
      onBlur={(v) => console.log(v)}
      onFocus={(v) => console.log(v)}
      onPaste={handleOnPaste}
    />
  );
};
