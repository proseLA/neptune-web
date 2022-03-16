import classNames from 'classnames';
import { ReactNode } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import {
  Size,
  Position,
  PositionTop,
  PositionCenter,
  Scroll,
  CommonProps,
  SizeSmall,
  SizeMedium,
  SizeLarge,
  SizeExtraLarge,
  ScrollContent,
  ScrollViewport,
} from '../common';
import CloseButton from '../common/closeButton';
import { useLayout } from '../common/hooks';
import Dimmer from '../dimmer';
import Drawer from '../drawer';

const TRANSITION_DURATION_IN_MILLISECONDS = 150;

type ModalProps = CommonProps & {
  title?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  size?: SizeSmall | SizeMedium | SizeLarge | SizeExtraLarge;
  onClose: () => void;
  open: boolean;
  scroll?: ScrollContent | ScrollViewport;
  position?: PositionTop | PositionCenter;
};

const Modal = ({
  title = null,
  body,
  footer = null,
  onClose,
  className,
  open,
  size = Size.MEDIUM,
  scroll = Scroll.VIEWPORT,
  position = Position.CENTER,
  ...otherProps
}: ModalProps) => {
  const checkSpecialClasses = (classToCheck: string) =>
    className?.split(' ').includes(classToCheck);
  const { isMobile } = useLayout();

  // These should be replaced with props in breaking change.
  const isCompact = checkSpecialClasses('compact');
  const noDivider = checkSpecialClasses('no-divider');

  return isMobile ? (
    <Drawer
      open={open}
      headerTitle={title}
      footerContent={footer}
      position={Position.BOTTOM}
      onClose={onClose}
    >
      {body}
    </Drawer>
  ) : (
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
          className={classNames('tw-modal', 'd-flex', 'fade', 'outline-none', className, {
            'align-self-center': position === Position.CENTER,
            'tw-modal--scrollable': scroll === Scroll.CONTENT,
          })}
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
                {/* @ts-expect-error TODO: Remove this once CloseButton is migrated to TypeScript */}
                <CloseButton onClick={onClose} />
              </div>
              <div
                className={classNames('tw-modal-body', {
                  'tw-modal-body--scrollable': scroll === Scroll.CONTENT,
                })}
              >
                {body}
              </div>
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

export default Modal;
