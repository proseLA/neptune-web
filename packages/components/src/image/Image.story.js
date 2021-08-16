import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';

import Image from './Image';

export default {
  component: Image,
  title: 'Image',
};

export const Basic = () => {
  const source = text('src', 'https://placeholder.pics/svg/300');
  const shrink = boolean('shrink', true);
  const stretch = boolean('stretch', true);
  const loading = select(
    'loading',

    {
      lazy: 'lazy',
      eager: 'eager',
    },
    'lazy',
  );

  return (
    <>
      <Image
        alt="test"
        src={source}
        id="id1"
        loading={loading}
        className="m-t-5"
        shrink={shrink}
        stretch={stretch}
        onLoad={action('load 1')}
        onError={(error) => action(error)}
      />
      <Image
        alt="test"
        src={source}
        id="id2"
        loading={loading}
        className="m-t-5"
        shrink={shrink}
        stretch={stretch}
        onLoad={action('load 2')}
        onError={(error) => action(error)}
      />
      <Image
        alt="test"
        src={source}
        id="id3"
        loading={loading}
        className="m-t-5"
        shrink={shrink}
        stretch={stretch}
        onLoad={action('load 3')}
        onError={(error) => action(error)}
      />
    </>
  );
};
