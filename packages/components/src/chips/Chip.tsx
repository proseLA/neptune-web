import classNames from 'classnames';
import { ReactElement } from 'react';

import { AriaLabelProperty, CommonProps } from '../common';
import CloseButton from '../common/closeButton/CloseButton';

export type ChipValue = string | number;

export type Props = {
  value?: ChipValue;
  label: string;
  onRemove?: () => void;
  onClick?: () => void;
  onKeyPress?: () => void;
  closeButton?: AriaLabelProperty;
  'aria-checked'?: boolean;
  role?: string;
} & AriaLabelProperty &
  CommonProps;

const Chip = ({
  label,
  value,
  onRemove,
  onClick,
  onKeyPress,
  className = undefined,
  'aria-label': ariaLabel,
  'aria-checked': ariaChecked,
  role,
  closeButton,
}: Props): ReactElement => {
  const isActionable = onClick || onKeyPress;
  const defaultRole = isActionable ? 'button' : undefined;
  const tabIndex = isActionable ? 0 : -1;
  return (
    <div
      key={value}
      role={role ?? defaultRole}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      aria-checked={ariaChecked}
      className={classNames(
        'np-chip',
        'd-flex',
        'align-items-center',
        'justify-content-between',
        className,
      )}
      {...(isActionable && { onClick, onKeyPress })}
    >
      <span aria-hidden={!!onRemove} className="np-chip-label">
        {label}
      </span>
      {onRemove ? (
        <CloseButton
          /* @ts-expect-error remove when CloseButton will be written on TS */
          className="btn-unstyled m-l-1"
          aria-label={closeButton && closeButton['aria-label']}
          filled
          size={16}
          onClick={onRemove}
        />
      ) : null}
    </div>
  );
};

export default Chip;
