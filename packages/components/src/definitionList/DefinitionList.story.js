import React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import DefinitionList from './DefinitionList';
import { Layout } from '../common';

export default {
  component: DefinitionList,
  title: 'DefinitionList',
};

export const basic = () => {
  const muted = boolean('muted', false);
  const layout = select('layout', Object.values(Layout), Layout.HORIZONTAL_LEFT_ALIGNED);

  const definitions = [
    {
      title: text('title', 'Editable title'),
      value: text('value', 'Editable value'),
      key: 'first',
    },
    {
      title: 'Use wrapper elements to style',
      value: <span className="h3">89.45GBP</span>,
      key: 'second',
    },
    {
      title: 'Long strings will wrap',
      value: 'And values with long words will eventuallybreakontothenextline',
      key: 'third',
    },
  ];

  return <DefinitionList layout={layout} muted={muted} definitions={definitions} />;
};
