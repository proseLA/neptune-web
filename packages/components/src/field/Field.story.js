import React, { useState } from 'react';
import { text } from '@storybook/addon-knobs';

import { formValidators } from '@transferwise/neptune-validation';
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
  const [validation, setValidation] = useState([]);

  const handleOnChange = (val) => {
    const validations = {
      minLength: { value: 3, message: 'Insert a value longer than 3' },
      maxLength: { value: 6, message: 'Insert a value shorter than 6' },
    };

    const failures = formValidators({
      value: val,
      validations,
      isRequired: true,
      type: 'string',
    });

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
  const [validation, setValidation] = useState([]);

  const handleOnChange = (val) => {
    const validations = {
      minimum: { value: 3, message: 'Insert a value bigger than 3' },
      maximum: { value: 6, message: 'Insert a value smaller than 6' },
    };

    const failures = formValidators({
      value: val,
      validations,
      isRequired: true,
      type: 'number',
    });

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
  const [validation, setValidation] = useState([]);

  const handleOnChange = (val) => {
    const failures = formValidators({
      value: val,
      validations: {},
      isRequired: true,
      type: 'checkbox',
    });

    setValidation(failures);
    setValue(val);
  };

  return (
    <>
      <Field
        messages={{
          validation,
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
  const help = text('help text', 'Please insert a date 01-01-2000 and 03-01-2000');
  const [value, setValue] = useState('');
  const [validation, setValidation] = useState([]);

  const handleOnChange = (val) => {
    const validations = {
      minimum: { value: new Date('2000-01-02'), message: 'Insert a value after 01-01-2000' },
      maximum: { value: new Date('2000-01-04'), message: 'Insert a value before 03-01-2000' },
    };
    const failures = formValidators({
      value: val,
      validations,
      isRequired: true,
      type: 'date',
    });

    setValidation(failures);
    setValue(val);
  };

  return (
    <>
      <Field
        messages={{
          validation,
          help,
        }}
      >
        <DateInput
          onChange={(val) => handleOnChange(val)}
          dayLabel="Day input"
          monthLabel="Month Select"
          yearLabel="Year input"
          value={value}
          id="date-input-1"
        />
      </Field>

      <div>{`value: ${value}`}</div>
      <div>{`value type : ${typeof value}`}</div>
    </>
  );
};
