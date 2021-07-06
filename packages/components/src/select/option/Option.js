import React from 'react';
import PropTypes from 'prop-types';
import classNamesFunc from 'classnames';

import { useDirection } from '../../common/hooks';

const Option = ({ currency, label, note, secondary, icon, classNames, selected }) => {
  const style = (classes) =>
    classes.map((className) => classNames[className] || className).join(' ');
  const currencyClassNames = currency
    ? `${style([
        'currency-flag',
        `currency-flag-${currency.toLowerCase()}`,
        `${selected ? 'hidden-xs' : ''}`,
      ])}`
    : null;

  const { isRTL } = useDirection();

  return (
    <span
      className={classNamesFunc({
        'option-secondary--rtl': isRTL && secondary,
        'option-currency--rtl': isRTL && currency,
      })}
    >
      {currency ? (
        <i className={currencyClassNames} />
      ) : (
        icon && React.cloneElement(icon, { size: 24, className: `${style(['tw-icon'])}` })
      )}
      {label}
      {note && (
        <span className={classNamesFunc('small', { 'm-l-1': !isRTL, 'm-r-1': isRTL })}>{note}</span>
      )}
      {secondary && <span className="small text-ellipsis">{secondary}</span>}
    </span>
  );
};

Option.propTypes = {
  label: PropTypes.node.isRequired,
  currency: PropTypes.string,
  note: PropTypes.node,
  secondary: PropTypes.node,
  icon: PropTypes.node,
  classNames: PropTypes.objectOf(PropTypes.string),
  selected: PropTypes.bool,
};

Option.defaultProps = {
  currency: '',
  note: '',
  secondary: '',
  icon: null,
  classNames: {},
  selected: false,
};

export default Option;
