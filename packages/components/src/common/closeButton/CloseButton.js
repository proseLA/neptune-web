import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';

import { useSafeIntl } from '../safeIntl';
import messages from './CloseButton.messages';

import './CloseButton.css';

export const CloseButton = React.forwardRef((props, ref) => {
  const intl = useSafeIntl();
  const { onClick, className, size } = props;
  return (
    <button
      ref={ref}
      type="button"
      className={classNames(
        'np-close-button close btn-link text-no-decoration',
        { 'np-close-button--large': size === CloseButton.Size.LARGE },
        className,
      )}
      aria-label={intl.formatMessage(messages.ariaLabel)}
      onClick={onClick}
    >
      <CrossIcon size={size} />
    </button>
  );
});

CloseButton.Size = {
  SMALL: 16,
  LARGE: 24,
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(CloseButton.Size)),
};

CloseButton.defaultProps = {
  className: null,
  size: CloseButton.Size.LARGE,
};

export default CloseButton;
