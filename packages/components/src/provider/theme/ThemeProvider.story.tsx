import { PropsWithChildren } from 'react';

import { Theme } from '../../common/theme';

import { ThemeProvider } from './ThemeProvider';

export default {
  component: ThemeProvider,
  title: 'ThemeProvider',
};

const TestComp = ({
  children,
  open = false,
  className = '',
}: PropsWithChildren<{ className?: string; open?: boolean }>) => {
  console.log('TestComp#props', open, className);
  return (
    <div className={`lol ${className}`} data-testid="test-comp">
      Test Comp {open}
      {children}
    </div>
  );
};

export const Basic = () => {
  console.log('-- Story --');
  return (
    <span>
      <ThemeProvider theme={Theme.DARK}>
        <>
          {/* @ts-ignore */}
          <TestComp className="test">
            Some stuff
            <div>Inner element</div>
          </TestComp>
        </>
      </ThemeProvider>
    </span>
  );
};
