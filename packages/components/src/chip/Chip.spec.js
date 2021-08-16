import { shallow } from 'enzyme';

import { fakeEvent } from '../common/fakeEvents';
import { useDirection } from '../common/hooks';

import Chip from './Chip';

jest.mock('../common/hooks/useDirection');

describe('option', () => {
  let component;
  let props;

  const removeButton = () => component.find('.chip-remove');

  beforeEach(() => {
    props = {
      onRemove: jest.fn(),
      label: 'Test',
      hasError: false,
    };
    useDirection.mockImplementation(() => ({ direction: 'ltr', isRTL: false }));
    component = shallow(<Chip {...props} />);
  });

  it('renders', () => {
    expect(component.html()).toMatchSnapshot();
  });

  it('renders with RTL support', () => {
    useDirection.mockImplementation(() => ({ direction: 'rtl', isRTL: true }));
    component = shallow(<Chip {...props} />);
    expect(component.html()).toMatchSnapshot();
  });

  it('renders label', () => {
    expect(component.childAt(0).text()).toStrictEqual(props.label);
  });

  it('calls onRemove when remove button clicked', () => {
    removeButton().simulate('click', fakeEvent());
    expect(props.onRemove).toHaveBeenCalledTimes(1);
  });

  it('renders invalid chip correctly', () => {
    expect(component.hasClass('has-error')).toBe(false);
    component.setProps({
      hasError: true,
    });
    expect(component.hasClass('has-error')).toBe(true);
  });

  it('render with correct className', () => {
    expect(component.hasClass('test-class')).toBe(false);
    component.setProps({
      className: 'test-class',
    });
    expect(component.hasClass('test-class')).toBe(true);
  });
});
