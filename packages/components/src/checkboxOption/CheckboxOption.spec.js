/* eslint-disable jest/expect-expect */
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../test-utils';

import CheckboxOption from '.';

describe('Checkbox option', () => {
  let container;
  let rerender;

  const defaultProps = {
    id: 'id',
    name: 'name',
    title: 'Title',
    onChange: jest.fn(),
  };

  describe('by default', () => {
    beforeEach(() => {
      ({ container } = render(<CheckboxOption {...defaultProps} />));
    });
    it('is not checked', () => {
      expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
    });

    it('is not disabled', () => {
      expect(screen.getByRole('checkbox', { disabled: false })).toBeInTheDocument();
    });
  });

  it('is checked when checked prop is true', () => {
    render(<CheckboxOption {...defaultProps} checked />);
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<CheckboxOption {...defaultProps} disabled />);
    expect(screen.getByRole('checkbox', { disabled: true })).toBeInTheDocument();
  });

  describe('onChange', () => {
    it('is called with new checked value when the option is clicked', () => {
      const onChange = jest.fn();
      ({ container, rerender } = render(<CheckboxOption {...defaultProps} onChange={onChange} />));

      const label = container.querySelector('label');

      expect(onChange).not.toHaveBeenCalled();
      fireEvent.click(label);
      expect(onChange).toHaveBeenCalledWith(true);

      rerender(<CheckboxOption {...defaultProps} checked onChange={onChange} />);
      fireEvent.click(label);
      expect(onChange).toHaveBeenCalledWith(false);
    });

    it('is not called if the option is disabled', () => {
      const onChange = jest.fn();
      ({ container } = render(<CheckboxOption {...defaultProps} disabled onChange={onChange} />));

      const label = container.querySelector('label');

      expect(onChange).not.toHaveBeenCalled();
      fireEvent.click(label);
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
