/* eslint-disable no-alert */
import { select, text, boolean } from '@storybook/addon-knobs';
import { Emoji } from '@transferwise/icons';

import { Sentiment } from '../common';

import Alert from './Alert';
import { AlertArrowPosition } from './withArrow';

export default {
  component: Alert,
  title: 'Alert',
};

export const Basic = () => {
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
      type={type}
      onDismiss={onDismiss ? () => alert('dismissed') : null}
    />
  );
};

export const WithArrow = () => {
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
      type={type}
      onDismiss={onDismiss ? () => alert('dismissed') : null}
    />
  );
};

export const deprecatedOptions = () => {
  const onDismiss = boolean('onDismiss', true);
  const type = select(
    'type',
    [Sentiment.SUCCESS, Sentiment.ERROR, Sentiment.INFO, Sentiment.WARNING],
    Sentiment.SUCCESS,
  );

  return (
    <Alert type={type} onDismiss={onDismiss ? () => alert('dismissed') : null}>
      Payments sent to your bank details <strong>today</strong> might not arrive in time for the
      holidays.
      <div>
        <a href="http://transferwise.com">Learn more</a>
      </div>
    </Alert>
  );
};

export const bootstrap = () => {
  const message = text(
    'message',
    'Payments sent to your bank details today might not arrive in time for the holidays.',
  );
  return (
    <>
      <h1>Bootstrap (deprecated)</h1>
      <h2>Simple</h2>
      <div className="alert alert-success m-b-2" role="alert">
        <p>This is a paragraph</p>
        <p>This is a paragraph</p>
      </div>
      <div className="alert alert-info m-b-2" role="alert">
        <h5>This is an h5</h5>
        <p>{message}</p>
      </div>
      <div className="alert alert-warning m-b-2" role="alert">
        {message}
      </div>
      <div className="alert alert-danger m-b-2" role="alert">
        {message}
      </div>

      <h2>With arrows</h2>
      <div className="alert alert-success arrow m-b-2" role="alert">
        {message}
      </div>
      <div className="alert alert-info arrow arrow-right m-b-2" role="alert">
        {message}
      </div>
      <div className="alert alert-warning arrow arrow-bottom arrow-center m-b-2" role="alert">
        {message}
      </div>
      <div className="alert alert-danger arrow arrow-bottom arrow-center m-b-2" role="alert">
        {message}
      </div>
    </>
  );
};
