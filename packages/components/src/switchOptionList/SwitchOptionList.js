import React, { Children } from 'react';
import Types from 'prop-types';

import './SwitchOptionList.css';

export default function SwitchOptionList({ children }) {
  return (
    <ul className="tw-switch-options-list">
      {Children.map(children, (child) => (
        <li className="tw-switch-options-list__item" key={child.key}>
          {child}
        </li>
      ))}
    </ul>
  );
}

SwitchOptionList.propTypes = {
  children: Types.node.isRequired,
};
