import { Freeze } from '@transferwise/icons';

import { render, userEvent, screen } from '../../test-utils';

import AccordionItem from './AccordionItem';

jest.mock('../../common/hooks');

describe('AccordionItem', () => {
  const props = {
    title: 'This is title number one',
    content: 'Lauri Ipsum has been the industry standard dummy text ever since the 1500s.',
    open: false,
    onClick: jest.fn(),
  };

  describe('open / close', () => {
    it('renders an item closed', () => {
      expect(render(<AccordionItem {...props} />).container).toMatchSnapshot();
    });

    it('renders an item open', () => {
      expect(render(<AccordionItem {...props} open />).container).toMatchSnapshot();
    });
  });

  describe('icons', () => {
    it('renders the icon if passed', () => {
      render(<AccordionItem {...props} icon={<span>mock icon</span>} />);

      expect(screen.getByText('mock icon')).toBeInTheDocument();
    });

    it('will always render icons at 24px', () => {
      const { container } = render(<AccordionItem {...props} icon={<Freeze size={16} />} />);

      // eslint-disable-next-line testing-library/no-container
      expect(container.querySelector('.tw-icon-freeze svg')).toHaveAttribute('width', '24');
    });
  });

  describe('onClick', () => {
    it('calls onClick when item is clicked', () => {
      const onClick = jest.fn();

      render(<AccordionItem {...props} onClick={onClick} />);

      userEvent.click(screen.getByRole('button'));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
