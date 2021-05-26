import React, { useState } from 'react';
import { text } from '@storybook/addon-knobs';

// import { Checkbox, DateInput } from '../..';
// import { Size } from '../../common';
import Field from './Field';
import { getStringValidationFailures } from './getValidationFailures/getValidationFailures';

export default {
  component: Field,
  title: 'Lab/Field',
};

export const Text = () => {
  const error = text('manual error', 'A manual');
  const help = text('help text', 'Please insert a value between 3 and 6 character');
  const [value, setValue] = useState('');
  const [validation, setValidation] = useState([]);

  const handleOnChange = (val) => {
    const validations = {
      minLength: { value: 3, message: 'Insert a value longer than 3' },
      maxLength: { value: 6, message: 'Insert a value shorter than 6' },
    };

    const failures = getStringValidationFailures({ value: val, validations, isRequired: true });

    setValidation(failures);
    setValue(val);
  };

  return (
    <>
      <Field
        label="Text Field"
        messages={{
          help,
          error,
          validation,
        }}
        submitted={false}
      >
        <input type="text" value={value} onChange={(val) => handleOnChange(val)} />
      </Field>

      <div>{`value: ${value}`}</div>
      <div>{`value type : ${typeof value}`}</div>
    </>
  );
};
