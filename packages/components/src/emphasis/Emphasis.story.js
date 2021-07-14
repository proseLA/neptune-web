import React from 'react';
import { text } from '@storybook/addon-knobs';
import Emphasis from './Emphasis';

export default {
  component: Emphasis,
  title: 'Emphasis',
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const basic = () => {
  return (
    <Emphasis
      text={text(
        'text',
        '' +
          '<important>important</important>\\n' +
          '<positive>positive</positive>\\n' +
          '<negative>negative</negative>\\n' +
          '<warning>warning</warning>\\n' +
          '<script>alert("nice try!")</script>',
      )}
    />
  );
};
