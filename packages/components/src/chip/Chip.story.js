import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Chip from './Chip';

export default {
  component: Chip,
  title: 'Chip',
};

export const basic = () => {
  const label = text('label', `A beautiful chip`);
  const hasError = boolean('hasError', false);

  return (
    <div
      style={{ border: '1px solid gray', maxWidth: '400px' }}
      className="d-inline-flex flex-wrap"
    >
      <Chip label={label} hasError={hasError} onRemove={action('I have been removed!!!')} />
      <Chip label={label} hasError={hasError} onRemove={action('I have been removed!!!')} />
      <Chip label={label} hasError={hasError} onRemove={action('I have been removed!!!')} />
    </div>
  );
};
