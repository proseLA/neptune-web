import { Cross as CrossIcon, CrossCircle as CrossCircleIcon } from '@transferwise/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useIntl } from 'react-intl';

import messages from './CloseButton.messages';

export const CloseButton = forwardRef((props, reference) => {
  const intl = useIntl();
  const { onClick, className, size, filled } = props;
  const ariaLabel = props['aria-label'] || intl.formatMessage(messages.ariaLabel);
  return (
    <button
      ref={reference}
      type="button"
      className={classNames(
        'np-close-button close btn-link text-no-decoration',
        { 'np-close-button--large': size === CloseButton.Size.LARGE },
        className,
      )}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {filled ? <CrossCircleIcon size={size} filled /> : <CrossIcon size={size} />}
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
  filled: PropTypes.bool,
  'aria-label': PropTypes.string,
};

CloseButton.defaultProps = {
  className: null,
  size: CloseButton.Size.LARGE,
  filled: false,
  'aria-label': undefined,
};

export default CloseButton;
