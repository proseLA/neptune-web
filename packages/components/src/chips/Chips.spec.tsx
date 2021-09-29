import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '../test-utils';

import Chips from '.';

const choiceProps = {
  chips: [
    {
      value: 'accounting',
      label: 'Accounting',
    },
    {
      value: 'payroll',
      label: 'Payroll',
    },
    {
      value: 'reporting',
      label: 'Reporting',
    },
    {
      value: 'payments',
      label: 'Payments',
    },
  ],
  selected: 'payroll',
  onChange: jest.fn(),
  'aria-label': 'Please select a category',
};

const filterProps = {
  chips: [
    {
      value: 'accounting',
      label: 'Accounting',
    },
    {
      value: 'payroll',
      label: 'Payroll',
    },
    {
      value: 'reporting',
      label: 'Reporting',
    },
    {
      value: 'payments',
      label: 'Payments',
    },
  ],
  onChange: jest.fn(),
  'aria-label': 'Filter by categories',
  selected: ['payments'],
  multiple: true,
};

describe('Chips', () => {
  describe('Choice Chips', () => {
    it(`renders as expected`, () => {
      expect(render(<Chips {...choiceProps} />).container).toMatchSnapshot();
    });

    it(`will pass previous state, updated state, and selected value on select`, () => {
      render(<Chips {...choiceProps} />);
      const accounting = screen.getByText('Accounting');
      fireEvent.click(accounting);
      expect(choiceProps.onChange).toHaveBeenCalledWith({
        selectedValue: 'accounting',
        isEnabled: true,
      });
    });
  });

  describe('Filter Chips', () => {
    it(`renders as expected`, () => {
      expect(render(<Chips {...filterProps} />).container).toMatchSnapshot();
    });

    it(`will pass previous state, updated state, and selected value on select`, () => {
      render(<Chips {...filterProps} />);
      const accounting = screen.getByText('Accounting');
      fireEvent.click(accounting);
      expect(filterProps.onChange).toHaveBeenCalledWith({
        selectedValue: 'accounting',
        isEnabled: true,
      });
    });

    it(`will pass previous state, updated state, and cleared value on clear`, () => {
      render(<Chips {...filterProps} />);
      fireEvent.click(screen.getAllByRole('button')[3]);
      expect(filterProps.onChange).toHaveBeenCalledWith({
        selectedValue: 'payments',
        isEnabled: false,
      });
    });
  });
});
