import React from 'react';
import { text } from '@storybook/addon-knobs';

import InputWithDisplayFormat from '.';

export default {
  component: InputWithDisplayFormat,
  title: 'InputWithDisplayFormat',
};

export const basic = () => {
  const placeholder = text('Placeholder', '**-**-**');
  const displayPattern = text('DisplayPattern', '**-**-**');

  return (
    <InputWithDisplayFormat
      placeholder={placeholder}
      displayPattern={displayPattern}
      className="form-control"
      onChange={(v) => console.log(v)}
      onBlur={(v) => console.log(v)}
      onFocus={(v) => console.log(v)}
    />
  );
};
