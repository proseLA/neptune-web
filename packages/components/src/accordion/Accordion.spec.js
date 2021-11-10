import { Freeze, Emoji, New } from '@transferwise/icons';

import { render, screen, userEvent } from '../test-utils';

import Accordion from './Accordion';

describe('Accordion', () => {
  const items = [
    {
      title: 'Item 1 title',
      content: 'Item 1 content',
      icon: <Freeze />,
    },
    {
      title: 'Item 2 title',
      content: 'Item 2 content',
      icon: <New />,
    },
    {
      title: 'Item 3 title',
      content: 'Item 3 content',
      icon: <Emoji />,
    },
  ];

  describe('defaults', () => {
    it('renders an empty list when no items are passed', () => {
      expect(render(<Accordion items={[]} />).container).toMatchSnapshot();
    });
  });

  describe('items', () => {
    it('renders a list with all items closed if items passed', () => {
      render(<Accordion items={items} />);

      items.forEach((item) => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
        expect(screen.queryByText(item.content)).not.toBeInTheDocument();
      });
    });

    it('renders a list with a specified item open if indexOpen is set', () => {
      render(<Accordion items={items} indexOpen={1} />);

      expect(screen.queryByText(items[0].content)).not.toBeInTheDocument();
      expect(screen.getByText(items[1].content)).toBeInTheDocument();
      expect(screen.queryByText(items[2].content)).not.toBeInTheDocument();
    });
  });

  describe('open and close', () => {
    it('can open and close an item when clicked', () => {
      const item = items[0];
      render(<Accordion items={items} />);

      userEvent.click(screen.getByRole('button', { name: item.title }));
      expect(screen.getByText(item.content)).toBeInTheDocument();

      userEvent.click(screen.getByRole('button', { name: item.title }));
      expect(screen.queryByText(item.content)).not.toBeInTheDocument();
    });
  });

  describe('onClick', () => {
    it('calls onClick when an item is clicked', () => {
      const onClick = jest.fn();

      render(<Accordion items={items} onClick={onClick} />);

      userEvent.click(screen.getAllByRole('button')[0]);

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledWith(0);
    });
  });
});
