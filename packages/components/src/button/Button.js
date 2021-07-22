import PropTypes from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';

import { Size, ControlType, Priority } from '../common';
import { priorityClassMap } from './classMap';

const Button = (props) => {
  const {
    block,
    children,
    className,
    disabled,
    htmlType,
    loading,
    priority,
    size,
    type,
    ...rest
  } = props;

  const classes = classNames(
    `btn btn-${size}`,
    `np-btn np-btn-${size}`,
    {
      'btn-loading': loading,
      'btn-block np-btn-block': block,
    },
    `btn-${type}`,
    priorityClassMap[
      // Only ControlType.ACCENT supports tertiary styles
      priority === Priority.TERTIARY && type !== ControlType.ACCENT ? Priority.SECONDARY : priority
    ],
    className,
  );

  return (
    /* eslint-disable react/button-has-type */
    <button type={htmlType} className={classes} disabled={disabled || loading} {...rest}>
      {children}
      {loading && <span className={classNames('btn-loader', { 'm-l-2': !block })} />}
    </button>
  );
};

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  htmlType: PropTypes.oneOf(['submit', 'reset', 'button']),
  loading: PropTypes.bool,
  // eslint-disable-next-line
  onClick: requiredIf(PropTypes.func, (props) => props.htmlType !== 'submit'),
  priority: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  type: PropTypes.oneOf(['accent', 'positive', 'negative']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Button.defaultProps = {
  block: false,
  className: null,
  disabled: false,
  htmlType: 'button',
  loading: false,
  priority: Priority.PRIMARY,
  size: Size.MEDIUM,
  type: ControlType.ACCENT,
};

export default Button;
