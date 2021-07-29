import { MouseEventHandler, ReactElement } from 'react';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';
import { useDirection } from '../common/hooks';
import { CommonProps } from '../common';
import './Chip.css';

type Props = {
  /**
   * label for Chip
   */
  label: string;
  /**
   * onClick for on x
   */
  onRemove: MouseEventHandler;
  hasError?: boolean;
} & CommonProps;

/**
 * `Chip` component
 *
 * Docs link: https://transferwise.github.io/neptune-web/components/internal/Chip
 */
export default function Chip({
  label,
  onRemove,
  hasError = false,
  className = undefined,
}: Props): ReactElement {
  const { isRTL } = useDirection();
  return (
    <div
      className={classNames(
        'chip',
        'd-inline-flex',
        'align-items-center',
        'm-t-1',
        { 'has-error': hasError, 'p-r-1 p-l-2': !isRTL, 'p-l-1 p-r-2': isRTL },
        className,
      )}
    >
      {label}
      <button
        type="button"
        className={classNames('btn-unstyled chip-remove', { 'm-l-2': !isRTL, 'm-r-2': isRTL })}
        onClick={onRemove}
      >
        <CrossIcon />
      </button>
    </div>
  );
}
