/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';

import Chevron from '../chevron';
import { Position } from '../common';
import Option from '../common/Option';

const NavigationOption = ({
  as,
  media,
  href,
  target,
  title,
  content,
  onClick,
  complex,
  disabled,
  showMediaAtAllSizes,
  showMediaCircle,
  className,
}) => {
  const sharedProps = {
    as,
    media,
    href,
    target,
    title,
    content,
    complex,
    disabled,
    showMediaAtAllSizes,
    showMediaCircle,
    className: classNames('tw-navigation-option', className),
  };

  if (href) {
    sharedProps.as = 'a';
  }

  return (
    <Option
      {...sharedProps}
      button={<Chevron orientation={Position.RIGHT} disabled={disabled} className="d-block" />}
      onClick={(event) => {
        if (!disabled) {
          onClick(event);
        }
      }}
    />
  );
};

NavigationOption.propTypes = {
  as: PropTypes.string,
  media: PropTypes.node,
  title: PropTypes.node.isRequired,
  content: PropTypes.node,
  onClick: PropTypes.func,
  href: requiredIf(PropTypes.string, (props) => props.as === 'a'),
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  complex: PropTypes.bool,
  disabled: PropTypes.bool,
  showMediaAtAllSizes: PropTypes.bool,
  showMediaCircle: PropTypes.bool,
  className: PropTypes.string,
};

NavigationOption.defaultProps = {
  as: 'button',
  media: null,
  content: null,
  complex: false,
  onClick: null,
  href: undefined,
  target: undefined,
  disabled: false,
  showMediaAtAllSizes: false,
  showMediaCircle: true,
  className: null,
};

export default NavigationOption;
