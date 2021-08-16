import classNames from 'classnames';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';

import { Size, ControlType, Priority } from '../common';

import { typeClassMap, priorityClassMap } from './classMap';
import { establishNewPriority, establishNewType, logDeprecationNotices } from './legacyUtils';

const Button = (props) => {
  const { block, children, className, disabled, htmlType, loading, priority, size, type, ...rest } =
    props;

  logDeprecationNotices(props);

  const newType = establishNewType(type);
  const newPriority = establishNewPriority(priority, type);

  const classes = classNames(
    `btn btn-${size}`,
    `np-btn np-btn-${size}`,
    {
      'btn-loading': loading,
      'btn-block np-btn-block': block,
    },
    typeClassMap[newType],
    priorityClassMap[newPriority],
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
  onClick: requiredIf(PropTypes.func, (props) => props.htmlType !== 'submit'),
  priority: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** @deprecated `primary`, `pay`, `secondary`, `danger`, `link` */
  type: PropTypes.oneOf([
    'accent',
    'positive',
    'negative',
    'primary',
    'pay',
    'secondary',
    'danger',
    'link',
  ]),
  /** @deprecated `xs` */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
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
