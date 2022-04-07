import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';

import ActionOption from './ActionOption';

export default {
  component: ActionOption,
  title: 'ActionOption',
};

const Template = () => {
  const title = text('title', 'Action option');
  const content = text('content', 'Normally, the button and icon are vertically centered.');
  const actionText = text('action', 'Action');
  const disabled = boolean('disabled', false);
  const showMediaAtAllSizes = boolean('showMediaAtAllSizes', false);
  const showMediaCircle = boolean('showMediaCircle', false);

  return (
    <ActionOption
      action={actionText}
      media={<FastFlagIcon />}
      title={title}
      content={content}
      complex={false}
      disabled={disabled}
      showMediaAtAllSizes={showMediaAtAllSizes}
      showMediaCircle={showMediaCircle}
      onClick={action('Button Clicked')}
    />
  );
};

export const Basic = () => <Template />;

export const Multiple = () => (
  <>
    <Template />
    <Template />
    <Template />
  </>
);
