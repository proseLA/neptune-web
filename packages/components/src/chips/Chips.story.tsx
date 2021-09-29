import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import Chips, { ChipsProps, ChipValue } from './Chips';

export default {
  title: 'Chips',
  component: Chips,
} as Meta;

const FilterTemplate: Story<ChipsProps> = (args: ChipsProps) => {
  const [selected, setSelected] = useState<ChipValue[]>(
    args.selected ? (args.selected as ChipValue[]) : [],
  );
  return (
    <Chips
      {...args}
      selected={selected}
      multiple
      onChange={({ selectedValue, isEnabled }) => {
        if (isEnabled) {
          setSelected([...selected, selectedValue]);
        } else {
          const updatedSelected = selected.filter((value) => selectedValue !== value);
          setSelected(updatedSelected);
        }
      }}
    />
  );
};

const ChoiceTemplate: Story<ChipsProps> = (args: ChipsProps) => {
  const [selected, setSelected] = useState<ChipValue>(args.selected as ChipValue);
  return (
    <Chips
      {...args}
      selected={selected}
      onChange={({ selectedValue }) => setSelected(selectedValue)}
    />
  );
};

export const FilterChips = FilterTemplate.bind({});
FilterChips.args = {
  chips: [
    {
      value: 'accounting',
      label: 'Accounting',
    },
    {
      value: 'payroll',
      label: 'Payroll',
    },
    {
      value: 'reporting',
      label: 'Reporting',
    },
    {
      value: 'payments',
      label: 'Payments',
    },
  ],
};

export const PreSelectedFilterChips = FilterTemplate.bind({});
PreSelectedFilterChips.args = {
  chips: [
    {
      value: 'accounting',
      label: 'Accounting',
    },
    {
      value: 'payroll',
      label: 'Payroll',
    },
    {
      value: 'reporting',
      label: 'Reporting',
    },
    {
      value: 'payments',
      label: 'Payments',
    },
  ],
  selected: ['accounting', 'payments'],
};

export const ChoiceChips = ChoiceTemplate.bind({});
ChoiceChips.args = {
  chips: [
    {
      value: 1,
      label: '100 GBP',
    },
    {
      value: 2,
      label: '200 GBP',
    },
    {
      value: 3,
      label: '300 GBP',
    },
    {
      value: 4,
      label: '400 GBP+',
    },
  ],
  selected: 3,
};
