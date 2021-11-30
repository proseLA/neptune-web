import { NavigationOption } from '@transferwise/components';
import { shallow } from 'enzyme';

import DynamicIcon from '../icon';

import DynamicDecision from '.';

describe('Given a component for dynamically rendering reviews', () => {
  let component;
  let onAction;
  let spec;

  const option = {
    title: 'Option A',
    description: 'More information',
    icon: 'email',
    action: {
      title: '',
      url: '/example',
      method: 'GET',
    },
  };

  beforeEach(() => {
    spec = {
      component: 'decision',
      options: [option],
      margin: 'md',
    };
    onAction = jest.fn();
    component = shallow(<DynamicDecision component={spec} onAction={onAction} />);
  });

  it('should use the action title for the decision title', () => {
    expect(component.find(NavigationOption).prop('title')).toStrictEqual(option.title);
  });

  it('should use the action label for the action link', () => {
    expect(component.find(NavigationOption).prop('content')).toBe(option.description);
  });

  it('should use the icon for the action icon', () => {
    expect(component.find(NavigationOption).prop('media')).toStrictEqual(
      <DynamicIcon type={option.icon} />,
    );
  });

  describe('when the an option triggers an action', () => {
    beforeEach(() => {
      component.find(NavigationOption).simulate('click');
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(option.action);
    });
  });
});
