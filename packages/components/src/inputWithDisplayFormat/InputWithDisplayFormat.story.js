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

  const handleOnChange = (value, cursorPosition) => {
    const monthNeedingPrefix = new RegExp('^[2-9]$');
    if (monthNeedingPrefix.test(value)) {
      console.log('need prefix!', value);
      const newValue = '0'+value;

     console.log('onChange', newValue);
      setValue(newValue);
      setCursor(cursorPosition+1);
      return;
    }

    console.log('onChange', value);
    setValue(value);
    setCursor(cursorPosition);
  }

  const handleOnPaste = (event, unformattedValue) => {
    const fullYear = new RegExp('^[0-9]{6}$');
    if (fullYear.test(unformattedValue)) {
      console.log('need truncation!', unformattedValue);
      const newValue = unformattedValue.substring(0, 2) + unformattedValue.substring(4, 6);
      setValue(newValue);
    }
    setValue(unformattedValue);
  }

  // 
  // cursor={cursor}

  return (
    <InputWithDisplayFormat
      value={value}
      placeholder={placeholder}
      displayPattern={pattern}
      className="form-control"
      onChange={handleOnChange}
      onPaste={handleOnPaste}
      onBlur={(v) => console.log('onBlur')}
      onFocus={(v) => console.log('onFocus')}
    />
  );
};
