import Header from './Header';

export default {
  component: Header,
  title: 'Header',
};

export const Basic = () => {
  return <Header title="Header title" />;
};

export const WithAction = () => {
  return (
    <Header
      title="Header title"
      action={{
        'aria-label': 'Magic',
        text: 'Click me!',
        onClick: () => alert('Action!'),
      }}
    />
  );
};

export const WithActionAsLink = () => {
  return (
    <Header
      title="Header title"
      action={{
        text: 'This is a link',
        href: 'https://wise.com',
        target: '_blank',
      }}
    />
  );
};
