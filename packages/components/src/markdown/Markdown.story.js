import { text } from '@storybook/addon-knobs';

import Markdown from './Markdown';

export default {
  component: Markdown,
  title: 'Markdown',
};

export const Basic = () => {
  const markdown = text(
    'markdown',
    `# Heading
  1. item one
  2. item two
     - sublist
     - sublist`,
  );
  return <Markdown className="classname1">{markdown}</Markdown>;
};
