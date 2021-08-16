import { select } from '@storybook/addon-knobs';
import { useState } from 'react';

import { Button, Modal } from '..';
import { Position } from '../common';

import Drawer from './Drawer';

export default {
  component: Drawer,
  title: 'Drawer',
};

export const Basic = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const position = select('position', Object.values(Position), Position.RIGHT);

  const handleDrawerClose = (event) => {
    console.log('drawer close');
    event.stopPropagation();
    setOpenDrawer(false);
  };

  const handleModalClose = (event) => {
    console.log('modal close');
    event.stopPropagation();
    setOpenModal(false);
  };

  return (
    <>
      <Button disabled={false} block={false} onClick={() => setOpenDrawer(true)}>
        Open drawer
      </Button>
      <Drawer
        open={openDrawer}
        position={position}
        headerTitle="A title"
        onClose={handleDrawerClose}
      >
        <input type="text" className="form-control" />
        <p className="m-t-3">Cat ipsum dolor sit amet, purr when being pet.</p>
        <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
        <Modal
          body={
            <>
              <p className="m-t-4">
                I am baby actually poke kickstarter, street art jean shorts bespoke chambray
                activated charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo,
                cliche lyft marfa ethical waistcoat poke jean shorts. Scenester readymade selvage
                disrupt pok pok. La croix stumptown try-hard chartreuse. I am baby actually poke
                kickstarter, street art jean shorts bespoke chambray activated charcoal ramps marfa
                shoreditch tumeric, I am baby actually poke kickstarter, street art jean shorts
                bespoke chambray activated charcoal ramps marfa shoreditch tumeric tumblr. Mixtape
                cred palo santo, cliche lyft marfa ethical waistcoat poke jean shorts. Scenester
                readymade selvage disrupt pok pok.
              </p>
            </>
          }
          open={openModal}
          title="Title"
          closeOnClick
          onClose={handleModalClose}
        />
      </Drawer>
    </>
  );
};
