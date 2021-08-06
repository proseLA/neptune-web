import { FastFlag } from '@transferwise/icons';
import { render, screen, fireEvent } from '../test-utils';

import ActionOption from '.';

describe('ActionOption', () => {
  it('renders the option with the provided content', () => {
    render(
      <ActionOption
        media={<FastFlag data-testid="fast-flag" />}
        title="title"
        content="content"
        onClick={() => {}}
        action="action"
      />,
    );

    expect(
      screen.getByRole('button', {
        name: 'title, action',
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText('title')).toBeInTheDocument();
    expect(screen.queryByText('content')).toBeInTheDocument();
    expect(screen.queryByTestId('fast-flag')).toBeInTheDocument();
  });

  it('fires the onClick handler when you click on the action', () => {
    const mockOnClick = jest.fn();

    render(<ActionOption title="title" content="content" action="action" onClick={mockOnClick} />);

    expect(mockOnClick).not.toHaveBeenCalled();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'title, action',
      }),
    );

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('fires the onClick handler once regardless of where you click on the option', () => {
    const mockOnClick = jest.fn();

    render(<ActionOption title="title" content="content" action="action" onClick={mockOnClick} />);

    expect(mockOnClick).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.queryByText('title'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.queryByText('content'));

    expect(mockOnClick).toHaveBeenCalledTimes(2);

    fireEvent.click(
      screen.getByRole('button', {
        name: 'title, action',
      }),
    );

    expect(mockOnClick).toHaveBeenCalledTimes(3);
  });
});
