import classNames from 'classnames';
import { forwardRef } from 'react';

import Chevron from '../chevron';
import { Position } from '../common';
import Option from '../common/Option';
import { OptionProps } from '../common/Option/Option';

type NavigationOptionProps = OptionProps;

const NavigationOption = forwardRef<HTMLElement, NavigationOptionProps>(
  ({ as: component = 'button', disabled = false, onClick, className, ...rest }, reference) => {
    if ('href' in rest) {
      component = 'a';
    }

    return (
      <Option
        {...rest}
        ref={reference}
        as={component}
        className={classNames('np-navigation-option', className)}
        button={<Chevron orientation={Position.RIGHT} disabled={disabled} className="d-block" />}
        disabled={disabled}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          if (onClick) {
            onClick(event);
          }
        }}
      />
    );
  },
);

export default NavigationOption;
