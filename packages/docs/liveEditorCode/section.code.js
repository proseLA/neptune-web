() => {
  const [expandedCardIndex, setExpandedCardIndex] = React.useState(null);

  const items = [
    {
      title: 'If you have a deadline, set up your transfer early',
      content:
        'Most large transfers take around 2–4 working days from start to finish. So set up your transfer early if you have a deadline coming up.',
      id: 'Item 1',
      icon: <FastFlagIcon size={24} />,
    },
    {
      title: 'Have documents on hand to speed things up',
      content:
        'When you set up your transfer, we might ask for documents that show where your money comes from. Documents you might need (opens in a new tab)',
      id: 'Item 2',
      icon: <FastFlagIcon size={24} />,
    },
    {
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque velit nec ex rutrum efficitur sit amet at enim. Nam a neque magna. Nullam est urna, dignissim nec erat id, euismod aliquet nulla.',
      id: 'Item 3',
      icon: <FastFlagIcon size={24} />,
    },
  ];

  const handleOnCardClick = (index) => {
    if (expandedCardIndex === index) {
      return setExpandedCardIndex(null);
    }

    setExpandedCardIndex(index);
  };

  return (
    <>
      <Section>This is a section.</Section>
      <Section>
        <Header title="Section with header" />
        Section content.
      </Section>
      <Section>
        <Header title="Section with accordion" />
        <Accordion items={items} />
      </Section>
      <Section>
        <Header title="Section with navigation options" />
        <NavigationOption title="Option 1" onClick={() => alert('Option 1')} />
        <NavigationOption title="Option 2" onClick={() => alert('Option 2')} />
      </Section>
      <Section>
        <Header title="Section with cards" />
        <Card
          title="What's in the box?!"
          details="Click me to reveal."
          icon={<FastFlagIcon size={24} />}
          isExpanded={expandedCardIndex === 0}
          onClick={() => handleOnCardClick(0)}
        >
          <div>Hello there!</div>
        </Card>
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
    </>
  );
};
