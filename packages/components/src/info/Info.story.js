import { text, select } from '@storybook/addon-knobs';

import Info, { InfoPresentation } from '.';
import { Size } from '../common';

export default {
  component: Info,
  title: 'Info',
};

export const basic = () => {
  const content = text(
    'Content',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  );
  const title = text('Title', 'title');
  const presentation = select('Presentation', [InfoPresentation.POPOVER, InfoPresentation.MODAL]);
  const size = select('Size', [Size.SMALL, Size.LARGE]);

  return (
    <Info
      aria-label="Click here for more details"
      content={content}
      onClick={() => console.log('Info clicked')}
      presentation={presentation}
      size={size}
      title={title}
    />
  );
};
