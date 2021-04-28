import React from 'react';
import '@testing-library/jest-dom';

import { render } from '../../test-utils';

import SearchBox from '.';

jest.mock('react-transition-group/Transition', () => jest.fn('placeholder'));

describe('SearchBox', () => {
  const props = {
    classNames: {},
    handleSearchChange: jest.fn(),
    onClick: jest.fn(),
    searchPlaceholder: 'searchPlaceholder',
    value: 'value',
    ref: jest.fn(),
  };

  it('renders', () => {
    const { container } = render(<SearchBox {...props} />);

    expect(container).toMatchSnapshot();
  });
});
