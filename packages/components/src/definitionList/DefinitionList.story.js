import { select, text, boolean } from '@storybook/addon-knobs';

import { Layout } from '../common';

import DefinitionList from './DefinitionList';

export default {
  component: DefinitionList,
  title: 'DefinitionList',
};

export const Basic = () => {
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
