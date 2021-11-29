import { render, screen } from '@testing-library/react';

import { DirectionProvider } from '..';
import { Button } from '../..';
import { Direction } from '../../common/direction';
import { Theme } from '../../common/theme';

import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  it('appends theme to children', () => {
    render(
      <ThemeProvider theme={Theme.LIGHT}>
        <div>children 1</div>
        <div>children 2</div>
      </ThemeProvider>,
    );

    expect(screen.getByText('children 1')).toHaveClass('np-theme-light');
    expect(screen.getByText('children 2')).toHaveClass('np-theme-light');
  });

  it('concatenate className with children', () => {
    render(
      <ThemeProvider theme={Theme.LIGHT}>
        <div className="other class names">children</div>
      </ThemeProvider>,
    );

    expect(screen.getByText('children')).toHaveClass('np-theme-light other class names');
  });

  it('can nest theme providers', () => {
    render(
      <ThemeProvider theme={Theme.LIGHT}>
        <div>light</div>
        <ThemeProvider theme={Theme.NAVY}>
          <div>navy</div>
          <ThemeProvider theme={Theme.DARK}>
            <div>dark</div>
          </ThemeProvider>
        </ThemeProvider>
      </ThemeProvider>,
    );

    expect(screen.getByText('light')).toHaveClass('np-theme-light');
    expect(screen.getByText('navy')).toHaveClass('np-theme-navy');
    expect(screen.getByText('dark')).toHaveClass('np-theme-dark');
  });

  it('can append className to a component', () => {
    render(
      <ThemeProvider theme={Theme.NAVY}>
        <Button
          data-testid="button"
          onClick={() => {
            /** */
          }}
        >
          Click me!
        </Button>
      </ThemeProvider>,
    );

    expect(screen.getByTestId('button')).toHaveClass('np-theme-navy');
  });

  it('displays console warning when children is not a valid React element', () => {
    jest.spyOn(console, 'warn').mockImplementation(() => jest.fn());

    render(
      <ThemeProvider theme={Theme.NAVY}>
        <DirectionProvider direction={Direction.LTR}>
          <Button
            data-testid="button"
            onClick={() => {
              /** */
            }}
          >
            Click me!
          </Button>
        </DirectionProvider>
        ,
      </ThemeProvider>,
    );

    expect(screen.getByTestId('button')).not.toHaveClass('np-theme-navy');
    // eslint-disable-next-line no-console
    expect(console.warn).toHaveBeenCalledWith(
      '[ThemeProvider] Trying to inject `className` to an invalid React element, this will be skipped!',
    );
  });
});
