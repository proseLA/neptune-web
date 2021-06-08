import React from 'react';
import { Freeze } from '@transferwise/icons';

import { render, userEvent } from '../../test-utils';
import AccordionItem from './AccordionItem';

import { useDirection } from '../../common/hooks';

jest.mock('../../common/hooks');

describe('AccordionItem', () => {
  const props = {
    title: 'This is title number one',
    content: 'Lauri Ipsum has been the industry standard dummy text ever since the 1500s.',
    open: false,
    onClick: jest.fn(),
  };

  beforeAll(() => {
    useDirection.mockImplementation(() => ({ direction: 'ltr', isRTL: false }));
  });

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
      const { container } = render(<AccordionItem {...props} icon={<Freeze />} />);

      expect(container.querySelector('.tw-icon-freeze')).toBeInTheDocument();
    });

    it('will always render icons at 24px', () => {
      const { container } = render(<AccordionItem {...props} icon={<Freeze size={16} />} />);

      expect(container.querySelector('.tw-icon-freeze svg')).toHaveAttribute('width', '24');
    });
  });

  describe('onClick', () => {
    it('calls onClick when item is clicked', () => {
      const onClick = jest.fn();

      const { getByRole } = render(<AccordionItem {...props} onClick={onClick} />);

      userEvent.click(getByRole('button'));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
  describe('Right-To-Left', () => {
    it('applies correct css classes when isRTL is true', () => {
      useDirection.mockImplementation(() => ({ direction: 'rtl', isRTL: true }));
      const { container } = render(<AccordionItem {...props} />);
      expect(container.querySelector('.media-body')).toHaveClass('text-xs-right');
    });
  });
});
