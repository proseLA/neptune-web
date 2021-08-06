import { shallow } from 'enzyme';

import { Button } from '@transferwise/components';

import DynamicButton from '.';

describe('Given a component for dynamically rendering buttons', () => {
  let component;
  let onAction;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'button',
      action: {
        title: 'Submit',
        url: '/example',
        method: 'GET',
        type: 'primary',
      },
      size: 'md',
      align: 'center',
      margin: 'md',
    };
    onAction = jest.fn();
    component = shallow(<DynamicButton component={spec} onAction={onAction} />);
  });

  it('should use the action title for the button', () => {
    expect(component.find(Button).contains(spec.action.title)).toBe(true);
  });

  it('should set correct type for button', () => {
    expect(component.find(Button).prop('type')).toBe('accent');
  });

  it('should set correct priority for button', () => {
    expect(component.find(Button).prop('priority')).toBe('primary');
  });

  describe('when the button is clicked', () => {
    beforeEach(() => {
      component.find(Button).simulate('click');
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(spec.action);
    });
  });
});
