import { shallow } from 'enzyme';

import DynamicLayout from '../DynamicLayout';

import DynamicColumns from '.';

describe('Given a component for dynamically rendering columns', () => {
  let component;
  let onAction;
  let onModelChange;
  let columns;
  let onPersistAsync;

  const button1 = {
    type: 'button',
    action: {
      title: 'Button 1',
      url: '/example',
      method: 'GET',
    },
  };

  const button2 = {
    type: 'button',
    action: {
      title: 'Button 2',
      url: '/example',
      method: 'GET',
    },
  };

  const model = 'example';
  const isValid = true;
  const schema = { type: 'string' };

  beforeEach(() => {
    columns = {
      type: 'columns',
      left: [button1],
      right: [button2],
      margin: 'md',
      bias: 'left',
    };

    onAction = jest.fn();
    onModelChange = jest.fn();
    onPersistAsync = jest.fn();

    component = shallow(
      <DynamicColumns
        component={columns}
        model={model}
        submitted={false}
        errors={{}}
        onModelChange={onModelChange}
        onAction={onAction}
        onPersistAsync={onPersistAsync}
      />,
    );
  });

  it('should use a DynamicLayout to render the child components', () => {
    expect(component.find(DynamicLayout).at(0).prop('components')).toBe(columns.left);
    expect(component.find(DynamicLayout).at(1).prop('components')).toBe(columns.right);
  });

  it('should pass the model to the column components', () => {
    expect(component.find(DynamicLayout).at(0).prop('model')).toBe(model);
    expect(component.find(DynamicLayout).at(1).prop('model')).toBe(model);
  });

  describe('when the left layout triggers an action', () => {
    beforeEach(() => {
      component.find(DynamicLayout).at(0).simulate('action', button1.action);
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(button1.action);
    });
  });

  describe('when the right layout triggers an action', () => {
    beforeEach(() => {
      component.find(DynamicLayout).at(1).simulate('action', button2.action);
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(button2.action);
    });
  });

  describe('when the left layout triggers a model change', () => {
    beforeEach(() => {
      component.find(DynamicLayout).at(0).simulate('modelChange', model, isValid, schema);
    });
    it('should broadcast onModelChange', () => {
      expect(onModelChange).toHaveBeenCalledWith(model, isValid, schema);
    });
  });

  describe('when the right layout triggers a model change', () => {
    beforeEach(() => {
      component.find(DynamicLayout).at(1).simulate('modelChange', model, isValid, schema);
    });
    it('should broadcast onModelChange', () => {
      expect(onModelChange).toHaveBeenCalledWith(model, isValid, schema);
    });
  });
});
