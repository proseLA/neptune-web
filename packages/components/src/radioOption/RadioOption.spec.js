import { shallow } from 'enzyme';

import Option from '../common/Option';

import RadioOption from '.';

describe('Radio option', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <RadioOption media={<span />} id="" name="" title="" content="" onChange={jest.fn()} />,
    );
  });

  it('passes shared props to option', () => {
    const Icon = () => <svg />;
    const sharedProps = {
      media: <Icon />,
      title: 'A title',
      content: 'A content',
      name: 'a-name',
      complex: true,
      disabled: true,
    };
    component.setProps(sharedProps);

    expect(option().props()).toStrictEqual(expect.objectContaining(sharedProps));
  });

  it('passes id to radio button passed as button', () => {
    component.setProps({ id: 'some-id' });
    expect(buttonProperty('id')).toBe('some-id');
  });

  it('passes name to radio button passed as button', () => {
    component.setProps({ name: 'a-name' });
    expect(buttonProperty('name')).toBe('a-name');
  });

  it('passes checked to radio button passed as button', () => {
    expect(buttonProperty('checked')).toBe(false);
    component.setProps({ checked: true });
    expect(buttonProperty('checked')).toBe(true);
  });

  it('passes change handler to radio button passed as button', () => {
    const onChange = jest.fn();
    component.setProps({ onChange });
    expect(buttonProperty('onChange')).toBe(onChange);
  });

  it('passes disabled to radio button passed as button', () => {
    expect(buttonProperty('disabled')).toBe(false);
    component.setProps({ disabled: true });
    expect(buttonProperty('disabled')).toBe(true);
  });

  const option = () => component.find(Option);
  const buttonProperty = (name) => option().prop('button').props[name];
});
