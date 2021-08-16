import { select, boolean } from '@storybook/addon-knobs';
import { Search as SearchIcon } from '@transferwise/icons';
import { useState } from 'react';

import { Sentiment } from '../common';

import Typeahead from './Typeahead';

export default {
  component: Typeahead,
  title: 'Typeahead',
};

const validateChip = (option) => {
  // eslint-disable-next-line unicorn/no-unsafe-regex
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    option.label,
  );
};

export const createable = () => {
  return (
    <Typeahead
      id="typeahead"
      name="typeahead-input-name"
      size="md"
      maxHeight={100}
      footer={<div>Want a footer? Style it!</div>}
      multiple
      clearable
      allowNew
      showSuggestions={false}
      showNewEntry={false}
      placeholder="placeholder"
      chipSeparators={[',', ' ']}
      validateChip={validateChip}
      addon={<SearchIcon />}
      options={[]}
      onChange={() => {}}
      onBlur={() => {}}
    />
  );
};

export const Basic = () => {
  const [options, setOptions] = useState([
    {
      label: 'A thing',
      note: 'with a note',
    },
    {
      label: 'Another thing',
      secondary: 'with secondary text this time',
    },
    {
      label: 'Profile',
    },
    {
      label: 'Globe',
    },
    {
      label: 'British pound',
    },
    {
      label: 'Euro',
    },
    {
      label: 'Something else',
    },
  ]);

  const validateChipWhenMultiple = () => {
    return multiple && allowNew ? (option) => validateChip(option) : undefined;
  };

  const multiple = boolean('multiple', false);
  const clearable = boolean('clearable', false);
  const allowNew = boolean('allowNew', false);
  const showSuggestions = boolean('showSuggestions', true);
  const showNewEntry = boolean('showNewEntry', true);
  const showAlert = boolean('alert', false);
  const alertType = select('alert type', [Sentiment.ERROR, Sentiment.WARNING], Sentiment.ERROR);

  return (
    <Typeahead
      id="typeahead"
      name="typeahead-input-name"
      size="md"
      maxHeight={100}
      footer={<div>Want a footer? Style it!</div>}
      multiple={multiple}
      clearable={clearable}
      allowNew={allowNew}
      showSuggestions={showSuggestions}
      showNewEntry={showNewEntry}
      placeholder="placeholder"
      chipSeparators={[',', ' ']}
      validateChip={validateChipWhenMultiple}
      alert={showAlert && { message: `Couldn't add item`, type: alertType }}
      addon={<SearchIcon />}
      options={options}
      inputAutoComplete="off"
      onSearch={() => {
        setTimeout(() => setOptions(options), 1500);
      }}
      onChange={() => {}}
      onBlur={() => {}}
    />
  );
};
