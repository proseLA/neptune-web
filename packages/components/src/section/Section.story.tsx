import { FastFlag as FastFlagIcon } from '@transferwise/icons';
import { useState } from 'react';

import Accordion from '../accordion';
import Card from '../card';
import Header from '../header';
import NavigationOption from '../navigationOption';

import Section from './Section';

export default {
  component: Section,
  title: 'Section',
};

export const Basic = () => {
  return (
    <>
      <Section>Section 1 content</Section>
      <Section>Section 2 content</Section>
    </>
  );
};

export const WithHeader = () => {
  return (
    <>
      <Section>
        <Header title="Section 1 title" />
        Section 1 content
      </Section>
      <Section>
        <Header title="Section 2 title" />
        Section 2 content
      </Section>
    </>
  );
};

export const withAccordion = () => {
  const items = [
    {
      id: 'Item 1',
      title: 'If you have a deadline, set up your transfer early',
      content:
        'Most large transfers take around 2–4 working days from start to finish. So set up your transfer early if you have a deadline coming up.',
      icon: <FastFlagIcon size={24} />,
    },
    {
      id: 'Item 2',
      title: 'Have documents on hand to speed things up',
      content:
        'When you set up your transfer, we might ask for documents that show where your money comes from. Documents you might need (opens in a new tab)',
      icon: <FastFlagIcon size={24} />,
    },
    {
      id: 'Item 3',
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque velit nec ex rutrum efficitur sit amet at enim. Nam a neque magna. Nullam est urna, dignissim nec erat id, euismod aliquet nulla.',
      icon: <FastFlagIcon size={24} />,
    },
  ];
  return (
    <Section>
      <Header title="Section with accordion" />
      <Accordion items={items} indexOpen={0} />
    </Section>
  );
};

export const WithCards = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState<null | number>(null);

  const handleOnCardClick = (index: number) => {
    if (expandedCardIndex === index) {
      return setExpandedCardIndex(null);
    }
    setExpandedCardIndex(index);
  };

  return (
    <Section>
      <Header title="Section with cards" />
      {/* @ts-expect-error TODO: remove once Card is migrated to TypeScript */}
      <Card
        title="What's in the box?!"
        details="Click me to reveal."
        icon={<FastFlagIcon size={24} />}
        isExpanded={expandedCardIndex === 0}
        onClick={() => handleOnCardClick(0)}
      >
        <div>Hello there!</div>
      </Card>
      {/* @ts-expect-error TODO: remove once Card is migrated to TypeScript */}
      <Card
        title="What's in the box?!"
        details="Click me to reveal."
        icon={<FastFlagIcon size={24} />}
        isExpanded={expandedCardIndex === 1}
        onClick={() => handleOnCardClick(1)}
      >
        <div>Hello there!</div>
      </Card>
    </Section>
  );
};

export const WithNavigationOptions = () => {
  return (
    <Section>
      <Header title="Section with options" />
      <NavigationOption title="Option 1" onClick={() => alert('Option 1')} />
      <NavigationOption title="Option 2" onClick={() => alert('Option 2')} />
    </Section>
  );
};
