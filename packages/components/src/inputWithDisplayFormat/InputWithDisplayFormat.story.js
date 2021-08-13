import { text } from '@storybook/addon-knobs';
import { useState } from 'react';

import InputWithDisplayFormat from '.';

export default {
  component: InputWithDisplayFormat,
  title: 'InputWithDisplayFormat',
};

export const basic = () => {
  const [pattern, setPattern] = useState('** / **');
  const [value, setValue] = useState('');
  const [cursor, setCursor] = useState(0);

  const placeholder = text('Placeholder', '** / **');
  const displayPattern = text('DisplayPattern', pattern);

  const handleOnChange = (value, event, cursorPosition) => {
    const monthNeedingPrefix = new RegExp('^[2-9]$');
    if (monthNeedingPrefix.test(value)) {
      const newValue = '0' + value;

      setValue(newValue);
      setCursor(2);

      console.log('onChange', newValue, 2);
      return;
    }

    console.log('onChange', value, event);
    setValue(value);
    setCursor(cursorPosition);
  };

  const handleOnPaste = (event, unformattedValue) => {
    console.log('onPaste', unformattedValue);

    const fullYear = new RegExp('^[0-9]{6}$');
    if (fullYear.test(unformattedValue)) {
      const newValue = unformattedValue.substring(0, 2) + unformattedValue.substring(4, 6);
      setValue(newValue);
      return;
    }
    setValue(unformattedValue);
  };

  // onPaste={handleOnPaste}

  return (
    <InputWithDisplayFormat
      value={value}
      placeholder={placeholder}
      displayPattern={displayPattern}
      className="form-control"
      onChange={handleOnChange}
      onPaste={handleOnPaste}
      onBlur={(v) => console.log('onBlur')}
      onFocus={(v) => console.log('onFocus')}
      cursor={cursor}
    />
  );
};
