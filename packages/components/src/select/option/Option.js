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

  const flexClassNames = note ? `${style(['d-flex align-items-center'])}` : undefined;

  return (
    <>
      {icon
        ? cloneElement(icon, {
            size: 24,
            className: `${style(['tw-icon', `${selected && currency ? 'hidden-xs' : ''}`])}`,
          })
        : currency && <i className={currencyClassNames} />}
      <span className={flexClassNames}>
        {label}
        {note && <span className="body-2 m-l-1">{note}</span>}
      </span>
      {secondary && <span className="body-2 text-ellipsis">{secondary}</span>}
    </>
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
