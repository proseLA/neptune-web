import PropTypes from 'prop-types';
import { Children } from 'react';

const NavigationOptionList = ({ children }) => {
  return (
    <ul className="np-navigation-options-list">
      {Children.map(children, (child) => (
        <li key={child.key} className="np-navigation-options-list__item">
          {child}
        </li>
      ))}
    </ul>
  );
};

NavigationOptionList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationOptionList;
