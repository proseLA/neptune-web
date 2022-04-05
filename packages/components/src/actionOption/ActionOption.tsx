import classNames from 'classnames';
import { ReactChild, ReactElement } from 'react';

import ActionButton from '../actionButton';
import { CommonProps } from '../common';
import Option from '../common/Option';

type Props = {
  complex?: boolean;
  content?: ReactChild;
  disabled?: boolean;
  media?: ReactChild;
  showMediaAtAllSizes?: boolean;
  onClick: () => void;
  title: ReactChild;
  action: ReactChild;
  showMediaCircle?: boolean;
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
  showMediaCircle,
}: Props): ReactElement => {
  const sharedProps = {
    media,
    title,
    content,
    complex,
    disabled,
    showMediaAtAllSizes,
    showMediaCircle,
    className: classNames('tw-action-option', className),
  };

  const getAriaLabel = (): string | undefined => {
    const labels: string[] = [];

    if (typeof title === 'string') {
      labels.push(title);
    }

    if (typeof action === 'string') {
      labels.push(action);
    }

    return labels.join(', ') || undefined;
  };

  return (
    <Option
      {...sharedProps}
      button={
        <ActionButton
          disabled={disabled}
          aria-label={getAriaLabel()}
          text={action as string}
          onClick={onClick}
        />
      }
    />
  );
};

export default ActionOption;
