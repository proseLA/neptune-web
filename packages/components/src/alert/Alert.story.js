/* eslint-disable no-alert */
import { select, text, boolean } from '@storybook/addon-knobs';
import { Emoji } from '@transferwise/icons';

import Alert from './Alert';
import { Sentiment } from '../common';
import { AlertArrowPosition } from './withArrow';

export default {
  component: Alert,
  title: 'Alert',
};

export const basic = () => {
  const action = text('action', 'Read more');
  const onDismiss = boolean('onDismiss', true);
  const icon = boolean('custom icon', false);
  const type = select(
    'type',
    [Sentiment.POSITIVE, Sentiment.NEGATIVE, Sentiment.NEUTRAL, Sentiment.WARNING],
    Sentiment.POSITIVE,
  );

  const message = text(
    'message',
    'Payments sent to your bank details **today** might not arrive in time for the holidays.',
  );
  return (
    <Alert
      action={action ? { text: action, href: 'https://www.wise.com' } : null}
      icon={icon ? <Emoji /> : null}
      message={message}
      onDismiss={onDismiss ? () => alert('dismissed') : null}
      type={type}
    />
  );
};

export const withArrow = () => {
  const arrow = select('Arrow', Object.values(AlertArrowPosition), AlertArrowPosition.TOP_LEFT);
  const action = text('action', 'Read more');
  const onDismiss = boolean('onDismiss', true);
  const icon = boolean('custom icon', false);
  const type = select(
    'type',
    [Sentiment.POSITIVE, Sentiment.NEGATIVE, Sentiment.NEUTRAL, Sentiment.WARNING],
    Sentiment.POSITIVE,
  );

  const message = text(
    'message',
    'Payments sent to your bank details **today** might not arrive in time for the holidays.',
  );
  return (
    <Alert
      arrow={arrow}
      action={action ? { text: action, href: 'https://www.wise.com' } : null}
      icon={icon ? <Emoji /> : null}
      message={message}
      onDismiss={onDismiss ? () => alert('dismissed') : null}
      type={type}
    />
  );
};
