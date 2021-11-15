import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import requiredIf from 'react-required-if';

import Chevron from '../chevron';
import { Position } from '../common';
import Option from '../common/Option';

const Card = forwardRef((props, reference) => {
  const {
    'aria-label': ariaLabel,
    as: Element,
    isExpanded,
    title,
    details,
    children,
    onClick,
    icon,
    id,
    className,
    ...rest
  } = props;
  const isOpen = !!(isExpanded && children);

  return (
    <Element
      ref={reference}
      className={classNames('np-card', className, {
        'np-card--expanded': isOpen,
        'np-card--inactive': !children,
        'np-card--has-icon': !!icon,
      })}
      id={id}
      data-testid={rest['data-testid']}
    >
      <Option
        aria-label={ariaLabel}
        as={children ? 'button' : 'div'}
        className={classNames('np-card__button')}
        media={icon}
        title={title}
        content={details}
        button={children && <Chevron orientation={isOpen ? Position.TOP : Position.BOTTOM} />}
        onClick={() => children && onClick(!isExpanded)}
      />
      <div
        className={classNames('np-card__divider', {
          'np-card__divider--expanded': isOpen,
        })}
      />
      {isOpen && <div className="np-card__content">{children}</div>}
    </Element>
  );
});

const hasChildren = ({ children }) => children;

Card.propTypes = {
  'aria-label': PropTypes.string,
  as: PropTypes.string,
  isExpanded: requiredIf(PropTypes.bool, hasChildren),
  title: PropTypes.node.isRequired,
  details: PropTypes.node.isRequired,
  onClick: requiredIf(PropTypes.func, hasChildren),
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  'data-testid': PropTypes.string,
};

Card.defaultProps = {
  'aria-label': undefined,
  as: 'div',
  children: null,
  id: null,
  className: null,
  'data-testid': null,
};

export default Card;
