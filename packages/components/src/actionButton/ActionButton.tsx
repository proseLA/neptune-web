import classNames from 'classnames';
import { ButtonHTMLAttributes, MouseEvent, forwardRef } from 'react';

type ActionButtonProps = {
  className?: string;
  disabled?: boolean;
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  (
    { disabled = false, className = undefined, onClick, text, ...rest }: ActionButtonProps,
    reference,
  ) => (
    <button
      ref={reference}
      type="button"
      className={classNames(`np-action-btn`, className)}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  ),
);

export default ActionButton;
