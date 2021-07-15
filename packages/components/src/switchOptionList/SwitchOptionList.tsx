import React, { Children, ComponentType } from 'react';
import { ReactElement } from 'react';

import './SwitchOptionList.css';

type Props = {
  children: ReactElement[];
}

const SwitchOptionList: ComponentType<Props> = ({ children }) => {
  return (
    <ul className="tw-switch-options-list">
      {Children.map(children, (child, index) => (
        <li className="tw-switch-options-list__item" key={child.key || index}>
          {child}
        </li>
      ))}
    </ul>
  );
}

export default SwitchOptionList;