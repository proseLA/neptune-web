import {
  Checkbox,
  DateInput,
  DateLookup,
  InputWithDisplayFormat,
  PhoneNumberInput,
  RadioGroup,
  Select,
  Tabs,
  TextareaWithDisplayFormat,
} from '@transferwise/components';
import { shallow, mount } from 'enzyme';

import FormControl from '.';

describe('FormControl', () => {
  let props;
  let component;
  let defaultProps;
  let currentValue;

  beforeEach(() => {
    defaultProps = {
      id: 'control',
      placeholder: 'placeholder',
      name: 'control',
      disabled: false,
      readOnly: false,
      required: true,
      value: undefined,
      size: 'md',
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
    };
  });

  testSimpleControl('text', 'input[type="text"]', 'example', 'Example text');
  testSimpleControl('password', 'input[type="password"]', 'qwerty', 'Enter your password');
  testSimpleControl('number', 'input[type="number"]', 123456, 'Enter your numeric value here');
  testSimpleControl('textarea', 'textarea', 'Lorem ipsum', 'Please enter your feedback');
  testCustomControl('select', Select);
  testCustomControl('date', DateInput);
  testCustomControl('tel', PhoneNumberInput);
  testCustomControl('checkbox', Checkbox);
  testCustomControl('text', InputWithDisplayFormat);
  testCustomControl('textarea', TextareaWithDisplayFormat);
  testCustomControl('date-lookup', DateLookup);

  describe('type: select', () => {
    let selectElement;

    beforeEach(() => {
      props = {
        type: 'select',
        options: [
          {
            value: '1',
            label: 'one',
          },
          {
            value: '2',
            label: 'two',
          },
        ],
        onChange: jest.fn().mockImplementation((event) => {
          currentValue = event;
        }),
      };

      component = mount(<FormControl {...{ ...defaultProps, ...props }} />);
      selectElement = component.find(Select);
    });

    afterEach(() => {
      component.unmount();
    });

    testFocusHandler(() => {
      selectElement.simulate('focus');
    });

    testChangeHandler(() => {
      component.find('button.dropdown-toggle').simulate('click');
      component.find('li.tw-dropdown-item').last().simulate('click');
    }, '2');

    testBlurHandler(() => {
      selectElement.simulate('blur');
    });

    it('should enable search when number of options exceeds predefined amount', () => {
      const options = [];
      for (let i = 0; i < 20; i += 1) {
        options.push({ value: i, label: 'something' });
      }
      props = {
        type: 'select',
        options,
      };
      component = mount(<FormControl {...{ ...defaultProps, ...props }} />);
      expect(component.find(Select).prop('search')).toStrictEqual(true);
    });

    it('should disable search when number of options is less than predefined amount', () => {
      const options = [];
      for (let i = 0; i < 19; i += 1) {
        options.push({ value: i, label: 'something' });
      }
      props = {
        type: 'select',
        options,
      };
      component = mount(<FormControl {...{ ...defaultProps, ...props }} />);
      expect(component.find(Select).prop('search')).toStrictEqual(false);
    });

    it('should allow search', () => {
      const onSearchChange = jest.fn();
      component.setProps({ onSearchChange });

      component.find('button.dropdown-toggle').simulate('click');
      component.find('input').simulate('change', { target: { value: 'test' } });
      expect(onSearchChange).toHaveBeenCalledWith('test');
    });
  });

  describe('type: checkbox', () => {
    let checkbox;

    beforeEach(() => {
      props = {
        type: 'checkbox',
        placeholder: 'Accept Terms and Conditions',
        onChange: jest.fn().mockImplementation(() => {
          currentValue = true;
        }),
      };
      component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
      checkbox = component.find(Checkbox);
    });

    it('should render a checkbox input', () => {
      expect(checkbox.exists()).toBeTruthy();
    });

    testFocusHandler(() => {
      checkbox.simulate('focus');
    });

    testChangeHandler(() => {
      checkbox.simulate('change');
    }, true);

    testBlurHandler(() => {
      checkbox.simulate('blur');
    });

    // testRequiredValidation(() => {
    //   checkbox.simulate('click');
    // }, true);
  });

  describe('type: radio', () => {
    let radioGroup;

    beforeEach(() => {
      props = {
        type: 'radio',
        options: [
          { value: 1, label: 'One' },
          { value: 2, label: 'Two', secondary: 'Secondary label' },
        ],
        onChange: jest.fn().mockImplementation((newValue) => {
          currentValue = newValue;
        }),
      };
      component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
      radioGroup = component.find(RadioGroup);
    });

    afterEach(() => {
      component.unmount();
    });

    it('should render a radio group', () => {
      expect(radioGroup.exists()).toBeTruthy();
    });

    testChangeHandler(() => {
      radioGroup.simulate('change', 1);
    }, 1);
  });

  describe('type: tabs', () => {
    let tabs;

    beforeEach(() => {
      props = {
        type: 'tab',
        options: [
          { value: 0, label: 'Zero' },
          { value: 1, label: 'One' },
        ],
        onChange: jest.fn().mockImplementation((newValue) => {
          currentValue = newValue;
        }),
      };
      component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
      tabs = component.find(Tabs);
    });

    afterEach(() => {
      component.unmount();
    });

    it('should render tab', () => {
      expect(tabs.exists()).toBeTruthy();
    });

    testChangeHandler(() => {
      tabs.simulate('tabSelect', 1);
    }, 1);
  });

  describe('type: date', () => {
    let dateInput;

    beforeEach(() => {
      props = {
        type: 'date',
        onChange: jest.fn().mockImplementation(() => {
          currentValue = '2016-01-01';
        }),
      };

      component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
      dateInput = component.find(DateInput);
    });

    testFocusHandler(() => {
      dateInput.simulate('focus');
    });

    testChangeHandler(() => {
      dateInput.simulate('change');
    }, '2016-01-01');

    testBlurHandler(() => {
      dateInput.simulate('blur');
    });
  });

  describe('type: hidden', () => {
    let input;

    beforeEach(() => {
      props = { type: 'hidden', model: null };
      component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
      input = component.find('input');
    });

    it('should render a hidden input', () => {
      expect(input.exists()).toBeTruthy();
      expect(input.prop('type')).toBe('hidden');
    });
  });

  function testSimpleControl(controlType, selector, valueToSet, placeholder) {
    let input;
    describe(`type: ${controlType}`, () => {
      beforeEach(() => {
        props = {
          type: controlType,
          onChange: jest.fn().mockImplementation((newValue) => {
            currentValue = newValue;
          }),
          placeholder,
        };

        component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
        input = component.find(selector);
      });

      it(`should render a ${controlType} control`, () => {
        expect(input.exists()).toBeTruthy();
      });

      if (placeholder) {
        it(`should render the ${controlType} control with a placeholder`, () => {
          expect(component.prop('placeholder')).toBe(placeholder);
          expect(input.prop('placeholder')).toBe(placeholder);
        });
      }

      testFocusHandler(() => {
        component.simulate('focus');
      });

      testChangeHandler(() => {
        component.simulate('change', { target: { value: valueToSet } });
      }, valueToSet);

      testBlurHandler(() => {
        component.simulate('blur');
      });
    });
  }

  function getPropsForControlType(controlType) {
    let customProps = {};
    switch (controlType) {
      case 'radio':
      case 'select': {
        customProps = {
          options: [
            { value: 1, label: 'One' },
            { value: 2, label: 'Two', secondary: 'Secondary text' },
          ],
        };
        break;
      }
      case 'date':
      case 'date-lookup': {
        customProps = { value: new Date() };
        break;
      }
      case 'tel': {
        customProps = {
          value: '+441234567',
          searchPlaceholder: 'Search placeholder',
          size: 'md',
          placeholder: 'Telephone',
        };
        break;
      }
      case 'checkbox': {
        customProps = { placeholder: 'label' };
        break;
      }
      case 'upload': {
        customProps = {
          uploadProps: {},
        };
        break;
      }
      case 'text':
      case 'textarea': {
        customProps = {
          displayPattern: '**-**',
        };
        break;
      }
      default:
        customProps = defaultProps;
    }
    customProps = {
      ...customProps,
      type: controlType,
    };
    return { ...defaultProps, ...customProps };
  }

  function getPropsToPassDown(controlType, customComponent) {
    const PROPS = Object.keys(getPropsForControlType(controlType));

    // eslint-disable-next-line react/forbid-foreign-prop-types
    return Object.keys(customComponent.propTypes).filter((key) => PROPS.includes(key));
  }

  function testCustomControl(controlType, customComponent) {
    let custom;

    const EVENT = {
      onChange: 'change',
      onBlur: 'blur',
      onFocus: 'focus',
    };

    const PASSED_DOWN_PROPS = getPropsToPassDown(controlType, customComponent);
    const CALLBACK_PROPS = ['onChange', 'onBlur', 'onFocus'];

    if (!controlType) {
      throw new Error('Missing mandatory value in `controlType` argument!');
    }

    if (!customComponent) {
      throw new Error('Missing mandatory value in `customComponent` argument!');
    }

    describe(`type: ${controlType}`, () => {
      beforeEach(() => {
        props = getPropsForControlType(controlType);
        component = shallow(
          <FormControl {...{ ...defaultProps, ...props }} displayPattern="**-**" />,
        );
        const child = component.find(customComponent);
        custom = child.length > 1 ? child.first() : child;
      });

      PASSED_DOWN_PROPS.forEach((key) => {
        it(`should pass the ${key} prop to the child component`, () => {
          expect(custom.prop(key)).toStrictEqual(props[key]);
        });
      });
      if (controlType === 'upload') {
        it(`should call the onStart handler when a a file is dropped`, () => {
          component = mount(<FormControl {...{ ...defaultProps, ...props }} />);

          expect(component.find(customComponent)).toHaveLength(1);
        });
      } else {
        CALLBACK_PROPS.forEach((key) => {
          it(`should call the ${key} handler when a ${EVENT[key]} event triggered`, () => {
            component.simulate(EVENT[key]);
            expect(props[key]).toHaveBeenCalledTimes(1);
          });
        });
      }
    });
  }

  function testFocusHandler(performFocus) {
    describe('when focused', () => {
      beforeEach(performFocus);

      it('should call the focus handler', () => {
        expect(defaultProps.onFocus).toHaveBeenCalledTimes(1);
      });
    });
  }

  function testChangeHandler(performChange, expectedValue) {
    describe('when changed', () => {
      beforeEach(performChange);

      it('should call the change handler', () => {
        expect(props.onChange).toHaveBeenCalledTimes(1);
      });

      it('should set the correct value', () => {
        expect(currentValue).toStrictEqual(expectedValue);
      });
    });
  }

  function testBlurHandler(performBlur) {
    describe('when blurred', () => {
      beforeEach(performBlur);

      it('should call the blur handler', () => {
        expect(defaultProps.onBlur).toHaveBeenCalledTimes(1);
      });
    });
  }
});
