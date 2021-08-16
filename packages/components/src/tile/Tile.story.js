import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import Avatar from '../avatar';
import { Size } from '../common';

import Tile from '.';

export default {
  component: Tile,
  title: 'Tile',
};

export const Basic = () => {
  const description = text('Description', 'Click here to send money to Mr. Miller');
  const disabled = boolean('Disabled', false);
  const medium = boolean('Medium', true);
  const title = text('Title', 'Hank Miller');

  return (
    <div className="d-flex">
      <Tile
        description={description}
        disabled={disabled}
        href="#href1"
        media={
          <img
            src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
            alt="illustration"
            style={{ width: '100%' }}
          />
        }
        size={medium ? Size.MEDIUM : Size.SMALL}
        title={title}
        onClick={action('onClick')}
      />
      <Tile
        description={description}
        disabled={disabled}
        href="#href1"
        media={
          <Avatar size="md" type="initials">
            HM
          </Avatar>
        }
        size={medium ? Size.MEDIUM : Size.SMALL}
        title={title}
        onClick={action('onClick')}
      />
    </div>
  );
};
