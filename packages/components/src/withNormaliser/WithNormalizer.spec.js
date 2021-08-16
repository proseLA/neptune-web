import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Select } from '..';
import { render, screen } from '../test-utils';

import WithNormaliser from '.';

describe('WithNormaliser', () => {
  it('when user types a string it returns string value', () => {
    const onChange = jest.fn();
    render(
      <WithNormaliser>
        <input type="text" data-testid="input" onChange={onChange} />
      </WithNormaliser>,
    );
    const input = screen.getByTestId('input');
    userEvent.type(input, 'username');
    expect(onChange).toHaveBeenCalledWith('username');
  });

  it('when user types a number in a text input it returns a string', () => {
    const onChange = jest.fn();
    render(
      <WithNormaliser>
        <input type="text" data-testid="input" onChange={onChange} />
      </WithNormaliser>,
    );
    const input = screen.getByTestId('input');
    userEvent.type(input, '123');
    expect(onChange).toHaveBeenCalledWith('123');
  });

  it('when user types a number in a numeric input it returns a number', () => {
    const onChange = jest.fn();
    render(
      <WithNormaliser>
        <input type="number" data-testid="input" onChange={onChange} />
      </WithNormaliser>,
    );
    const input = screen.getByTestId('input');
    userEvent.type(input, '123');
    expect(onChange).toHaveBeenCalledWith(123);
  });

  it('when user select an option it returns option value', () => {
    const onChange = jest.fn();
    render(
      <WithNormaliser>
        <Select
          size="md"
          placeholder="placeholder"
          searchPlaceholder="Search placeholder"
          options={[
            { header: 'Basic' },
            { value: 0, label: 'A thing', note: 'with a note' },
            { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
          ]}
          onChange={onChange}
        />
      </WithNormaliser>,
    );

    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('Another thing').parentElement);
    expect(onChange).toHaveBeenCalledWith(1);
  });
});
