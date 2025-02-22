import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { useState } from 'react';

import { Button, Dimmer } from '..';

export default {
  component: Dimmer,
  title: 'Dimmer',
};

export const Basic = () => {
  const [open, setOpen] = useState(false);

  const fadeContentOnExit = boolean('fadeContentOnExit', false);
  const fadeContentOnEnter = boolean('fadeContentOnEnter', false);

  const handleClose = () => {
    setOpen(false);
    action('closed');
  };

  return (
    <>
      <Button onClick={() => setOpen((isOpen) => !isOpen)}>Toggle dimmer</Button>
      <Dimmer
        open={open}
        fadeContentOnExit={fadeContentOnExit}
        fadeContentOnEnter={fadeContentOnEnter}
        onClose={handleClose}
      />
    </>
  );
};
