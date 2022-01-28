/* eslint-disable @typescript-eslint/ban-ts-comment */
import classNames from 'classnames';
import {
  cloneElement,
  useRef,
  useState,
  useEffect,
  ReactNode,
  ReactElement,
  PropsWithChildren,
} from 'react';
import { usePopper } from 'react-popper';

import { CommonProps, Position } from '../common';
import {
  PositionBottom,
  PositionLeft,
  PositionRight,
  PositionTop,
} from '../common/propsValues/position';

type Props = PropsWithChildren<{
  position?: PositionTop | PositionRight | PositionBottom | PositionLeft;
  label: ReactNode;
}> &
  CommonProps;

const Tooltip = ({
  position = Position.TOP,
  children = undefined,
  label,
  className,
}: Props): ReactElement => {
  const [open, setOpen] = useState(false);
  const anchorReference = useRef(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const modifiers = [];

  modifiers.push({
    name: 'arrow',
    options: {
      element: arrowElement,
      options: {
        padding: 8, // 8px from the edges of the popper
      },
    },
  });
  // This lets you displace a popper element from its reference element.
  modifiers.push({ name: 'offset', options: { offset: [0, 16] } });
  modifiers.push({
    name: 'flip',
    options: {
      fallbackPlacements: Position.TOP,
    },
  });

  const { styles, attributes, forceUpdate } = usePopper(anchorReference.current, popperElement, {
    placement: position,
    modifiers,
  });

  // If the trigger is not visible when the position is calculated, it will be incorrect. Because this can happen repeatedly (on resize for example),
  // it is most simple just to always position before opening
  useEffect(() => {
    if (open && forceUpdate) {
      forceUpdate();
    }
  }, [open]);

  return (
    <>
      <span ref={anchorReference} className="d-inline-block">
        {children
          ? cloneElement(children as ReactElement, {
              /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
              onMouseOver: () => {
                if ((children as ReactElement)?.props?.onMouseOver) {
                  (children as ReactElement)?.props?.onMouseOver();
                }
                setOpen(true);
              },
              onFocus: () => {
                if ((children as ReactElement)?.props?.onFocus) {
                  (children as ReactElement).props.onFocus();
                }
                setOpen(true);
              },
              onMouseOut: () => {
                if ((children as ReactElement)?.props?.onMouseOver) {
                  (children as ReactElement).props.onMouseOver();
                }
                setOpen(false);
              },
              onBlur: () => {
                if ((children as ReactElement)?.props?.onBlur) {
                  (children as ReactElement).props.onBlur();
                }
                setOpen(false);
              },
              /* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
            })
          : null}
      </span>
      {open ? (
        <div
          // @ts-expect-error
          ref={setPopperElement}
          className={classNames('np-tooltip', 'np-panel', 'np-panel--open', 'bg-screen', className)}
          // eslint-disable-next-line react/forbid-dom-props
          style={{ ...styles.popper }}
          {...attributes.popper}
        >
          <div className="np-panel__content tooltip-inner">
            {label}
            <div
              // @ts-expect-error
              ref={setArrowElement}
              className={classNames('np-panel__arrow')}
              // eslint-disable-next-line react/forbid-dom-props
              style={styles.arrow}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Tooltip;
