/* eslint-disable jest/expect-expect */
import { Profile } from '@transferwise/icons';
import { mount } from 'enzyme';
import doTimes from 'lodash.times';
import Transition from 'react-transition-group/Transition';

import { fakeEvent, fakeKeyDownEventForKey } from '../common/fakeEvents';
import KEY_CODES from '../common/keyCodes';

import { addClassAndTriggerReflow, removeClass } from './domHelpers';
import Option from './option';

import Select from '.';

jest.mock('react-dom');
jest.mock('react-transition-group/Transition', () => jest.fn('placeholder'));
jest.mock('./domHelpers');
jest.mock('../dimmer', () => {
  return function ({ children }) {
    return <div className="dimmer">{children}</div>;
  };
});

describe('Select', () => {
  let component;
  let props;

  beforeEach(() => {
    // Need to reset innerWidth for portal tests
    window.innerWidth = 1024;
    window.matchMedia = () => {
      return { matches: false };
    };
    props = {
      onChange: jest.fn(),
      options: [
        { value: 0, label: 'yo' },
        { value: 1, label: 'dawg' },
        { value: 2, label: 'boi' },
      ],
    };
    Transition.mockImplementation((properties) => {
      const ActualTransition = jest.requireActual('react-transition-group/Transition').default;
      return <ActualTransition {...properties} timeout={0} />;
    });
    component = mount(<Select {...props} />);
    jest.clearAllMocks();
  });

  const bustStackAndUpdate = async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update();
  };

  const element = (selector) => component.find(selector);
  const clickOnDocument = async () => {
    document.dispatchEvent(new Event('click'));
    return bustStackAndUpdate();
  };
  const findNthListElement = (n) => element('li').at(n);
  const findNthOption = (n) => element(Option).at(n);
  const container = () => element('.btn-group');
  const dropdownMenu = () => element('ul.dropdown-menu');
  const openerButton = () => element('button.dropdown-toggle');
  const openSelect = async () => {
    openerButton().simulate('click', fakeEvent());
    await bustStackAndUpdate();
  };
  const openSearchableSelect = async () => {
    await openSelect();
    component.setProps({ onSearchChange: jest.fn() });
  };
  const callSearchChangeWith = (string) =>
    component.find('input').simulate('change', { target: { value: string } });

  const activeOptionIndex = () => {
    let elementIndex = null;
    element('li').forEach((element_, index) => {
      if (element_.is('.active')) {
        expect(element('.active')).toHaveLength(1);
        elementIndex = index;
      }
    });

    return elementIndex;
  };

  const focusedOptionIndex = () => {
    let elementIndex = null;
    element('li').forEach((element_, index) => {
      if (element_.is('.tw-dropdown-item--focused')) {
        expect(element('.tw-dropdown-item--focused')).toHaveLength(1);
        elementIndex = index;
      }
    });

    return elementIndex;
  };

  const expectOpenClassToHaveBeenAdded = () =>
    expect(addClassAndTriggerReflow).toHaveBeenCalledWith(container().getDOMNode(), 'open');

  const expectOpenClassToHaveBeenRemoved = () =>
    expect(removeClass).toHaveBeenCalledWith(container().getDOMNode(), 'open');

  const expectDropdownToBe = () => ({
    open() {
      expect(dropdownMenu().exists()).toBe(true);
      expect(openerButton().is('[aria-expanded=true]')).toBe(true);
    },
    closed() {
      expect(dropdownMenu().exists()).toBe(false);
      expect(openerButton().is('[aria-expanded=false]')).toBe(true);
    },
  });

  it('starts closed', () => {
    expectDropdownToBe().closed();
  });

  it('can be opened', async () => {
    await openSelect();
    expectDropdownToBe().open();
    expectOpenClassToHaveBeenAdded();
  });

  it('sets the open class on the menu', async () => {
    expect(element('.dropdown-menu--open').exists()).toBe(false);
    await openSelect();
    expect(element('.dropdown-menu--open').exists()).toBe(true);
  });

  it('opens upward when dropdownUp prop is passed', () => {
    component.setProps({ dropdownUp: true });
    expect(container().hasClass('dropup')).toBe(true);
  });

  it('can be opened by DOWN arrow', () => {
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN));
    expectDropdownToBe().open();
  });

  it('can be opened by UP arrow', () => {
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.UP));
    expectDropdownToBe().open();
  });

  it('can be opened by SPACE', () => {
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.SPACE));
    expectDropdownToBe().open();
  });

  it('can be opened by ENTER', () => {
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.ENTER));
    expectDropdownToBe().open();
  });

  it('can be closed by clicking somewhere else', async () => {
    await openSelect();
    await clickOnDocument();
    expectDropdownToBe().closed();
    expectOpenClassToHaveBeenRemoved();
  });

  it('can be closed by pressing escape', async () => {
    await openSelect();
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.ESCAPE));
    await bustStackAndUpdate();
    expectDropdownToBe().closed();
  });

  describe('placeholders', () => {
    it('will not render a placeholder if none is provided', () => {
      expect(component.find('button').text()).toStrictEqual('');
    });

    it('can be given a placeholder', () => {
      component.setProps({ placeholder: 'hello world' });
      expect(component.find('button').text()).toStrictEqual('hello world');
    });

    it('renders basic options and placeholder when open and not required', async () => {
      await openSelect();
      component.setProps({ placeholder: 'ayy lmao' });

      expect(component.find('li')).toHaveLength(props.options.length + 1);
      expect(findNthListElement(0).text()).toStrictEqual('ayy lmao');
      expect(findNthOption(0).prop('label')).toStrictEqual('yo');
      expect(findNthOption(1).prop('label')).toStrictEqual('dawg');
    });

    it('does not render placeholder in list when open and required', async () => {
      await openSelect();
      component.setProps({ placeholder: 'this will not be shown', required: true });

      expect(component.find('li')).toHaveLength(props.options.length);
      expect(findNthListElement(0).text()).not.toStrictEqual('this will not be shown');
    });

    it('calls onChange with nothing when selecting the placeholder', async () => {
      component.setProps({ placeholder: 'this is not a real option' });
      await openSelect();
      findNthListElement(0).simulate('click', fakeEvent());
      expect(props.onChange).toHaveBeenCalledWith(null);
    });

    it('renders the selected option if given instead of the placeholder', () => {
      const selected = {
        value: 0,
        label: 'ayy',
        note: 'yo',
        icon: <Profile />,
        currency: '',
        secondary: '',
        classNames: {},

        selected: true,
      };
      component.setProps({ selected });
      const buttonChild = component.find('button').children().first();
      expect(buttonChild.type()).toStrictEqual(Option);
      expect(buttonChild.props()).toStrictEqual(selected);
    });
  });

  it('can select an option and closes itself', async () => {
    await openSelect();
    expect(props.onChange).not.toHaveBeenCalled();
    findNthListElement(0).simulate('click', fakeEvent());
    await bustStackAndUpdate();
    expect(props.onChange).toHaveBeenCalledWith(props.options[0]);
    expectDropdownToBe().closed();
  });

  it('closes itself when backdrop is touched', async () => {
    await openSelect();
    container().simulate('touchMove', fakeEvent());
    await bustStackAndUpdate();
    expectDropdownToBe().closed();
  });

  it('shows the currently selected option as active in the dropdown', async () => {
    await openSelect();
    component.setProps({ required: true });
    expect(activeOptionIndex()).toBeNull();
    component.setProps({ selected: props.options[0] });
    expect(activeOptionIndex()).toBe(0);
  });

  it('renders non-clickable headers', async () => {
    await openSelect();
    component.setProps({ options: [{ header: 'hello' }, { header: 'good morning' }] });

    expect(component.find('li.dropdown-header').first().text()).toStrictEqual('hello');
    expect(component.find('li.dropdown-header').at(1).text()).toStrictEqual('good morning');
    component.find('li.dropdown-header').first().simulate('click', fakeEvent());
    expect(props.onChange).not.toHaveBeenCalled();
    expectDropdownToBe().open();
  });

  describe('given a set of options where some are disabled', () => {
    beforeEach(() => {
      component.setProps({
        options: [{ label: 'a thing' }, { label: 'a disabled thing', disabled: true }],
      });
    });

    describe('when opened', () => {
      beforeEach(async () => {
        await openSelect();
      });

      it('should render a disabled link for any disabled options', () => {
        expect(component.find('li.tw-dropdown-item').first().text()).toStrictEqual('a thing');
      });

      describe('when a disabled option is clicked', () => {
        beforeEach(() => {
          component.find('li.tw-dropdown-item').at(1).simulate('click', fakeEvent());
        });

        it('should not close the dropdown', () => {
          expectDropdownToBe().open();
        });

        it('should not call the onChange callback', () => {
          expect(props.onChange).not.toHaveBeenCalled();
        });
      });
    });
  });

  it('can be disabled', async () => {
    expect(!!component.find('button').prop('disabled')).toBe(false);
    component.setProps({ disabled: true });
    expect(!!component.find('button').prop('disabled')).toBe(true);
    await openSelect();
    expectDropdownToBe().closed();
  });

  it('shows a searchbox when a search handler is passed in', async () => {
    await openSelect();
    expect(component.find('input')).toHaveLength(0);

    component.setProps({ onSearchChange: jest.fn() });
    expect(component.find('input')).toHaveLength(1);
  });

  it('lets you search', async () => {
    await openSelect();
    const onSearchChange = jest.fn();
    component.setProps({ onSearchChange });
    callSearchChangeWith('hello');
    expect(onSearchChange).toHaveBeenCalledWith('hello');
  });

  it('shows the search value in the searchbox', async () => {
    await openSearchableSelect();
    component.setProps({ searchValue: 'hello' });
    expect(component.find('input').prop('value')).toStrictEqual('hello');
  });

  it('has a default search placeholder', async () => {
    await openSearchableSelect();
    component.setProps({ onSearchChange: jest.fn() });
    expect(component.find('input').prop('placeholder').length).toBeGreaterThan(0);
  });

  it('can set the search placeholder', async () => {
    await openSearchableSelect();
    component.setProps({ searchPlaceholder: 'hello' });
    expect(component.find('input').prop('placeholder')).toStrictEqual('hello');
  });

  it('has first search result in focus', async () => {
    await openSelect();
    component.setProps({
      onSearchChange: (event) => {
        component.setProps({ options: [{ value: 2, label: 'yo' }], searchValue: event });
      },
    });

    callSearchChangeWith('yo');

    expect(focusedOptionIndex()).toBe(1); // ignore search bar
  });

  describe('given a large set of options', () => {
    beforeEach(async () => {
      component.setProps({
        options: new Array(250).fill().map((x, index) => ({
          value: `option${index}`,
          label: `Option ${index}`,
        })),
      });
      await openSelect();
    });

    it('should limit the number of options initially shown', async () => {
      expect(element(Option)).toHaveLength(100);
    });

    it('should show a "..." option at the end to load more options', async () => {
      expect(element('.show-more')).toHaveLength(1);
    });

    it('should load more options when "..." is clicked', async () => {
      element('.show-more').simulate('click', fakeEvent());
      expect(element(Option)).toHaveLength(200);
      expect(element('.show-more')).toHaveLength(1);

      element('.show-more').simulate('click', fakeEvent());
      expect(element(Option)).toHaveLength(250); // exhausted
      expect(element('.show-more')).toHaveLength(0);
    });
  });

  it('handles hitting enter after options are filtered', async () => {
    component.setState({ keyboardFocusedOptionIndex: 0 });
    await openSelect();
    component.setProps({
      onSearchChange: (event) => {
        component.setProps({ options: [], searchValue: event });
      },
    });
    callSearchChangeWith('hello');
    expect(() =>
      component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.ENTER)),
    ).not.toThrow();
  });

  it('does not show placeholder option when search enabled', async () => {
    component.setProps({ placeholder: 'ayy lmao' });
    await openSelect();
    expect(component.find('ul').text()).toContain('ayy lmao');
    await openSearchableSelect();
    expect(component.find('ul').text()).not.toContain('ayy lmao');
  });

  it('can be given a dropdown width', async () => {
    await openSelect();
    ['sm', 'md', 'lg'].forEach((dropdownWidth) => {
      expect(component.find('.dropdown-menu').hasClass(`dropdown-menu-${dropdownWidth}`)).toBe(
        false,
      );
      component.setProps({ dropdownWidth });
      expect(component.find('.dropdown-menu').hasClass(`dropdown-menu-${dropdownWidth}`)).toBe(
        true,
      );
    });
  });

  it('can be given a breakpoint to make the dropdown open from the right', async () => {
    await openSelect();
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach((dropdownRight) => {
      expect(
        component.find('.dropdown-menu').hasClass(`dropdown-menu-${dropdownRight}-right`),
      ).toBe(false);
      component.setProps({ dropdownRight });
      expect(
        component.find('.dropdown-menu').hasClass(`dropdown-menu-${dropdownRight}-right`),
      ).toBe(true);
    });
  });

  it('allows you to move around items with arrow keys while ignoring headers, separators and disabled', async () => {
    const keyboardFocusIsOnElementWithIndex = (index) =>
      findNthListElement(index).hasClass('tw-dropdown-item--focused');
    component.setProps({
      options: [
        { value: 0, label: 'yo' },
        { value: 1, label: 'dawg' },
        { header: 'ignore me' },
        { value: 2, label: 'yo' },
        { separator: true }, // ignore me too
        { value: 3, label: 'dawg' },
        { header: 'ignore me too' },
        { value: 4, label: 'dawg' },
        { value: 5, label: 'yo' },
        { value: 6, label: 'dawg' },
        { value: 7, label: 'ignore me as well', disabled: true },
        { value: 8, label: 'dawg' },
      ],
      required: true,
    });
    await openSelect();

    expect(keyboardFocusIsOnElementWithIndex(3)).toBe(false);
    doTimes(3, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(keyboardFocusIsOnElementWithIndex(3)).toBe(true); // skips header!

    doTimes(4, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(keyboardFocusIsOnElementWithIndex(3)).toBe(false);
    expect(keyboardFocusIsOnElementWithIndex(9)).toBe(true); // skips header and separator again!

    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN));
    expect(keyboardFocusIsOnElementWithIndex(9)).toBe(false);
    expect(keyboardFocusIsOnElementWithIndex(11)).toBe(true); // skips disabled

    expect(keyboardFocusIsOnElementWithIndex(3)).toBe(false);
    doTimes(5, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.UP)));
    expect(keyboardFocusIsOnElementWithIndex(8)).toBe(false);
    expect(keyboardFocusIsOnElementWithIndex(3)).toBe(true);
  });

  it('binds keyboard movement to the current options', async () => {
    component.setProps({ required: true });
    await openSelect();

    // Move to the bottom of Select with 3 options
    doTimes(3, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(focusedOptionIndex()).toBe(2);

    // Make sure we can't move past the last option
    doTimes(3, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(focusedOptionIndex()).toBe(2);

    // Now move up 1 option
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.UP));
    expect(focusedOptionIndex()).toBe(1);

    // Move to first option and make sure we can't move past the first one
    doTimes(3, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.UP)));
    expect(focusedOptionIndex()).toBe(0);
  });

  it('allows you to select the item currently focused with your keyboard by pressing ENTER', () => {
    component.setProps({ required: true });
    const { onChange } = component.instance().props;

    // Hitting it once will only make the selector appear, so we hit it twice to go down once
    doTimes(2, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(onChange).not.toHaveBeenCalled();

    // Select an option with ENTER
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.ENTER));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(props.options[0]);
  });

  it('allows you to select the item currently focused with your keyboard by pressing TAB', () => {
    component.setProps({ required: true });
    const { onChange } = component.instance().props;

    // Hitting it once will only make the selector appear, so we hit it twice to go down once
    doTimes(2, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(onChange).not.toHaveBeenCalled();

    // Select an option with TAB
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.TAB));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(props.options[0]);
  });

  it('allows you to select the item currently focused with your keyboard by pressing SPACE', () => {
    component.setProps({ required: true });
    const { onChange } = component.instance().props;

    // Hitting it once will only make the selector appear, so we hit it twice to go down once
    doTimes(2, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(onChange).not.toHaveBeenCalled();

    // Select an option with SPACE
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.SPACE));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(props.options[0]);
  });

  it('can have different sizes', () => {
    expect(openerButton().hasClass('btn-md')).toBe(true);
    ['sm', 'md', 'lg'].forEach((size) => {
      component.setProps({ size });
      expect(openerButton().hasClass(`btn-${size}`)).toBe(true);
    });
  });

  it('can be a block button or a normal button', () => {
    const openerButtonIsBlock = () => component.find('.btn-group').hasClass('btn-block');
    expect(openerButtonIsBlock()).toBe(true);
    component.setProps({ block: false });
    expect(openerButtonIsBlock()).toBe(false);
    component.setProps({ block: true });
    expect(openerButtonIsBlock()).toBe(true);
  });

  it('passes the given id forward to the button', () => {
    component.setProps({ id: 'some-id' });
    expect(component.find('button#some-id').type()).toBe('button');
  });

  it('renders separators', async () => {
    component.setProps({
      placeholder: 'this is not a real option',
      options: [{ separator: true }],
    });
    await openSelect();
    expect(findNthListElement(1).prop('className')).toBe('divider');
    expect(findNthListElement(1).children()).toHaveLength(0);
  });

  it('ensures namespaced classNames can be provided and used', async () => {
    const styles = { 'dropdown-toggle': 'dropdown-toggle_TWISAWESOME125' };
    expect(component.find('.dropdown-toggle').exists()).toBe(true);

    component.setProps({ classNames: styles });
    expect(component.find('.dropdown-toggle').exists()).toBe(false);
    expect(component.find('.dropdown-toggle_TWISAWESOME125').exists()).toBe(true);
  });

  it('updates if we should create the list in a portal resize', () => {
    expect(component.state('shouldRenderWithPortal')).toBe(false);

    window.matchMedia = () => {
      return { matches: true };
    };
    window.dispatchEvent(new Event('resize'));

    expect(component.state('shouldRenderWithPortal')).toBe(true);
  });

  it('creates a portal for options list and overlay when rendering on mobile', async () => {
    window.matchMedia = () => {
      return { matches: true };
    };
    window.dispatchEvent(new Event('resize'));

    expect(component.find('.dimmer')).toHaveLength(0);

    await openSelect();

    expect(component.find('.dimmer')).toHaveLength(1);

    expect(element('.dropdown-menu--open').exists()).toBe(true);
  });
});
