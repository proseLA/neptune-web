import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import Loader from './Loader';
import { Size } from '../common';

export default {
  component: Loader,
  title: 'Loader',
};

export const basic = () => {
  const size = select('size', Object.values(Size), Size.EXTRA_SMALL);
  const small = boolean('small', false);

  return <Loader small={small} size={size} />;
};
