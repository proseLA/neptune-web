import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import { Size, Status, Theme } from '../common';

import ProcessIndicator from './ProcessIndicator';

export default {
  component: ProcessIndicator,
  title: 'ProcessIndicator',
};

export const Basic = () => {
  const size = select('size', Object.values(Size), Size.EXTRA_SMALL);
  const status = select('status', Object.values(Status), Status.PROCESSING);
  const theme = select('Theme', [Theme.LIGHT, Theme.DARK], Theme.LIGHT);

  return (
    <div className={theme === 'dark' ? 'bg--dark p-a-3' : 'p-a-3'}>
      <ProcessIndicator
        status={status}
        size={size}
        theme={theme}
        onAnimationCompleted={(s) => action(s)}
      />
    </div>
  );
};
