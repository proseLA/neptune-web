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
  const flexClassNames = secondary
    ? `${style(['d-flex align-items-start', `${secondary ? 'flex-column' : ''}`])}`
    : 'd-flex align-items-start';

  return (
    <span className={flexClassNames}>
      {icon
        ? cloneElement(icon, {
            size: 24,
            className: `${style(['tw-icon', `${selected && currency ? 'hidden-xs' : ''}`])}`,
          })
        : currency && <i className={currencyClassNames} />}
      {label}
      {note && <span className="body-2 m-l-1">{note}</span>}
      {secondary && <span className="body-2 text-ellipsis">{secondary}</span>}
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
