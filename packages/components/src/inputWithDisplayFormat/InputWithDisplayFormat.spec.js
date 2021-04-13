import React from 'react';

import { shallow } from 'enzyme';
import { render, cleanup } from '../test-utils';
import { useDirection } from '../common/hooks';

import InputWithDisplayFormat from '.';

jest.mock('../common/hooks/useDirection');

describe('InputWithDisplayFormat', () => {
  const testProps = { displayPattern: '*', onChange: jest.fn() };
  function renderInput(props) {
    return render(<InputWithDisplayFormat displayPattern="*" onChange={jest.fn()} {...props} />);
  }

  beforeEach(() => {
    useDirection.mockImplementation(() => ({ direction: 'rtl', isRTL: true }));
  });

  afterEach(() => {
    cleanup();
  });

  describe('default state', () => {
    it('should render input with value prop', () => {
      const value = 'test';
      const { container } = renderInput({ value });
      const input = container.querySelector('input');

      expect(input).not.toBe(null);
      expect(input.value).toBe(value);
    });

    it('has inputMode prop when specified', () => {
      const inputMode = 'numeric';
      const { container } = renderInput({ inputMode });
      const input = container.querySelector('input');

      expect(input).not.toBe(null);
      expect(input).toHaveAttribute('inputmode');
      expect(input.inputMode).toBe(inputMode);
    });

    it('applies correct rtl css class when isRTL is true', () => {
      const component = shallow(<InputWithDisplayFormat {...testProps} />);
      expect(component.hasClass('align-right')).toEqual(true);
    });

    it('does not apply rtl css class when isRTL is false', () => {
      useDirection.mockImplementation(() => ({ direction: 'ltr', isRTL: false }));
      const component = shallow(<InputWithDisplayFormat {...testProps} />);
      expect(component.hasClass('align-right')).toEqual(false);
    });
  });
});
