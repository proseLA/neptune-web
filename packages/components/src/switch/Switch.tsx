import { KeyboardEventHandler, MouseEvent, ReactElement } from 'react';
import classnames from 'classnames';
import { CheckCircle, CrossCircle } from '@transferwise/icons';

import { logActionRequiredIf } from '../utilities';

import KeyCodes from '../common/keyCodes';
import { useDirection } from '../common/hooks';
import { CommonProps } from '../common';

type Props = CommonProps & {
  /** Used to describe the purpose of the switch. To be used if there is no external label (i.e. aria-labelledby is null) */
  'aria-label'?: string;
  /** A reference to a label that describes the purpose of the switch. Ignored if aria-label is provided */
  'aria-labelledby'?: string;
  /** Whether the switch is checked or not */
  checked?: boolean;
  disabled?: boolean;
  /** ID to apply to the switch container */
  id?: string;
  /** Function called when the switch is toggled */
  onClick: (event?: MouseEvent<HTMLSpanElement>) => void;
};

const Switch = (props: Props): ReactElement => {
  const { isRTL } = useDirection();
  const { checked, className, id, onClick, disabled } = props;

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.code === '32' || event.keyCode === KeyCodes.SPACE) {
      event.preventDefault();
      onClick();
    }
  };

  const ariaLabel = props['aria-label'];
  const ariaLabelledby = ariaLabel ? undefined : props['aria-labelledby'];

  logActionRequiredIf(
    'Switch now expects either `aria-label` or `aria-labelledby`, and will soon make these props required. Please update your usage to provide one or the other.',
    !ariaLabel && !ariaLabelledby,
  );

  return (
    <span
      className={classnames(
        'np-switch',

        {
          'np-switch--rtl': isRTL,
          'np-switch--unchecked': !checked,
          'np-switch--checked': checked,
        },
        className,
      )}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      id={id}
      aria-disabled={disabled}
    >
      <span className="np-switch--thumb">
        {checked ? <CheckCircle filled size={24} /> : <CrossCircle filled size={24} />}
      </span>
      <input type="checkbox" checked={checked} readOnly />
    </span>
  );
};

export default Switch;
