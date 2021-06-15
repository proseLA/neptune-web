import React, { cloneElement } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../test-utils';

import { Select } from '..';
import WithNormaliser from '.';

describe('WithNormaliser', () => {
  const methodsToOvverride = {
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onFocus: jest.fn(),
  };
  let children = <input type="text" data-testid="input" onChange={methodsToOvverride.onChange} />;
  it('when user types a string it returns string value', () => {
    render(
      <WithNormaliser
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
    expect(methodsToOvverride.onChange).toHaveBeenCalledWith('username');
  });

  it('when user types a number in a text input it returns a string', () => {
    children = <input type="number" data-testid="input" onChange={methodsToOvverride.onChange} />;

    render(
      <WithNormaliser
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
    userEvent.type(input, '123');
    expect(methodsToOvverride.onChange).toHaveBeenCalledWith('123');
  });

  it('when user select an option it returns option value', () => {
    children = (
      <Select
        size="md"
        placeholder="placeholder"
        onChange={methodsToOvverride.onChange}
        searchPlaceholder="Search placeholder"
        options={[
          { header: 'Basic' },
          { value: 0, label: 'A thing', note: 'with a note' },
          { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
        ]}
      />
    );

    render(
      <WithNormaliser
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

    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('Another thing').parentElement);
    expect(methodsToOvverride.onChange).toHaveBeenCalledWith(1);
  });
});
