import classNames from 'classnames';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';

import { Size, Position, Scroll } from '../common';
import CloseButton from '../common/closeButton';
import Dimmer from '../dimmer';

const TRANSITION_DURATION_IN_MILLISECONDS = 150;

const Modal = ({
  title,
  body,
  footer,
  onClose,
  className,
  open,
  size,
  scroll,
  position,
  ...otherProps
}) => {
  const checkSpecialClasses = (classToCheck) => className.split(' ').includes(classToCheck);

  // These should be replaced with props in breaking change.
  const isCompact = checkSpecialClasses('compact');
  const noDivider = checkSpecialClasses('no-divider');

  return (
    <Dimmer
      open={open}
      scrollable={scroll === Scroll.VIEWPORT}
      className={classNames('d-flex', 'justify-content-center')}
      onClose={onClose}
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
            'd-flex',
            {
              'align-self-center': position === Position.CENTER,
              'tw-modal--content': scroll === Scroll.CONTENT,
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

Modal.propTypes = {
  title: PropTypes.node,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  scroll: PropTypes.oneOf(['content', 'viewport']),
  position: PropTypes.oneOf(['top', 'center']),
};

Modal.defaultProps = {
  title: null,
  footer: null,
  size: Size.MEDIUM,
  className: '',
  scroll: Scroll.VIEWPORT,
  position: Position.CENTER,
};

export default Modal;
