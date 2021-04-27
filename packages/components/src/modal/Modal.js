import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';
import { Size, Position } from '../common';
import Dimmer from '../dimmer';
import CloseButton from '../common/closeButton';

const TRANSITION_DURATION_IN_MILLISECONDS = 150;

const Modal = ({
  title,
  body,
  footer,
  onClose,
  className,
  open,
  size,
  closeOnClick,
  scroll,
  position,
  ...otherProps
}) => {
  const handleOnClick = (event) => {
    if (event.type === 'click' && closeOnClick) {
      onClose(event);
    } else if (event.type !== 'click') {
      onClose(event);
    }
  };

  const checkSpecialClasses = (classToCheck) => className.split(' ').indexOf(classToCheck) !== -1;

  // These should be replaced with props in breaking change.
  const isCompact = checkSpecialClasses('compact');
  const noDivider = checkSpecialClasses('no-divider');

  return (
    <Dimmer
      open={open}
      scrollable={scroll === Modal.Scroll.CONTENT}
      onClick={handleOnClick}
      className={classNames('d-flex', 'justify-content-center', {
        'align-items-center': position === Position.CENTER,
        'align-items-start': position === Position.TOP,
      })}
    >
      <CSSTransition
        appear
        in={open}
        classNames={{ enterDone: 'in' }}
        timeout={TRANSITION_DURATION_IN_MILLISECONDS}
        unmountOnExit
      >
        <div
          className={classNames(
            'tw-modal',
            {
              'tw-modal--content': scroll === Modal.Scroll.CONTENT,
            },
            'fade',
            'outline-none',
            className,
          )}
          {...otherProps}
        >
          <div
            className={classNames('tw-modal-dialog', 'd-flex', {
              [`tw-modal-${size}`]: size,
            })}
            aria-modal
            role="dialog"
          >
            <div
              className={classNames(
                'tw-modal-content',
                'd-flex',
                'flex-column',
                'justify-content-between',
                {
                  'tw-modal-compact': isCompact,
                  'tw-modal-no-title': !title,
                },
              )}
            >
              <div
                className={classNames(
                  'tw-modal-header',
                  'd-flex',
                  'align-items-center',
                  'justify-content-between',
                  'flex-wrap',
                  {
                    'modal--withoutborder': !title || noDivider,
                  },
                )}
              >
                <h4 className="tw-modal-title">{title}</h4>
                <CloseButton onClick={onClose} />
              </div>
              <div className="tw-modal-body">{body}</div>
              {footer && (
                <div
                  className={classNames(
                    'tw-modal-footer',
                    'd-flex',
                    'align-items-center',
                    'flex-wrap',
                    {
                      'modal--withoutborder': noDivider,
                    },
                  )}
                >
                  {footer}
                </div>
              )}
            </div>
          </div>
        </div>
      </CSSTransition>
    </Dimmer>
  );
};

Modal.Size = Size;

Modal.Scroll = {
  CONTENT: 'content',
  VIEWPORT: 'viewport',
};

Modal.Position = {
  [Position.TOP.toUpperCase()]: Position.TOP,
  [Position.CENTER.toUpperCase()]: Position.CENTER,
};

Modal.propTypes = {
  title: PropTypes.node,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
  size: PropTypes.oneOf([
    Modal.Size.SMALL,
    Modal.Size.MEDIUM,
    Modal.Size.LARGE,
    Modal.Size.EXTRA_LARGE,
  ]),
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  closeOnClick: PropTypes.bool,
  scroll: PropTypes.oneOf([Modal.Scroll.CONTENT, Modal.Scroll.VIEWPORT]),
  position: PropTypes.oneOf([Modal.Position.TOP, Modal.Position.CENTER]),
};

Modal.defaultProps = {
  title: null,
  footer: null,
  size: Modal.Size.MEDIUM,
  className: '',
  closeOnClick: true,
  scroll: Modal.Scroll.VIEWPORT,
  position: Modal.Position.CENTER,
};

export default Modal;
