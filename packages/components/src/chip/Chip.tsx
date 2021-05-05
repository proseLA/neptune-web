import React, { MouseEventHandler, ReactElement } from 'react';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';
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
  return (
    <div className={classNames('chip', { 'has-error': hasError }, className)}>
      {label}
      <button type="button" className="btn-unstyled chip-remove m-l-2" onClick={onRemove}>
        <CrossIcon />
      </button>
    </div>
  );
}
