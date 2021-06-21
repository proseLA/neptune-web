import React, { cloneElement } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../test-utils';

import WithExtendedMethods from '.';

describe('WithExtendedMethods', () => {
  const methodsToOvverride = {
    onFocus: jest.fn(),
    onChange: jest.fn(),
  };
  const originalMethod = jest.fn();
  const originalOnFocus = jest.fn();

  const children = (
    <input type="text" data-testid="input" onChange={originalMethod} onFocus={originalOnFocus} />
  );

  it('when focus original focus gets called', () => {
    render(
      <WithExtendedMethods
        render={(overriddenMethods) =>
          cloneElement(children, {
            className: 'form-control',
            ...overriddenMethods,
          })
        }
        methodsToOvverride={methodsToOvverride}
        {...children.props}
      />,
    );

    const input = screen.getByTestId('input');
    input.focus();

    expect(originalOnFocus).toHaveBeenCalled();
    expect(methodsToOvverride.onFocus).toHaveBeenCalled();
  });
  it('when user types original change gets called', () => {
    render(
      <WithExtendedMethods
        render={(overriddenMethods) =>
          cloneElement(children, {
            className: 'form-control',
            ...overriddenMethods,
          })
        }
        methodsToOvverride={methodsToOvverride}
        {...children.props}
      />,
    );

    const input = screen.getByTestId('input');

    userEvent.type(input, 'username');

    expect(originalMethod).toHaveBeenCalled();
    expect(methodsToOvverride.onChange).toHaveBeenCalled();
  });
});
