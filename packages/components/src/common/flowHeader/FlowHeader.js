import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { Layout } from '../propsValues/layouts';

const FlowHeader = forwardRef((props, reference) => {
  const { bottomContent, className, layout, leftContent, rightContent } = props;
  const isVertical = layout === Layout.VERTICAL;

  return (
    <div ref={reference} className={classNames('np-flow-header', 'd-flex', 'flex-wrap', className)}>
      <div
        className={classNames('align-items-center', 'np-flow-header__left', 'd-flex', {
          'flex__item--8': isVertical,
        })}
      >
        {leftContent}
      </div>

      <div
        className={classNames(
          'align-items-center',
          'd-flex',
          'np-flow-header__right',
          'justify-content-end',
          {
            'flex__item--4 ': isVertical,
            'order-2': !isVertical,
          },
        )}
      >
        {rightContent}
      </div>
      <div
        className={classNames('align-items-center', 'd-flex', 'justify-content-center', {
          'flex__item--12': isVertical,
          'order-1 flex-grow-1': !isVertical,
        })}
      >
        {bottomContent}
      </div>
    </div>
  );
});

FlowHeader.defaultProps = {
  bottomContent: undefined,
  className: undefined,
  layout: Layout.HORIZONTAL,
  leftContent: undefined,
  rightContent: undefined,
};

FlowHeader.propTypes = {
  bottomContent: PropTypes.node,
  className: PropTypes.string,
  layout: PropTypes.oneOf(['HORIZONTAL', 'VERTICAL']),
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default FlowHeader;
