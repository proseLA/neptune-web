import { select, text } from '@storybook/addon-knobs';

import Button from '../button';
import { Position } from '../common';

import Tooltip from './Tooltip';

export default {
  component: Tooltip,
  title: 'Tooltip',
};

export const Basic = () => {
  const label = text('label', 'Hey edit me!!!!!!');
  const position = select(
    'position',
    [Position.BOTTOM, Position.TOP, Position.LEFT, Position.RIGHT],
    Position.BOTTOM,
  );
  return (
    <div className="text-xs-center">
      <Tooltip label={label} position={position}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
};
