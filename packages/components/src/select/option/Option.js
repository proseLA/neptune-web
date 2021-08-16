import PropTypes from 'prop-types';
import { cloneElement } from 'react';

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

  return (
    <span>
      {currency ? (
        <i className={currencyClassNames} />
      ) : (
        icon && cloneElement(icon, { size: 24, className: `${style(['tw-icon'])}` })
      )}
      {label}
      {note && <span className="small m-l-1">{note}</span>}
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
