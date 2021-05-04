import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';
import './Chip.css';

import { useDirection } from '../common/hooks';

const Chip = (props) => {
  const { className, hasError, label, onRemove } = props;
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
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  className: PropTypes.string,
  hasError: PropTypes.bool,
};

Chip.defaultProps = {
  className: '',
  hasError: false,
};

export default Chip;
