/* eslint-disable react/forbid-dom-props */
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import { Button, Nudge } from '..';

import DropFade from './DropFade';

export default {
  title: 'DropFade',
  component: DropFade,
};

export const Basic = () => {
  const show = boolean('show', false);
  return (
    <div style={{ margin: '0 auto', maxWidth: 400 }}>
      <DropFade show={show}>
        {/* The top level child element must accept a ref */}
        <div>
          <Nudge
            media={
              <img
                alt=""
                style={{ width: 44, height: 44 }}
                src="https://wise.com/public-resources/assets/public-navigation/saving.svg"
              />
            }
            title="Did you know it's cool to be Wise?"
            link="Get Wise"
            href="https://wise.com"
            onClick={action('action clicked')}
            onDismiss={action('dismissed')}
          />
        </div>
      </DropFade>
      <Button className="m-t-3" block>
        Some other content
      </Button>
    </div>
  );
};
