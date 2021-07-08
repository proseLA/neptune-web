import React, { cloneElement, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';
import { InfoCircle, CheckCircle, Alert as AlertIcon, AlertCircle } from '@transferwise/icons';
import { Sentiment } from '../common';
import CloseButton from '../common/closeButton';
import withArrow from './withArrow';
import InlineMarkdown from './inlineMarkdown';
import { logActionRequiredIf, deprecated } from '../utilities';
import { useDirection } from '../common/hooks';

const deprecatedTypeMap = {
  [Sentiment.SUCCESS]: Sentiment.POSITIVE,
  [Sentiment.INFO]: Sentiment.NEUTRAL,
  [Sentiment.ERROR]: Sentiment.NEGATIVE,
};

const iconTypeMap = {
  [Sentiment.POSITIVE]: CheckCircle,
  [Sentiment.NEUTRAL]: InfoCircle,
  [Sentiment.WARNING]: AlertIcon,
  [Sentiment.NEGATIVE]: AlertCircle,
};

const Alert = (props) => {
  const [shouldFire, setShouldFire] = useState(false);
  const { arrow, action, children, className, icon, onDismiss, message, type } = props;
  const closeButtonRef = useRef(null);
  const { isRTL } = useDirection();

  if (arrow) {
    const AlertWithArrow = withArrow(Alert, arrow);
    return <AlertWithArrow {...props} />;
  }

  logActionRequired(props);

  const mappedType = deprecatedTypeMap[type] || type;

  const Icon = iconTypeMap[mappedType];
  const iconEl = icon ? cloneElement(icon, { size: 24 }) : <Icon size={24} />;

  const handleTouchStart = () => setShouldFire(true);

  const handleTouchMove = () => setShouldFire(false);

  const handleTouchEnd = (event) => {
    if (shouldFire && action) {
      // Check if current event is triggered from closeButton
      if (closeButtonRef?.current && !closeButtonRef.current.contains(event.target)) {
        if (action?.target === '_blank') {
          window.top.open(action.href);
        } else {
          window.top.location.assign(action.href);
        }
      }
    }
    setShouldFire(false);
  };

  const alert = (
    <div
      role="alert"
      className={classNames('alert d-flex', `alert-${mappedType}`, className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {iconEl}
      <div
        className={classNames('alert__message flex-grow-1', { 'p-l-2': !isRTL, 'p-r-2': isRTL })}
      >
        <div>{children || <InlineMarkdown>{message}</InlineMarkdown>}</div>
        {action && (
          <a
            href={action.href}
            className="m-t-1 d-inline-block"
            aria-label={action['aria-label']}
            target={action.target}
          >
            {action.text}
          </a>
        )}
      </div>
      {onDismiss && (
        <CloseButton
          onClick={onDismiss}
          size={16}
          className={classNames({ 'm-l-2': !isRTL, 'm-r-2': isRTL })}
          ref={closeButtonRef}
        />
      )}
    </div>
  );

  return alert;
};

const deprecatedTypeMapMessage = {
  [Sentiment.SUCCESS]: 'Sentiment.POSITIVE',
  [Sentiment.INFO]: 'Sentiment.NEUTRAL',
  [Sentiment.ERROR]: 'Sentiment.NEGATIVE',
};

const deprecatedTypes = Object.keys(deprecatedTypeMap);

function logActionRequired({ size, type }) {
  logActionRequiredIf(
    'Alert no longer supports any possible variations in size. Please remove the `size` prop.',
    !!size,
  );
  logActionRequiredIf(
    `Alert has deprecated the ${type} value for the \`type\` prop. Please update to ${deprecatedTypeMapMessage[type]}.`,
    deprecatedTypes.includes(type),
  );
}

Alert.propTypes = {
  /** An optional call to action to sit under the main body of the alert. If your label is short, use aria-label to provide more context */
  action: PropTypes.shape({
    'aria-label': PropTypes.string,
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    text: PropTypes.node.isRequired,
  }),
  className: PropTypes.string,
  /** An optional icon. If not provided, we will default the icon to something appropriate for the type */
  icon: PropTypes.element,
  /** The main body of the alert. Accepts plain text and bold words specified with **double stars** */
  message: requiredIf(PropTypes.node, ({ children }) => !children),
  /** The presence of the onDismiss handler will trigger the visibility of the close button */
  onDismiss: PropTypes.func,
  /** The type dictates which icon and colour will be used */
  type: PropTypes.oneOf(['negative', 'neutral', 'positive', 'warning', 'info', 'error', 'success']),

  /** @deprecated no arrow for `Alert` component anymore, consider to use [`InlineAlert`](https://transferwise.github.io/neptune-web/components/alerts/InlineAlert) component */
  arrow: deprecated(
    PropTypes.oneOf(['up-left', 'up-center', 'up-right', 'down-left', 'down-center', 'down-right']),
    { component: 'Alert', expiryDate: new Date('03-01-2021') },
  ),
  /** @deprecated use `message` property instead */
  children: deprecated(
    requiredIf(PropTypes.node, ({ message }) => !message),
    {
      component: 'Alert',
      message:
        'You should now use the `message` prop. Be aware `message` only accepts plain text or text with **bold** markdown.',
      expiryDate: new Date('03-01-2021'),
    },
  ),
  /** @deprecated use `onDismiss` instead */
  dismissible: deprecated(PropTypes.bool, {
    component: 'Alert',
    message: 'The Alert will now be considered dismissible if an `onDismiss` hander is present.',
    expiryDate: new Date('03-01-2021'),
  }),
};

Alert.defaultProps = {
  action: undefined,
  arrow: undefined,
  className: undefined,
  dismissible: undefined,
  icon: undefined,
  type: Sentiment.NEUTRAL,
};

export default Alert;
