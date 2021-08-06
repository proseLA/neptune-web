import { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import Drawer from './Drawer';
import { Button, Modal } from '..';
import { Position } from '../common';

export default {
  component: Drawer,
  title: 'Drawer',
};

export const basic = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const position = select('position', Object.values(Position), Position.RIGHT);

  const handleDrawerClose = (e) => {
    console.log('drawer close');
    e.stopPropagation();
    setOpenDrawer(false);
  };

  const handleModalClose = (e) => {
    console.log('modal close');
    e.stopPropagation();
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
        onClose={handleDrawerClose}
        headerTitle="A title"
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
          onClose={handleModalClose}
          title="Title"
          closeOnClick
        />
      </Drawer>
    </>
  );
};
