import { render, screen, fireEvent, userEvent } from '../test-utils';

import Tooltip from '.';

describe('Tooltip', () => {
  const anchor = <span>Hover over me!</span>;

  it('wraps anchor as a children and renders it', () => {
    render(<Tooltip label="Tooltip">{anchor}</Tooltip>);

    expect(screen.getByText('Hover over me!')).toBeInTheDocument();
  });

  it('appears onMouseOver', () => {
    const tooltipLabel = 'Tooltip';
    render(<Tooltip label={tooltipLabel}>{anchor}</Tooltip>);
    expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument();

    userEvent.hover(screen.getByText('Hover over me!'));
    expect(screen.getByText(tooltipLabel)).toBeInTheDocument();
  });

  it('hides onMouseOut', () => {
    const tooltipLabel = 'Tooltip';
    render(<Tooltip label={tooltipLabel}>{anchor}</Tooltip>);

    userEvent.hover(screen.getByText('Hover over me!'));
    expect(screen.getByText(tooltipLabel)).toBeInTheDocument();
    userEvent.unhover(screen.getByText('Hover over me!'));
  });

  it('appears onFocus', () => {
    const tooltipLabel = 'Tooltip';
    render(<Tooltip label={tooltipLabel}>{anchor}</Tooltip>);
    expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument();

    fireEvent.focus(screen.getByText('Hover over me!'));
    expect(screen.getByText(tooltipLabel)).toBeInTheDocument();
  });

  it('hides onBlur', () => {
    const tooltipLabel = 'Tooltip';
    render(<Tooltip label={tooltipLabel}>{anchor}</Tooltip>);

    fireEvent.blur(screen.getByText('Hover over me!'));
    expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument();
  });
});
