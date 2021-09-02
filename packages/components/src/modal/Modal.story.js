import { select, text } from '@storybook/addon-knobs';
import { useState } from 'react';

import { Button, Modal, DateInput } from '..';
import { Size, Scroll, Position } from '../common';

export default {
  component: Modal,
  title: 'Modal',
};

export const Basic = () => {
  const size = select('size', Object.values(Size), Size.MEDIUM);
  const [open, setOpen] = useState(false);
  const title = text('title', 'title');
  const scroll = select('scroll', Object.values(Scroll), Scroll.CONTENT);
  const position = select('position', Object.values(Position), Position.CENTER);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        body={
          <>
            <DateInput value={new Date()} onChange={console && console.log} />
            <p className="m-t-4">
              I am baby actually poke kickstarter, street art jean shorts bespoke chambray activated
              charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft
              marfa ethical waistcoat poke jean shorts. Scenester readymade selvage disrupt pok pok.
              La croix stumptown try-hard chartreuse. I am baby actually poke kickstarter, street
              art jean shorts bespoke chambray activated charcoal ramps marfa shoreditch tumeric, I
              am baby actually poke kickstarter, street art jean shorts bespoke chambray activated
              charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft
              marfa ethical waistcoat poke jean shorts. Scenester readymade selvage disrupt pok pok.
            </p>
          </>
        }
        open={open}
        scroll={scroll}
        position={position}
        size={size}
        title={title}
        className=""
        footer={
          <Button block onClick={() => alert('clicked')}>
            Action
          </Button>
        }
        onClose={() => setOpen(false)}
      />
    </>
  );
};
