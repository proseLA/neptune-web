import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import { Size, Status } from '../common';

import ProcessIndicator from './ProcessIndicator';

export default {
  component: ProcessIndicator,
  title: 'ProcessIndicator',
};

export const Basic = () => {
  const size = select('size', Object.values(Size), Size.EXTRA_SMALL);
  const status = select('status', Object.values(Status), Status.PROCESSING);

  return <ProcessIndicator status={status} size={size} onAnimationCompleted={(s) => action(s)} />;
};
