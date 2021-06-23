import React, { useState } from 'react';
import { text } from '@storybook/addon-knobs';

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
  const content = text('info text', 'Auxiliary help text for field');
  const [value, setValue] = useState('');
  const [validations, setValidations] = useState([]);

  const handleOnChange = (val) => {
    const failures = [];
    const minLength = 3;
    const maxLength = 6;
    if (val.length < minLength) {
      failures.push('minLength');
    }

    if (val.length > maxLength) {
      failures.push('maxLength');
    }

    setValue(val);
    setValidations(failures);
  };

  return (
    <Field
      label="Text Field"
      messages={{
        help,
        error,
        validations,
        info: {
          content,
          'aria-label': 'Click here for more details',
        },
      }}
    >
      <input type="text" value={value} onChange={(event) => handleOnChange(event.target.value)} />
    </Field>
  );
};

export const NumberField = () => {
  const error = text('manual error', 'A manual');
  const help = text('help text', 'Please insert a value between 3 and 6');
  const [value, setValue] = useState('');
  const [validations, setValidations] = useState([]);

  const handleOnChange = (val) => {
    const failures = [];
    const minimum = 3;
    const maximum = 6;
    if (val > maximum) {
      failures.push('maximum');
    }
    if (val < minimum) {
      failures.push('minimum');
    }
    setValidations(failures);
    setValue(val);
  };

  return (
    <Field
      label="Number Field"
      messages={{
        help,
        error,
        validations,
      }}
    >
      <input type="number" value={value} onChange={(event) => handleOnChange(event.target.value)} />
    </Field>
  );
};

export const CheckboxField = () => {
  const [value, setValue] = useState(false);
  const [validations, setValidations] = useState([]);

  const handleOnChange = (val) => {
    const failures = [];
    if (val === false) {
      failures.push('required');
    }

    setValidations(failures);
    setValue(val);
  };

  return (
    <Field
      messages={{
        validations,
      }}
    >
      <Checkbox label="label" onChange={(val) => handleOnChange(val)} checked={value} />
    </Field>
  );
};

export const DateInputField = () => {
  const help = text('help text', 'Please insert a date between 02-01-2000 and 04-01-2000');
  const [value, setValue] = useState('2000-01-01T00:00:00Z');
  const [validations, setValidations] = useState([]);

  const handleOnChange = (val) => {
    const failures = [];
    const maximum = +new Date('2000-01-04T00:00:00Z');
    const minimum = +new Date('2000-01-02T00:00:00Z');
    if (+new Date(val) > maximum) {
      failures.push('Please insert a date before 04-01-2000');
    }

    if (+new Date(val) < minimum) {
      failures.push('Please insert a date after 02-01-2000');
    }

    setValidations(failures);
    setValue(val);
  };

  return (
    <Field
      label="Date Field"
      messages={{
        validations,
        help,
      }}
    >
      <DateInput onChange={(val) => handleOnChange(val)} value={value} id="date-input-1" />
    </Field>
  );
};
