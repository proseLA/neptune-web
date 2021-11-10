<>
  <Header
    as="h3"
    title="Header title"
    action={{
      'aria-label': 'Magic',
      text: 'Click me!',
      onClick: () => {
        alert('Success!');
      },
    }}
  />
  <Header
    as="h3"
    title="Header action as a link"
    action={{
      text: 'I am a link',
      href: 'https://wise.com',
      target: '_blank',
    }}
  />
</>;
