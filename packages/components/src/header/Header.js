import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { Layout } from '../common';

const Header = forwardRef((props, reference) => {
  const { bottomContent, className, layout, leftContent, rightContent } = props;
  const isVertical = layout === Layout.VERTICAL;

  return (
    <div ref={reference} className={classNames('np-header', 'd-flex', 'flex-wrap', className)}>
      <div
        className={classNames('align-items-center', 'np-header__left', 'd-flex', {
          'flex__item--8': isVertical,
        })}
      >
        {leftContent}
      </div>

      <div
        className={classNames(
          'align-items-center',
          'd-flex',
          'np-header__right',
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

Header.defaultProps = {
  bottomContent: undefined,
  className: undefined,
  layout: Layout.HORIZONTAL,
  leftContent: undefined,
  rightContent: undefined,
};

Header.propTypes = {
  bottomContent: PropTypes.node,
  className: PropTypes.string,
  layout: PropTypes.oneOf(['HORIZONTAL', 'VERTICAL']),
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default Header;
