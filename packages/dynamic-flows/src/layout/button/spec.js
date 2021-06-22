import React from 'react';
import { shallow } from 'enzyme';

import { Button, Priority, ControlType } from '@transferwise/components';

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
        type: 'accent',
        priority: 'primary',
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

  describe('when priority and type are provided...', () => {
    const priorities = Object.values(Priority);
    const controlTypes = Object.values(ControlType);

    priorities.forEach((priority) => {
      controlTypes.forEach((controlType) => {
        it(`...as ${priority}/${controlType}, it sets the correct priority and type`, () => {
          const localComponent = shallow(
            <DynamicButton
              component={{
                component: 'button',
                action: {
                  title: 'Submit',
                  url: '/example',
                  method: 'GET',
                  priority,
                  type: controlType,
                },
                size: 'md',
                align: 'center',
                margin: 'md',
              }}
              onAction={jest.fn()}
            />,
          );

          expect(localComponent.find(Button).prop('priority')).toBe(priority);
          expect(localComponent.find(Button).prop('type')).toBe(controlType);
        });
      });
    });
  });

  describe('when priority or type are NOT provided', () => {
    it(`defaults to secondary priority and accent type`, () => {
      const localComponent = shallow(
        <DynamicButton
          component={{
            component: 'button',
            action: {
              title: 'Submit',
              url: '/example',
              method: 'GET',
            },
            size: 'md',
            align: 'center',
            margin: 'md',
          }}
          onAction={jest.fn()}
        />,
      );

      expect(localComponent.find(Button).prop('priority')).toBe('secondary');
      expect(localComponent.find(Button).prop('type')).toBe('accent');
    });
  });
});
