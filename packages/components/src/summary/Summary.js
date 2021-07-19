import classNames from 'classnames';
import React, { cloneElement } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import {
  CheckCircle as CheckCircleIcon,
  PendingCircle as PendingCircleIcon,
} from '@transferwise/icons';
import requiredIf from 'react-required-if';
import { deprecated } from '../utilities';

import Info from '../info';
import { Status, Size } from '../common';

import messages from './Summary.messages';

import { useDirection } from '../common/hooks';

const BadgeIcons = {
  done: CheckCircleIcon,
  pending: PendingCircleIcon,
};

const statusLabels = {
  [Status.NOT_DONE]: 'statusNotDone',
  [Status.DONE]: 'statusDone',
  [Status.PENDING]: 'statusPending',
};

const expiryDate = new Date('03-01-2021');

const Summary = ({
  action,
  as: Element,
  className,
  content,
  description = content,
  help,
  icon,
  illustration,
  info = help,
  status,
  title,
}) => {
  const intl = useIntl();
  const { isRTL } = useDirection();

  let media = illustration;
  if (icon) {
    const iconSize = icon?.props?.size;
    media = iconSize !== 24 ? cloneElement(icon, { size: 24 }) : icon;
  }
  const Badge = status && BadgeIcons[status];

  return (
    <Element
      className={classNames('np-summary d-flex align-items-start', className)}
      aria-label={status && intl.formatMessage(messages[statusLabels[status]])}
    >
      <div className="np-summary__icon">
        {media}
        {Badge && <Badge size={16} filled className={`np-summary-icon__${status}`} />}
      </div>
      <div className={classNames('np-summary__body', { 'm-l-2': !isRTL, 'm-r-2': isRTL })}>
        <div className="np-summary__title d-flex">
          <strong>{title}</strong>
          {info && (
            <Info
              aria-label={info['aria-label']}
              className={classNames({ 'm-l-1': !isRTL, 'm-r-1': isRTL }, 'hidden-xs')}
              content={info.content}
              onClick={info.onClick}
              presentation={info.presentation}
              title={info.title}
            />
          )}
        </div>

        {description && <div className="np-summary__description">{description}</div>}
        {action && (
          <a
            href={action.href}
            target={action.target}
            onClick={action.onClick}
            className="np-summary__action"
            aria-label={action['aria-label']}
          >
            {action.text}
          </a>
        )}
      </div>
      {info && (
        <Info
          aria-label={info['aria-label']}
          className="m-l-2 hidden-sm hidden-md hidden-lg hidden-xl"
          content={info.content}
          onClick={info.onClick}
          presentation={info.presentation}
          size={Size.LARGE}
          title={info.title}
        />
      )}
    </Element>
  );
};

Summary.propTypes = {
  /** Action displayed at the bottom of the Summary */
  action: PropTypes.shape({
    text: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    'aria-label': PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /** Decides which html element should wrap the Summary */
  as: PropTypes.string,
  /** Extra classes applied to Summary */
  className: PropTypes.string,
  /** @deprecated please use description instead */
  content: deprecated(PropTypes.node, {
    component: 'Summary',
    newProp: 'description',
    expiryDate,
  }),
  /** Summary description */
  // eslint-disable-next-line
  description: PropTypes.node,
  /** @deprecated please use info instead */
  help: deprecated(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      title: PropTypes.node,
    }),
    {
      component: 'Summary',
      newProp: 'info',
      expiryDate,
    },
  ),
  /** Infos displayed on help Icon click inside Popover or Modal */
  // eslint-disable-next-line
  info: PropTypes.shape({
    'aria-label': PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    presentation: PropTypes.oneOf(['POPOVER', 'MODAL']),
    title: PropTypes.node,
  }),
  /** @deprecated please use icon instead */
  illustration: deprecated(PropTypes.node, {
    component: 'Summary',
    newProp: 'icon',
    expiryDate,
  }),
  /** Main Summary Icon */
  // eslint-disable-next-line
  icon: requiredIf(PropTypes.node, ({ illustration }) => !illustration),
  /** Decides the badge applied to Icon */
  status: PropTypes.oneOf(['notDone', 'done', 'pending']),
  /** Summary title */
  title: PropTypes.node.isRequired,
};

Summary.defaultProps = {
  action: null,
  as: 'div',
  className: null,
  content: null,
  help: null,
  illustration: null,
  status: null,
};

export default Summary;
