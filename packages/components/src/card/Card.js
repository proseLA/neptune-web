import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import requiredIf from 'react-required-if';

import Chevron from '../chevron';
import { Position, Key } from '../common';
import Option from '../common/Option';

const Card = forwardRef((props, reference) => {
  const {
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
  const TOGGLE_KEYS = new Set([Key.ENTER, ...Key.SPACE]);

  return (
    <Element
      ref={reference}
      className={classNames('tw-card list-group-item p-a-0', className, { active: isOpen })}
      id={id}
      data-testid={rest['data-testid']}
    >
      <div
        aria-expanded={isExpanded}
        className={classNames('p-a-panel tw-card__panel', {
          'tw-card__panel--inactive': !children,
        })}
        role={children ? 'button' : null}
        tabIndex={children ? 0 : undefined}
        onClick={() => children && onClick(!isExpanded)} // TODO: Consider renaming to onExpand as Card can be expanded with keyboard
        onKeyDown={(event) => {
          if (TOGGLE_KEYS.has(event.key) && children) {
            event.preventDefault();
            onClick(!isExpanded);
          }
        }}
      >
        <Option
          as="div"
          media={icon}
          title={title}
          content={details}
          decision={false}
          button={children && <Chevron orientation={isOpen ? Position.TOP : Position.DOWN} />}
          inverseMediaCircle={isOpen}
        />
      </div>
      {isOpen && (
        <div className="p-l-panel p-r-panel p-b-panel tw-card__content">
          <div className="media">
            <div className="media-left">
              <div className="circle circle-sm circle-inverse circle-responsive invisible" />
            </div>
            <div className="media-body">
              <hr className="m-t-0 hidden-xs hidden-sm" />
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
});

const hasChildren = ({ children }) => children;

Card.propTypes = {
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
  as: 'div',
  children: null,
  id: null,
  className: null,
  'data-testid': null,
};

export default Card;
