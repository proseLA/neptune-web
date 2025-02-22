import { boolean, select, date, text } from '@storybook/addon-knobs';
import { useState } from 'react';

import { Size } from '../common';

import DateLookup from './DateLookup';

export default {
  component: DateLookup,
  title: 'DateLookup',
};

export const Basic = () => {
  const [value, setValue] = useState(null);
  const disabled = boolean('disabled', false);
  const label = text('label', 'label');
  const monthFormat = select('monthFormat', ['long', 'short']);
  const placeholder = text('placeholder', 'placeholder');
  const size = select('size', Object.values(Size), Size.MEDIUM);

  const minvalue = date('minvalue', new Date('04-13-2021'));
  const maxvalue = date('maxvalue', new Date('04-17-2021'));
  const clearable = boolean('clearable', false);

  return (
    <DateLookup
      disabled={disabled}
      label={label}
      max={new Date(maxvalue)}
      min={new Date(minvalue)}
      monthFormat={monthFormat}
      placeholder={placeholder}
      size={size}
      value={value}
      clearable={clearable}
      onChange={(v) => setValue(v)}
    />
  );
};

export const RightAligned = () => {
  const [value, setValue] = useState(new Date('04-15-2021'));
  const disabled = boolean('disabled', false);
  const label = text('label', 'label');
  const monthFormat = select('monthFormat', ['long', 'short']);
  const placeholder = text('placeholder', 'placeholder');
  const size = select('size', Object.values(Size), Size.MEDIUM);

  const minvalue = date('minvalue', new Date('04-13-2021'));
  const maxvalue = date('maxvalue', new Date('04-17-2021'));
  const clearable = boolean('clearable', false);

  return (
    <div className="row">
      <div className="col-xs-6">
        <p>
          This example demonstrates the automatic right alignment behaviour of the calendar. If,
          when the calendar is opened, it is cut off on the right, the component will align the
          calendar to the rightmost edge of the lookup input.
        </p>
      </div>
      <div className="col-xs-6">
        <DateLookup
          disabled={disabled}
          label={label}
          max={new Date(maxvalue)}
          min={new Date(minvalue)}
          monthFormat={monthFormat}
          placeholder={placeholder}
          size={size}
          value={value}
          clearable={clearable}
          onChange={(v) => setValue(v)}
        />
      </div>
    </div>
  );
};
