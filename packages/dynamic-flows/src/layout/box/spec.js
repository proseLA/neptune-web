import { shallow } from 'enzyme';

import DynamicLayout from '../DynamicLayout';

import DynamicBox from '.';

describe('Given a component for dynamically rendering a box of other components', () => {
  let component;
  let onAction;
  let onModelChange;
  let box;
  let onPersistAsync;

  const button = {
    type: 'button',
    action: {
      title: 'Edit',
      url: '/example',
      method: 'GET',
    },
  };

  const model = 'example';
  const isValid = true;
  const schema = { type: 'string' };

  beforeEach(() => {
    box = {
      type: 'box',
      components: [button],
      margin: 'md',
      border: true,
    };

    onAction = jest.fn();
    onModelChange = jest.fn();
    onPersistAsync = jest.fn();

    component = shallow(
      <DynamicBox
        component={box}
        model={model}
        submitted={false}
        errors={{}}
        baseUrl="dynamic-box-base-url"
        onModelChange={onModelChange}
        onAction={onAction}
        onPersistAsync={onPersistAsync}
      />,
    );
  });

  it('should use a DynamicLayout to render the child components', () => {
    expect(component.find(DynamicLayout).prop('components')).toBe(box.components);
  });

  it('should pass the child component the model', () => {
    expect(component.find(DynamicLayout).prop('model')).toBe(model);
  });

  describe('when the child layout triggers an action', () => {
    beforeEach(() => {
      component.find(DynamicLayout).simulate('action', button.action);
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(button.action);
    });
  });

  describe('when the child layout triggers a model change', () => {
    beforeEach(() => {
      component.find(DynamicLayout).simulate('modelChange', model, isValid, schema);
    });
    it('should broadcast onModelChange', () => {
      expect(onModelChange).toHaveBeenCalledWith(model, isValid, schema);
    });
  });
});
