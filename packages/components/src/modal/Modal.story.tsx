import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { ReactNode, useState } from 'react';

import { Button, Modal, DateInput } from '..';
import { Size, Scroll, Position } from '../common';

export default {
  component: Modal,
  title: 'Modal',
};

const Template = (props: { children: ReactNode }) => {
  const size = select('size', [Size.SMALL, Size.MEDIUM, Size.LARGE, Size.EXTRA_LARGE], Size.MEDIUM);
  const [open, setOpen] = useState(false);
  const title = text('title', 'title');
  const className = text('class', '');
  const position = select('position', [Position.TOP, Position.CENTER], Position.CENTER);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        body={
          <>
            <DateInput value={new Date()} onChange={console && console.log} />
            <p className="m-t-4">{props.children}</p>
          </>
        }
        open={open}
        position={position}
        size={size}
        title={title}
        className={className}
        footer={
          <Button block onClick={() => alert('clicked')}>
            Action
          </Button>
        }
        onClose={() => setOpen(false)}
        {...props}
      />
    </>
  );
};

export const Basic = () => (
  <Template>
    I am baby actually poke kickstarter, street art jean shorts bespoke chambray activated charcoal
    ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft marfa ethical
    waistcoat poke jean shorts. Scenester readymade selvage disrupt pok pok. La croix stumptown
    try-hard chartreuse. I am baby actually poke kickstarter, street art jean shorts bespoke
    chambray activated charcoal ramps marfa shoreditch tumeric, I am baby actually poke kickstarter,
    street art jean shorts bespoke chambray activated charcoal ramps marfa shoreditch tumeric
    tumblr. Mixtape cred palo santo, cliche lyft marfa ethical waistcoat poke jean shorts. Scenester
    readymade selvage disrupt pok pok.
  </Template>
);

export const WithLongText = () => (
  <Template>
    I am baby actually poke kickstarter, street art jean shorts bespoke chambray activated charcoal
    ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft marfa ethical
    waistcoat poke jean shorts. Scenester readymade selvage disrupt pok pok. La croix stumptown
    try-hard chartreuse. I am baby actually poke kickstarter, street art jean shorts bespoke
    chambray activated charcoal ramps marfa shoreditch tumeric, I am baby actually poke kickstarter,
    street art jean shorts bespoke chambray activated charcoal ramps marfa shoreditch tumeric
    tumblr. Mixtape cred palo santo, cliche lyft marfa ethical waistcoat poke jean shorts. Scenester
    readymade selvage disrupt pok pok. I am baby actually poke kickstarter, street art jean shorts
    bespoke chambray activated charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo
    santo, cliche lyft marfa ethical waistcoat poke jean shorts. Scenester readymade selvage disrupt
    pok pok. La croix stumptown try-hard chartreuse. I am baby actually poke kickstarter, street art
    jean shorts bespoke chambray activated charcoal ramps marfa shoreditch tumeric, I am baby
    actually poke kickstarter, street art jean shorts bespoke chambray activated charcoal ramps
    marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft marfa ethical waistcoat
    poke jean shorts. Scenester readymade selvage disrupt pok pok. I am baby actually poke
    kickstarter, street art jean shorts bespoke chambray activated charcoal ramps marfa shoreditch
    tumeric tumblr. Mixtape cred palo santo, cliche lyft marfa ethical waistcoat poke jean shorts.
    Scenester readymade selvage disrupt pok pok. La croix stumptown try-hard chartreuse. I am baby
    actually poke kickstarter, street art jean shorts bespoke chambray activated charcoal ramps
    marfa shoreditch tumeric, I am baby actually poke kickstarter, street art jean shorts bespoke
    chambray activated charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo,
    cliche lyft marfa ethical waistcoat poke jean shorts. Scenester readymade selvage disrupt pok
    pok.
  </Template>
);
