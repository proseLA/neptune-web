import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import Chevron from '../../chevron';

import { Size, MonthFormat } from '../../common';

const OpenButton = ({ selectedDate, size, placeholder, label, monthFormat, disabled, onClick }) => {
  const { locale } = useIntl();
  return (
    <button
      onClick={onClick}
      className={`btn btn-${size} btn-input dropdown-toggle`}
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
      <Chevron orientation={Chevron.Orientation.BOTTOM} disabled={disabled} />
    </button>
  );
};

OpenButton.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  size: PropTypes.oneOf([Size.SMALL, Size.MEDIUM, Size.LARGE]),
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  monthFormat: PropTypes.oneOf(Object.values(MonthFormat)).isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

OpenButton.defaultProps = {
  selectedDate: null,
  size: Size.MEDIUM,
};

export default OpenButton;
