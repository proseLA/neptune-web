import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formatDate, formatNumber } from '@transferwise/formatting';
import { formatUsingPattern } from '../utils/text-format';

/**
 *
 * @param {Array} options
 * @param {string|number} value
 */
const getValueLabel = (options, value) => {
  const option = options.find((currentOption) => currentOption.value === value);
  return option && option.label ? option.label : value;
};

/**
 *
 * @param {string} value
 */
const mask = (value) => new Array(value.length + 1).join('*');

const FormattedValue = ({ field, value }) => {
  const { locale } = useIntl();
  const style = [];
  if (field.tagClassName && field.tagClassName.h3) {
    style.push('h3');
    style.push('formatted-value__h3-custom-alignment');
  }

  switch (field.control) {
    case 'select':
    case 'radio':
      return <span>{getValueLabel(field.values, value)}</span>;
    case 'date':
      return <span>{formatDate(value instanceof Date ? value : new Date(value), locale)}</span>;
    case 'number':
      return <span>{formatNumber(value, locale)}</span>;
    case 'password':
      return <span>{mask(value)}</span>;
    case 'file':
      return (
        <div className="thumbnail">
          <img alt={field.title} src={value} />
        </div>
      );
    case 'checkbox':
      return <span>{JSON.stringify(value)}</span>;
    default:
      return (
        <span className={classNames(style)}>{formatUsingPattern(value, field.displayFormat)}</span>
      );
  }
};

FormattedValue.propTypes = {
  field: PropTypes.shape({
    control: PropTypes.string.isRequired,
    displayFormat: PropTypes.string,
    refreshRequirementsOnChange: PropTypes.bool,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    width: PropTypes.string,
    tagClassName: PropTypes.shape({
      h3: PropTypes.bool,
    }),
    // eslint-disable-next-line react/forbid-prop-types
    values: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.any })),
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any.isRequired,
};

export default FormattedValue;
