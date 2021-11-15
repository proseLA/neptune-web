import classNames from 'classnames';
import PropTypes from 'prop-types';
import { cloneElement } from 'react';

import Chevron from '../../chevron';
import { Position, Theme } from '../../common';
import Option from '../../common/Option';
import { useDirection } from '../../common/hooks';

const AccordionItem = ({
  'aria-label': ariaLabel,
  id,
  title,
  content,
  onClick,
  open,
  icon,
  theme,
}) => {
  const iconElement = icon ? cloneElement(icon, { size: 24 }) : null;
  const { isRTL } = useDirection();

  return (
    <div
      id={id}
      className={classNames('np-accordion-item', `np-accordion-item--${theme}`, {
        'np-accordion-item--open': open,
      })}
    >
      <Option
        aria-label={ariaLabel}
        as="button"
        media={iconElement}
        title={title}
        button={<Chevron orientation={open ? Position.TOP : Position.DOWN} />}
        inverseMediaCircle={false}
        onClick={onClick}
      />
      {open && (
        <div
          className={classNames('np-accordion-item__content', {
            'icon-right': icon && isRTL,
            'icon-left': icon,
          })}
        >
          {content}
        </div>
      )}
    </div>
  );
};

AccordionItem.propTypes = {
  'aria-label': PropTypes.string,
  content: PropTypes.node.isRequired,
  icon: PropTypes.node,
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

AccordionItem.defaultProps = {
  'aria-label': undefined,
  icon: null,
  id: null,
  theme: Theme.LIGHT,
};

export default AccordionItem;
