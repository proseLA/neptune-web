import { shallow } from 'enzyme';

import Chevron from '../../chevron';

import DateHeader from '.';

describe('DateHeader', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      onPreviousClick: jest.fn(),
      onNextClick: jest.fn(),
    };
    component = shallow(<DateHeader {...props} />);
  });

  it('shows previous and next buttons', () => {
    const chevrons = component.find(Chevron);
    expect(chevrons).toHaveLength(2);
  });

  it('does not show label and middle button by default', () => {
    expect(component.find('button')).toHaveLength(2);
    expect(component.find('tw-date-lookup-header-current')).toHaveLength(0);
  });

  it('calls previous button handler on previous click', () => {
    component.find('button').at(0).simulate('click');
    expect(props.onPreviousClick).toHaveBeenCalledTimes(1);
  });

  it('calls next button handler on next click', () => {
    component.find('button').at(1).simulate('click');
    expect(props.onNextClick).toHaveBeenCalledTimes(1);
  });

  describe('when label is provided', () => {
    beforeEach(() => {
      component.setProps({ label: 'trolo' });
    });

    it('shows the label', () => {
      expect(component.find('button')).toHaveLength(3);
      expect(component.find('.tw-date-lookup-header-current').text()).toBe('trolo');
    });

    it('calls label click handler on label click', () => {
      const onLabelClick = jest.fn();
      component.setProps({ onLabelClick });
      component.find('.tw-date-lookup-header-current').simulate('click');
      expect(onLabelClick).toHaveBeenCalledTimes(1);
    });
  });
});
