import { shallow } from 'enzyme';

import TextareaWithDisplayFormat from '.';

describe('TextareaWithDisplayFormat', () => {
  const props = { displayPattern: '**-**', onChange: jest.fn() };

  it('should render input with value prop', () => {
    const view = shallow(<TextareaWithDisplayFormat {...props} />)
      .find('WithDisplayFormat')
      .renderProp('render')({ value: 'test' });

    expect(view.find('textarea').props('value')).toStrictEqual({ value: 'test' });
  });
});
