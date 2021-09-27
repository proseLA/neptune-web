import KeyCodes from '../common/keyCodes';
import { render, fireEvent, screen } from '../test-utils';

import Switch from './Switch';

const props = {
  'aria-label': 'a label',
  checked: true,
  className: 'a-class-name',
  id: 'id',
  onClick: jest.fn(),
};

describe('Switch', () => {
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
        className={props.className}
        id={props.id}
        aria-label={props['aria-label']}
        onClick={props.onClick}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('calls onClick when user press space key', () => {
    render(
      <Switch
        checked={props.checked}
        className={props.className}
        id={props.id}
        aria-label={props['aria-label']}
        onClick={props.onClick}
      />,
    );

    const input = screen.getAllByRole('checkbox')[0];
    fireEvent.keyDown(input, { key: '33', keyCode: KeyCodes.ENTER });
    expect(props.onClick).not.toHaveBeenCalled();
    fireEvent.keyDown(input, { key: '32', keyCode: KeyCodes.SPACE });
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick if disabled', () => {
    const mockCallback = jest.fn();
    render(<Switch {...props} disabled onClick={mockCallback} />);
    const input = screen.getByRole('switch');
    fireEvent.click(input);
    expect(mockCallback).not.toHaveBeenCalled();
  });
});
