import { select, number, text } from '@storybook/addon-knobs';

import Button from '../button';
import { Position } from '../common';

import Tooltip from './Tooltip';

export default {
  component: Tooltip,
  title: 'Tooltip',
};

export const Basic = () => {
  const label = text('label', 'Hey edit me!!!!!!');
  const offset = number('offset', 0);
  const position = select('position', Object.values(Position), Position.BOTTOM);
  return (
    <Tooltip label={label} position={position} offset={offset}>
      <Button onClick={() => {}}>Hover me</Button>
    </Tooltip>
  );
};
