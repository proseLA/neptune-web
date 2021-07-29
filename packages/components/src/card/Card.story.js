import { useState } from 'react';
import { select, text } from '@storybook/addon-knobs';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';

import Card from '.';

export default {
  component: Card,
  title: 'Card',
};

export const basic = () => {
  const elementType = select('elementType', ['div', 'li'], 'div');
  const title = text('title', 'A card');
  const details = text('details', 'Some details about this card');
  const content = text('content', 'Lorem ipsum dolor sit amet.');
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      as={elementType}
      title={title}
      details={details}
      isExpanded={isExpanded}
      onClick={setIsExpanded}
      icon={<FastFlagIcon />}
    >
      {content}
    </Card>
  );
};
