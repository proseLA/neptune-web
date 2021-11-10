import { select, text } from '@storybook/addon-knobs';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';
import { useState } from 'react';

import Card from '.';

export default {
  component: Card,
  title: 'Card',
};

const Template = (props) => {
  const elementType = select('elementType', ['div', 'li'], 'div');
  const title = text('title', 'A card');
  const details = text('details', 'Some details about this card');
  const content = text('content', 'Lorem ipsum dolor sit amet.');

  return (
    <Card
      as={elementType}
      title={title}
      details={details}
      isExpanded={props.isExpanded}
      icon={props.icon}
      onClick={props.onClick}
    >
      {content}
    </Card>
  );
};

export const Basic = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return <Template isExpanded={isExpanded} onClick={setIsExpanded} />;
};

export const Multiple = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(0);

  const handleOnCardClick = (index) => {
    if (expandedCardIndex === index) {
      return setExpandedCardIndex(null);
    }
    setExpandedCardIndex(index);
  };

  return (
    <>
      <Template
        icon={<FastFlagIcon />}
        isExpanded={expandedCardIndex === 0}
        onClick={() => handleOnCardClick(0)}
      />
      <Template
        icon={<FastFlagIcon />}
        isExpanded={expandedCardIndex === 1}
        onClick={() => handleOnCardClick(1)}
      />
      <Template isExpanded={expandedCardIndex === 2} onClick={() => handleOnCardClick(2)} />
    </>
  );
};
