import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { formatDate } from '@transferwise/formatting';
import { CrossCircle } from '@transferwise/icons';
import { isKey } from '@transferwise/neptune-validation';

import messages from './DateTrigger.messages';

import Chevron from '../../chevron';

import { Size, Position } from '../../common';
import './DateTrigger.css';

const DateTrigger = ({
  selectedDate,
  size,
  placeholder,
  label,
  monthFormat,
  disabled,
  onClick,
  onClear,
}) => {
  const { locale, formatMessage } = useIntl();

  const handleKeyDown = (e) => {
    if (isKey({ keyType: 'Space', event: e }) || isKey({ keyType: 'Enter', event: e })) {
      e.stopPropagation();
      e.preventDefault();
      onClear();
    }
  };

  return (
    <button
      onClick={onClick}
      className={`btn btn-${size} btn-input dropdown-toggle np-date-trigger np-date-trigger--${size}`}
      disabled={disabled}
      type="button"
    >
      {label && <span className="control-label small m-r-1">{label}</span>}
      {selectedDate ? (
        <span>
          {formatDate(selectedDate, locale, {
            day: 'numeric',
            month: monthFormat,
            year: 'numeric',
          })}
        </span>
      ) : (
        <span
          className="form-control-placeholder visible-xs-inline visible-sm-inline
                       visible-md-inline visible-lg-inline visible-xl-inline"
        >
          {placeholder}
        </span>
      )}
      {!onClear ? (
        <Chevron orientation={Position.BOTTOM} disabled={disabled} />
      ) : (
        <span
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClear();
          }}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          className="clear-btn d-flex align-items-center"
          aria-label={formatMessage(messages.ariaLabel)}
        >
          <CrossCircle filled size={size === Size.SMALL ? 16 : 24} />
        </span>
      )}
    </button>
  );
};

DateTrigger.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  monthFormat: PropTypes.oneOf(['short', 'long']).isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onClear: PropTypes.func,
};

DateTrigger.defaultProps = {
  selectedDate: null,
  size: Size.MEDIUM,
  onClear: undefined,
};

export default DateTrigger;
