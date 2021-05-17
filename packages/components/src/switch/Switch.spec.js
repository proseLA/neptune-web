import React from 'react';
import { render, fireEvent, screen } from '../test-utils';
import Switch from './Switch';

import KeyCodes from '../common/keyCodes';
import { useDirection } from '../common/hooks';

jest.mock('../common/hooks/useDirection');

const props = {
  'aria-label': 'a label',
  checked: true,
  className: 'a-class-name',
  id: 'id',
  onClick: jest.fn(),
};

describe('Switch', () => {
  beforeEach(() => {
    useDirection.mockImplementation(() => ({ direction: 'ltr', isRTL: false }));
  });
  it('renders component when checked', () => {
    const { container } = render(
      <Switch
        aria-label={props['aria-label']}
        checked={props.checked}
        className={props.className}
        id={props.id}
        onClick={props.onClick}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders component associated with label', () => {
    render(
      <>
        <label id="labelID" htmlFor={props.id}>
          A switch with a label
        </label>
        <Switch
          aria-labelledby="labelID"
          checked={props.checked}
          className={props.className}
          id={props.id}
          onClick={props.onClick}
        />
        ,
      </>,
    );
    expect(screen.getByLabelText('A switch with a label')).toBeInTheDocument();
  });

  it('renders component when unchecked', () => {
    const { container } = render(
      <Switch
        checked={false}
        onClick={props.onClick}
        className={props.className}
        id={props.id}
        aria-label={props['aria-label']}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('calls onClick when user press space key', () => {
    const { getAllByRole } = render(
      <Switch
        checked={props.checked}
        onClick={props.onClick}
        className={props.className}
        id={props.id}
        aria-label={props['aria-label']}
      />,
    );

    const input = getAllByRole('checkbox')[0];
    fireEvent.keyDown(input, { key: '33', keyCode: KeyCodes.ENTER });
    expect(props.onClick).not.toHaveBeenCalled();
    fireEvent.keyDown(input, { key: '32', keyCode: KeyCodes.SPACE });
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should apply correct css classes when isRTL is true', () => {
    useDirection.mockImplementation(() => ({ direction: 'rtl', isRTL: true }));
    render(<Switch {...props} checked />);
    expect(screen.getByRole('switch')).toHaveClass('np-switch--rtl');
  });
});
