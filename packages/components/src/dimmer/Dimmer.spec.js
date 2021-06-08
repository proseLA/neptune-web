import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import DimmerAppendingToBody, { Dimmer } from './Dimmer';

jest.mock('react-dom');

describe('Dimmer', () => {
  let component;
  const props = {
    open: true,
    fadeContentOnExit: false,
    fadeContentOnEnter: false,
    onClick: jest.fn(),
    children: <div />,
  };

  beforeEach(() => {
    ReactDOM.createPortal = jest.fn();
    ReactDOM.createPortal.mockReturnValue(<Dimmer {...props} />);
    component = shallow(<Dimmer {...props} />);
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
    jest.clearAllMocks();
  });

  it('is appended to body', () => {
    expect(ReactDOM.createPortal).not.toBeCalled();
    mount(<DimmerAppendingToBody {...props} />);

    expect(ReactDOM.createPortal).toBeCalledTimes(1);
    /** Using toBeCalledWith was not matching properly */
    const [comp, body] = ReactDOM.createPortal.mock.calls[0];
    expect(comp).toMatchObject(component);
    expect(body).toMatchObject(document.body);
  });

  it('renders with right props', () => {
    component = mount(<Dimmer {...props} />);
    expect(component.find(Dimmer)).toHaveLength(1);
    expect(component.find(Dimmer).props()).toEqual({ ...props, scrollable: false });
  });

  it('do not make Dimmer auto scrollable if scrollable=false', () => {
    expect(component.find('.dimmer').hasClass('dimmer--scrollable')).toBe(false);
  });

  it('makes Dimmer auto scrollable if scrollable=true', () => {
    component.setProps({ scrollable: true });
    expect(component.find('.dimmer').hasClass('dimmer--scrollable')).toBe(true);
  });

  it('fade content on enter if fadeContentOnEnter is true', () => {
    component.setProps({ fadeContentOnEnter: true });
    const cssTransition = component.find('CSSTransition');
    expect(cssTransition.prop('classNames')).toEqual({
      enter: 'dimmer--enter-fade',
      enterDone: 'dimmer--enter-done dimmer--enter-fade',
      exit: 'dimmer--exit',
    });
  });

  it('fade content on exit if fadeContentOnExit is true', () => {
    component.setProps({ fadeContentOnExit: true });
    const cssTransition = component.find('CSSTransition');
    expect(cssTransition.prop('classNames')).toEqual({
      enter: '',
      enterDone: 'dimmer--enter-done',
      exit: 'dimmer--exit dimmer--exit-fade',
    });
  });
});
