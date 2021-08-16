import { boolean, select, text } from '@storybook/addon-knobs';

import { Position, Size } from '../common';

import Chevron from './Chevron';

export default {
  component: Chevron,
  title: 'Chevron',
};

export const Basic = () => {
  const orientation = select('orientation', Object.values(Position), Position.TOP);
  const size = select('size', Object.values(Size), Size.MEDIUM);
  const disabled = boolean('disabled', false);
  const className = text('className', undefined);
  return <Chevron {...{ orientation, size, disabled, className }} />;
};
