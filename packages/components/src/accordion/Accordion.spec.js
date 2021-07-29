import { Freeze, Emoji, New } from '@transferwise/icons';

import { render, screen, userEvent } from '../test-utils';
import Accordion from './Accordion';

describe('Accordion', () => {
  const items = [
    {
      title: 'This is title number one',
      content: 'Lauri Ipsum has been the industry standard dummy text ever since the 1500s.',
      icon: <Freeze />,
    },
    {
      title: 'This is title two',
      content: 'Lauri Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: <New />,
    },
    {
      title: 'This is title three',
      content: 'Lauri Ipsum has been the industry standard dummy text ever since the 1500s.',
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
      const openItem = screen.queryByRole('expanded');
      expect(openItem).not.toBeInTheDocument();
    });

    it('renders a list with a specified item open if indexOpen is set', () => {
      const { container } = render(<Accordion items={items} indexOpen={1} />);
      const openItems = container.querySelectorAll('.tw-accordion-item[aria-expanded="true"]');
      expect(openItems.length).toBe(1);

      const openItem = container.querySelector(
        '.tw-accordion-item[aria-expanded="true"] .title .h5',
      );
      expect(openItem.innerHTML).toBe(items[1].title);
    });
  });

  describe('open and close', () => {
    it('opens an item when clicked', () => {
      const { getAllByRole, container } = render(<Accordion items={items} />);
      userEvent.click(getAllByRole('button')[0]);

      expect(container).toMatchSnapshot();
      expect(container.querySelectorAll('.closed')).toHaveLength(2);
    });
  });

  describe('onClick', () => {
    it('calls onClick when an item is clicked', () => {
      const onClick = jest.fn();

      const { getAllByRole } = render(<Accordion items={items} onClick={onClick} />);

      userEvent.click(getAllByRole('button')[0]);

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledWith(0);
    });
  });
});
