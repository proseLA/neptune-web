import { render, screen, fireEvent } from '@testing-library/react';
import { FastFlag } from '@transferwise/icons';

import SwitchOption from '.';

describe('SwitchOption', () => {
  it('renders the option with the provided content', () => {
    render(
      <SwitchOption
        media={<FastFlag data-testid="fast-flag" />}
        id="id"
        title="title"
        aria-label="title"
        content="content"
        checked={false}
        onChange={() => {}}
      />,
    );

    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
    expect(screen.getByTestId('fast-flag')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')[0]).toBeInTheDocument();
  });

  it('checks the switch when the user interacts with it', () => {
    // Uses first in array to bypass the fact theres a hidden readonly input
    const getSwitch = () => screen.getAllByRole('checkbox')[0];

    const mockOnChange = jest.fn();

    const { rerender } = render(
      <SwitchOption
        id="id"
        title="title"
        aria-label="title"
        content="content"
        checked={false}
        onChange={mockOnChange}
      />,
    );

    expect(getSwitch()).toBeInTheDocument();
    expect(getSwitch()).not.toBeChecked();

    expect(mockOnChange).not.toHaveBeenCalled();

    fireEvent.click(getSwitch());

    expect(mockOnChange).toHaveBeenCalledWith(true);
    expect(mockOnChange).toHaveBeenCalledTimes(1);

    rerender(
      <SwitchOption
        id="id"
        title="title"
        aria-label="title"
        content="content"
        checked
        onChange={mockOnChange}
      />,
    );

    expect(getSwitch()).toBeChecked();

    fireEvent.keyDown(getSwitch(), {
      keyCode: 32,
      code: 'Space',
    });

    expect(mockOnChange).toHaveBeenLastCalledWith(false);
    expect(mockOnChange).toHaveBeenCalledTimes(2);

    rerender(
      <SwitchOption
        id="id"
        title="title"
        aria-label="title"
        content="content"
        checked={false}
        onChange={mockOnChange}
      />,
    );

    expect(getSwitch()).not.toBeChecked();
  });

  it('fires the onClick handler once regardless of where you click on the option', () => {
    const mockOnChange = jest.fn();

    render(
      <SwitchOption
        id="id"
        title="title"
        aria-label="title"
        content="content"
        onChange={mockOnChange}
      />,
    );

    expect(mockOnChange).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.queryByText('title'));

    expect(mockOnChange).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.queryByText('content'));

    expect(mockOnChange).toHaveBeenCalledTimes(2);

    fireEvent.click(screen.getAllByRole('checkbox')[0]);

    expect(mockOnChange).toHaveBeenCalledTimes(3);
  });
});
