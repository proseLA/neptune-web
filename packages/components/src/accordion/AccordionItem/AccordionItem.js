import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isString } from '@transferwise/neptune-validation';

import Chevron from '../../chevron';
import { Position, Theme } from '../../common';

import { useDirection } from '../../common/hooks';

const AccordionItem = ({ id, title, content, onClick, open, icon, theme }) => {
  const iconEl = icon ? cloneElement(icon, { size: 24 }) : null;
  const { isRTL } = useDirection();

  return (
    <div
      id={id}
      className={classNames('tw-accordion-item decision p-a-0', `tw-accordion-item--${theme}`, {
        closed: !open,
      })}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={onClick}
        className={classNames('tw-accordion-item btn btn-link p-x-0 text-no-decoration p-t-3', {
          'p-b-3': !open,
          'p-b-2': open,
        })}
      >
        <div className="media">
          {icon && (
            <div
              className={classNames('hidden-xs hidden-sm', {
                'media-left': !isRTL,
                'media-right': isRTL,
                'p-r-2': !isRTL,
                'p-l-2': isRTL,
              })}
            >
              {iconEl}
            </div>
          )}
          <div
            className={classNames('media-body title', {
              'text-xs-left': !isRTL,
              'text-xs-right': isRTL,
            })}
          >
            {isString(title) ? <span className="h5 tw-accordion-item__title">{title}</span> : title}
          </div>
          <div
            className={classNames('d-flex align-items-center', {
              'media-right': !isRTL,
              'media-left': isRTL,
            })}
          >
            <Chevron orientation={open ? Position.TOP : Position.BOTTOM} />
          </div>
        </div>
      </button>
      <div className="accordion-content media">
        <div
          className={classNames('media-body p-b-3', {
            'm-l-5': icon || isRTL,
            'm-r-5': icon,
          })}
          aria-hidden={!open}
        >
          {content}
        </div>
      </div>
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
