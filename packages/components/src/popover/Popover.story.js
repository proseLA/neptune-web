import React from 'react';
import { select } from '@storybook/addon-knobs';

import Popover from './Popover';

import Button from '../button';

import { Position, Type } from '../common';

export default {
  component: Popover,
  title: 'Popover',
};

export const basic = () => {
  const preferredPlacement = select(
    'preferredPlacement',
    [
      Position.TOP,
      Position.RIGHT,
      Position.BOTTOM,
      Position.LEFT,
      Position.LEFT_TOP,
      Position.RIGHT_TOP,
      Position.BOTTOM_RIGHT,
      Position.BOTTOM_LEFT,
    ],
    Position.TOP,
  );

  return (
    <Popover
      content="You’ll get this rate as long as we receive your 10 EUR within the next 51 hours."
      preferredPlacement={preferredPlacement}
      title="Guaranteed rate"
    >
      <Button type={Type.PRIMARY} onClick={() => console.log(`I'm also triggered`)}>
        Click here to Open Popover!
      </Button>
    </Popover>
  );
};
