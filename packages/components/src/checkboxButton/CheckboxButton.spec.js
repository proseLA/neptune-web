/* eslint-disable jest/expect-expect */
/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../test-utils';

import CheckboxButton from '.';

describe('Checkbox button', () => {
  describe('by default', () => {
    beforeEach(() => {
      render(<CheckboxButton onChange={jest.fn()} />);
    });
    it('is not checked', () => {
      expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
    });

    it('is not disabled', () => {
      expect(screen.getByRole('checkbox', { disabled: false })).toBeInTheDocument();
    });
  });

  it('applies aria-label if provided', () => {
    render(<CheckboxButton aria-label="An aria label" onChange={jest.fn()} />);
    expect(screen.getByRole('checkbox', { name: 'An aria label' })).toBeInTheDocument();
  });

  it('is checked when checked prop is true', () => {
    render(<CheckboxButton checked onChange={jest.fn()} />);
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<CheckboxButton disabled onChange={jest.fn()} />);
    expect(screen.getByRole('checkbox', { disabled: true })).toBeInTheDocument();
  });

  it('calls onChange handler on change', () => {
    const onChange = jest.fn();
    render(<CheckboxButton onChange={onChange} />);

    const input = screen.getByRole('checkbox');

    expect(onChange).not.toHaveBeenCalled();
    fireEvent(input, new MouseEvent('click', { bubbles: true }));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
