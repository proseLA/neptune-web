import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Layout } from '../propsValues/layouts';

import FlowHeader from './FlowHeader';

describe('FlowHeader', () => {
  const props = {
    leftContent: 'leftContent',
    rightContent: 'rightContent',
    bottomContent: 'bottomContent',
    className: 'className',
  };
  it('renders as expected', () => {
    expect(render(<FlowHeader {...props} />).container).toMatchSnapshot();
  });

  it('renders as expected with vertical layout', () => {
    expect(render(<FlowHeader {...props} layout={Layout.VERTICAL} />).container).toMatchSnapshot();
  });
});
