import { ReactChild, ReactElement } from 'react';
import classNames from 'classnames';

import Option from '../common/Option';
import Button from '../button';
import { CommonProps, ControlType, Priority, Size } from '../common';

import './ActionOption.css';

type Props = {
  complex?: boolean;
  content?: ReactChild;
  disabled?: boolean;
  media?: ReactChild;
  showMediaAtAllSizes?: boolean;
  onClick: () => void;
  title: ReactChild;
  action: ReactChild;
} & CommonProps;

const ActionOption = ({
  action,
  disabled,
  onClick,
  media,
  title,
  content,
  complex,
  className,
  showMediaAtAllSizes,
}: Props): ReactElement => {
  const sharedProps = {
    media,
    title,
    content,
    complex,
    disabled,
    showMediaAtAllSizes,
    className: classNames('tw-action-option', className),
  };

  return (
    <Option
      {...sharedProps}
      button={
        <Button
          className="p-x-0"
          aria-label={`${title}, ${action}`}
          type={ControlType.ACCENT}
          priority={Priority.TERTIARY}
          size={Size.SMALL}
          disabled={disabled}
          onClick={onClick}
        >
          {action}
        </Button>
      }
    />
  );
};

export default ActionOption;
