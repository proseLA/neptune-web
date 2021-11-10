import { render, screen, userEvent } from '../test-utils';

import Header from '.';

describe('Header', () => {
  it('can set header title', () => {
    render(<Header title="Header title" />);

    expect(screen.getByText('Header title')).toBeInTheDocument();
  });

  it('can trigger header action', () => {
    const onHeaderActionClick = jest.fn();

    render(
      <Header
        title="Header title"
        action={{
          text: 'Click me!',
          onClick: onHeaderActionClick,
        }}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: 'Click me!' }));

    expect(onHeaderActionClick).toHaveBeenCalledTimes(1);
  });

  it('can set aria-label property for header action', () => {
    const onHeaderActionClick = jest.fn();

    render(
      <Header
        title="Header title"
        action={{
          'aria-label': 'Magic',
          text: 'Click me!',
          onClick: onHeaderActionClick,
        }}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: 'Magic' }));

    expect(onHeaderActionClick).toHaveBeenCalledTimes(1);
  });

  it('renders header action as a link when href is provided', () => {
    render(
      <Header
        title="Header title"
        action={{
          'aria-label': 'Click me!',
          text: 'I am a link',
          href: 'https://wise.com',
        }}
      />,
    );

    const link = screen.getByRole('link', { name: 'Click me!' });

    expect(link).toHaveAttribute('href', 'https://wise.com');
  });

  it('renders header with h5 heading tag by default', () => {
    render(<Header title="Header title" />);

    expect(screen.getByRole('heading', { name: 'Header title', level: 5 })).toBeInTheDocument();
  });

  it('can render header with specific heading tag', () => {
    render(<Header as="h3" title="Header title" />);

    expect(screen.getByRole('heading', { name: 'Header title', level: 3 })).toBeInTheDocument();
  });
});
