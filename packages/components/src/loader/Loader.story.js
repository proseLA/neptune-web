import { boolean, select } from '@storybook/addon-knobs';

import { Size } from '../common';

import Loader from './Loader';

export default {
  component: Loader,
  title: 'Loader',
};

export const Basic = () => {
  const size = select('size', Object.values(Size), Size.EXTRA_SMALL);
  const small = boolean('small', false);

  return <Loader small={small} size={size} />;
};
