import { render, screen } from '@testing-library/react';

import { Theme } from '../..';
import { ThemeProvider } from '../../../provider';

import { withTheme } from './withTheme';

type ComponentProps = {
  className?: string;
};

const Component = withTheme<ComponentProps>(({ theme, className }) => (
  <div className={className} data-testid="themed" data-theme={theme} />
));

describe('withTheme', () => {
  it('returns default light theme', () => {
    render(<Component className="test-class" />);

    const component = screen.getByTestId('themed');

    expect(component).toHaveClass('test-class');
    expect(component).toHaveAttribute('data-theme', Theme.LIGHT);
  });

  it('returns provided theme', () => {
    render(
      <ThemeProvider theme={Theme.NAVY}>
        <Component />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('themed')).toHaveAttribute('data-theme', Theme.NAVY);
  });

  it('returns closest theme provider value', () => {
    render(
      <ThemeProvider theme={Theme.NAVY}>
        <ThemeProvider theme={Theme.DARK}>
          <Component />
        </ThemeProvider>
      </ThemeProvider>,
    );

    expect(screen.getByTestId('themed')).toHaveAttribute('data-theme', Theme.DARK);
  });
});
