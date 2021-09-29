import classNames from 'classnames';
import { ReactElement } from 'react';
import { useIntl } from 'react-intl';

import { CommonProps, AriaLabelProperty } from '../common';

import Chip from './Chip';
import messages from './Chips.messages';

export type ChipValue = string | number;

export type Chip = {
  value: ChipValue;
  label: string;
};

export type ChipsProps = CommonProps &
  AriaLabelProperty & {
    /** List of chips with string labels and string/number values */
    chips: Chip[];
    /** Callback which is invoked when a chip is selected or deselected */
    onChange: ({
      isEnabled,
      selectedValue,
    }: {
      isEnabled: boolean;
      selectedValue: ChipValue;
    }) => void;
    /** Used to manage which chips are selected */
    selected: ChipValue | ChipValue[];
    /** Used to activate multi-selection */
    multiple?: boolean;
  };

const Chips = ({
  chips,
  onChange,
  selected,
  'aria-label': ariaLabel,
  className,
  multiple,
}: ChipsProps): ReactElement => {
  const intl = useIntl();

  const isSelected = (value: ChipValue) =>
    Array.isArray(selected) ? selected.includes(value) : selected === value;

  const handleOnChange = (selectedValue: ChipValue, isCurrentlyEnabled: boolean) => {
    onChange({ isEnabled: !isCurrentlyEnabled, selectedValue });
  };

  return (
    <div
      className={classNames('np-chips d-flex', className)}
      aria-label={ariaLabel}
      role={!multiple ? 'radiogroup' : undefined}
    >
      {chips.map((chip) => {
        const chipSelected = isSelected(chip.value);
        return (
          <Chip
            key={chip.value}
            value={chip.value}
            label={chip.label}
            closeButton={{
              'aria-label': intl.formatMessage(messages.ariaLabel, { choice: chip.label }),
            }}
            className={classNames('text-xs-nowrap', {
              'np-chip--selected': chipSelected,
              'p-r-1': multiple && chipSelected,
            })}
            {...(multiple && chipSelected
              ? {
                  onRemove: () => handleOnChange(chip.value, chipSelected),
                  'aria-label': chip.label,
                }
              : {
                  onClick: () => handleOnChange(chip.value, chipSelected),
                  onKeyPress: () => handleOnChange(chip.value, chipSelected),
                  role: !multiple ? 'radio' : undefined,
                  'aria-checked': chipSelected,
                })}
          />
        );
      })}
    </div>
  );
};

export default Chips;
