import classNames from 'classnames';
import PropTypes from 'prop-types';
import { cloneElement } from 'react';

import Chevron from '../../chevron';
import { Position, Theme } from '../../common';
import Option from '../../common/Option';

const AccordionItem = ({ id, title, content, onClick, open, icon, theme }) => {
  const iconElement = icon ? cloneElement(icon, { size: 24 }) : null;

  return (
    <div
      id={id}
      className={classNames('np-accordion-item', `np-accordion-item--${theme}`, {
        'np-accordion-item--open': open,
      })}
    >
      <Option
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
            'has-icon': icon,
          })}
        >
          {content}
        </div>
      )}
    </div>
  );
};

AccordionItem.propTypes = {
  content: PropTypes.node.isRequired,
  icon: PropTypes.node,
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

AccordionItem.defaultProps = {
  icon: null,
  id: null,
  theme: Theme.LIGHT,
};

export default AccordionItem;
