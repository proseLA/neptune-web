import React, { Children } from 'react';
import PropTypes from 'prop-types';

export default function NavigationOptionList({ children }) {
  return (
    <ul className="tw-navigation-options-list">
      {Children.map(children, (child) => (
        <li className="tw-navigation-options-list__item" key={child.key}>
          {child}
        </li>
      ))}
    </ul>
  );
}

NavigationOptionList.propTypes = {
  children: PropTypes.node.isRequired,
};
