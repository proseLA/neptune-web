import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';
import { useState } from 'react';

import RadioOption from './RadioOption';

export default {
  component: RadioOption,
  title: 'RadioOption',
};

const Template = (props) => {
  const showMediaAtAllSizes = boolean('showMediaAtAllSizes', false);
  const title = text('title', 'title');
  const content = text('content', 'content');

  return (
    <RadioOption
      media={<FastFlagIcon />}
      title={title}
      content={content}
      id="id"
      name="radio-option"
      checked={props.checked}
      complex={false}
      disabled={false}
      value="value"
      showMediaAtAllSizes={showMediaAtAllSizes}
      onChange={() => {
        action('checked');
        props.onChange();
      }}
    />
  );
};

export const Basic = () => {
  const checked = boolean('checked', false);

  return <Template checked={checked} />;
};

export const Multiple = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Template checked={selected === 0} onChange={() => setSelected(0)} />
      <Template checked={selected === 1} onChange={() => setSelected(1)} />
      <Template checked={selected === 2} onChange={() => setSelected(2)} />
    </>
  );
};
