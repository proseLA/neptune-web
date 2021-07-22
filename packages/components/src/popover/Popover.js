import { useRef, useState, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Position } from '../common';
import ResponsivePanel from '../common/responsivePanel';

const Popover = ({ children, className, content, preferredPlacement, title }) => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  return (
    <span className={classnames('np-popover', className)}>
      <span className="d-inline-block" ref={anchorRef}>
        {cloneElement(children, {
          onClick: () => {
            if (children?.props?.onClick) {
              children.props.onClick();
            }
            setOpen(!open);
          },
        })}
      </span>
      <ResponsivePanel
        open={open}
        anchorRef={anchorRef}
        position={preferredPlacement}
        onClose={onClose}
        arrow
        className="np-popover__container"
      >
        <div className="np-popover__content" aria-hidden={!open} role="tooltip">
          {title && (
            <div role="heading" aria-level={1} className="np-popover__title m-b-1">
              {title}
            </div>
          )}
          {content}
        </div>
      </ResponsivePanel>
    </span>
  );
};

Popover.defaultProps = {
  className: undefined,
  preferredPlacement: Position.RIGHT,
  title: undefined,
};

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  content: PropTypes.node.isRequired,
  preferredPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  title: PropTypes.node,
};

export default Popover;
