import React, { useState } from 'react';
import { text } from '@storybook/addon-knobs';

import { getFieldValidationFailures } from '@transferwise/neptune-validation';
import Checkbox from '../checkbox';
import DateInput from '../dateInput';

import Field from './Field';

export default {
  component: Field,
  title: 'Field',
};

export const TextField = () => {
  const error = text('manual error', 'A manual');
  const help = text('help text', 'Please insert a value between 3 and 6 character');
  const [value, setValue] = useState('');
  const [validations, setValidations] = useState([]);

  const rules = {
    type: 'string',
    required: true,
    minLength: { value: 6 },
    maxLength: { value: 4, message: 'Custom maxLength error message' },
  };

  const handleOnChange = (val) => {
    const failures = getFieldValidationFailures(val, rules);

    setValue(val);
    setValidations(failures);
  };

  return (
    <>
      <Field
        label="Text Field"
        messages={{
          help,
          error,
          validations,
        }}
      >
        <input type="text" value={value} onChange={(val) => handleOnChange(val)} />
      </Field>

      <div>{`value: ${value}`}</div>
      <div>{`value type : ${typeof value}`}</div>
    </>
  );
};

export const NumberField = () => {
  const error = text('manual error', 'A manual');
  const help = text('help text', 'Please insert a value between 3 and 6');
  const [value, setValue] = useState('');
  const [validations, setValidations] = useState([]);

  const handleOnChange = (val) => {
    const rules = {
      type: 'number',
      required: true,
      minimum: { value: 3, message: 'Insert a value bigger than 3' },
      maximum: { value: 6, message: 'Insert a value smaller than 6' },
    };

    const failures = getFieldValidationFailures(val, rules);

    setValidations(failures);
    setValue(val);
  };

  return (
    <>
      <Field
        label="Number Field"
        messages={{
          help,
          error,
          validations,
        }}
      >
        <input type="number" value={value} onChange={(val) => handleOnChange(val)} />
      </Field>

      <div>{`value: ${value}`}</div>
      <div>{`value type : ${typeof value}`}</div>
    </>
  );
};

export const CheckboxField = () => {
  const [value, setValue] = useState('');
  const [validations, setValidations] = useState([]);

  const handleOnChange = (val) => {
    const rules = {
      type: 'boolean',
      required: true,
    };
    const failures = getFieldValidationFailures(val, rules);

    setValidations(failures);
    setValue(val);
  };

  return (
    <>
      <Field
        messages={{
          validations,
        }}
      >
        <Checkbox label="label" onChange={(val) => handleOnChange(val)} checked={value} />
      </Field>

      <div>{`value: ${value}`}</div>
      <div>{`value type : ${typeof value}`}</div>
    </>
  );
};

export const DateInputField = () => {
  const help = text('help text', 'Please insert a date between 01-01-2000 and 03-01-2000');
  const [value, setValue] = useState('2000-01-01T00:00:00Z');
  const [validations, setValidations] = useState([]);

  const handleOnChange = (val) => {
    const rules = {
      type: 'string',
      minimum: { value: '2000-01-02T00:00:00Z', message: 'Insert a value after 02-01-2000' },
      maximum: { value: '2000-01-04T00:00:00Z', message: 'Insert a value before 04-01-2000' },
    };
    const failures = getFieldValidationFailures({
      value: val,
      rules,
    });

    setValidations(failures);
    setValue(val);
  };

  return (
    <>
      <Field
        label="Date Field"
        messages={{
          validations,
          help,
        }}
      >
        <DateInput onChange={(val) => handleOnChange(val)} value={value} id="date-input-1" />
      </Field>

      <div>{`value: ${value}`}</div>
      <div>{`value type : ${typeof value}`}</div>
    </>
  );
};
