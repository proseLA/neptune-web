import React from 'react';
import { shallow } from 'enzyme';
import { RadioGroup } from '@transferwise/components';

import PromotedOneOfSchema from './PromotedOneOfSchema';
import ObjectSchema from '../objectSchema';
import OneOfSchema from '../oneOfSchema';
import GenericSchema from '../genericSchema';
import DynamicAlert from '../../layout/alert';
import PromotedOneOfControl from './control/PromotedOneOfControl';
import PromotedOneOfRadioControl from './control/PromotedOneOfRadioControl';

describe('Given a PromotedOneOfSchema component', () => {
  let component;
  let onChange;
  let onPersistAsync;
  let props;
  let schema;
  let model;

  const errors = {};
  const locale = 'en-GB';
  const submitted = false;
  const translations = {};

  const promotedSchema = {
    type: 'object',
    title: 'Option A',
    properties: {
      a: {
        type: 'number',
      },
    },
    required: ['a'],
    promoted: true,
  };

  const oneOtherOption = [
    {
      type: 'object',
      title: 'Option B',
      properties: {
        b: {
          type: 'number',
        },
      },
      required: ['b'],
    },
  ];

  const twoOtherOptions = [
    {
      type: 'object',
      title: 'Option B',
      properties: {
        b: {
          type: 'number',
        },
      },
      required: ['b'],
    },
    {
      type: 'object',
      title: 'Option C',
      properties: {
        c: {
          type: 'number',
        },
      },
      required: ['c'],
    },
  ];

  const promotion = {
    other: {
      title: 'Other title',
      icon: {
        name: 'bank',
        type: 'icon',
      },
      heading: {
        text: 'Other group heading',
        type: 'heading',
      },
    },
  };

  beforeEach(() => {
    onChange = jest.fn();
    onPersistAsync = jest.fn();
  });

  describe('when initialised with a schema', () => {
    beforeEach(() => {
      model = {};
      schema = {
        title: 'Choose schema',
        oneOf: [promotedSchema, ...twoOtherOptions],
        alert: {
          context: 'success',
          markdown: 'some alert',
          type: 'alert',
        },
        promotion,
        control: 'tab',
      };

      props = {
        schema,
        model,
        errors,
        locale,
        onChange,
        submitted,
        translations,
        onPersistAsync,
      };

      component = shallow(<PromotedOneOfSchema {...props} />);
    });

    it('should render PromotedOneOfControl', () => {
      expect(component.find(PromotedOneOfControl)).toHaveLength(1);
    });

    it('should default to the promoted option', () => {
      const control = component.find(PromotedOneOfControl);
      expect(control.props().selection).toBe('promoted');
    });

    describe('when a specific default has been specified', () => {
      it('should default to the specified option', () => {
        const promotionWithDefault = { ...promotion, default: 'other' };
        schema = { ...schema, promotion: promotionWithDefault };
        props = { ...props, schema };
        component = shallow(<PromotedOneOfSchema {...props} />);

        const control = component.find(PromotedOneOfControl);

        expect(control.props().selection).toBe('other');
      });
    });

    describe('when the model matches a particular schema', () => {
      describe('when the matched schema is promoted', () => {
        it('should select the matched schema ignoring default specification', () => {
          const promotionWithDefault = { ...promotion, default: 'other' };
          schema = { ...schema, promotion: promotionWithDefault };
          model = { a: 123 };
          props = { ...props, model, schema };
          component = shallow(<PromotedOneOfSchema {...props} />);

          const control = component.find(PromotedOneOfControl);

          expect(control.props().selection).toBe('promoted');
        });
      });

      describe('when the matched schema is other', () => {
        it('should select the matched schema ignoring default specification', () => {
          const promotionWithDefault = { ...promotion, default: 'promoted' };
          schema = { ...schema, promotion: promotionWithDefault };
          model = { b: 123 };
          props = { ...props, model, schema };
          component = shallow(<PromotedOneOfSchema {...props} />);

          const control = component.find(PromotedOneOfControl);

          expect(control.props().selection).toBe('other');
        });
      });
    });

    describe('when the model is not valid for any schema', () => {
      describe('when the "promoted" schema is a better match than the "other" one', () => {
        it('should select the "promoted" schema', () => {
          const localSchema = {
            title: 'Choose schema',
            oneOf: [
              {
                type: 'object',
                title: 'Option A',
                properties: {
                  a: { type: 'number' },
                  kind: { type: 'string', const: 'A' },
                },
                required: ['a'],
                promoted: true,
              },
              {
                type: 'object',
                title: 'Option B',
                properties: {
                  b: { type: 'number' },
                  kind: { type: 'string', const: 'B' },
                },
                required: ['b'],
              },
            ],
            promotion: {
              other: {
                title: 'Other title',
                icon: { name: 'bank', type: 'icon' },
                heading: { text: 'Other group heading', type: 'heading' },
              },
              default: 'other',
            },
            control: 'tab',
          };

          model = { kind: 'A' };
          props = { ...props, model, schema: localSchema };

          component = shallow(<PromotedOneOfSchema {...props} />);

          const control = component.find(PromotedOneOfControl);

          expect(control.props().selection).toBe('promoted');
        });
      });
      describe('when the "other" schema is a better match than the "promoted" one', () => {
        it('should select the "other" schema', () => {
          const localSchema = {
            title: 'Choose schema',
            oneOf: [
              {
                type: 'object',
                title: 'Option A',
                properties: {
                  a: { type: 'number' },
                  kind: { type: 'string', const: 'A' },
                },
                required: ['a'],
                promoted: true,
              },
              {
                type: 'object',
                title: 'Option B',
                properties: {
                  b: { type: 'number' },
                  kind: { type: 'string', const: 'B' },
                },
                required: ['b'],
              },
            ],
            promotion: {
              other: {
                title: 'Other title',
                icon: { name: 'bank', type: 'icon' },
                heading: { text: 'Other group heading', type: 'heading' },
              },
            },
            control: 'tab',
          };

          model = { kind: 'B' };
          props = { ...props, model, schema: localSchema };

          component = shallow(<PromotedOneOfSchema {...props} />);

          const control = component.find(PromotedOneOfControl);

          expect(control.props().selection).toBe('other');
        });
      });
    });

    it('should display the promoted option', () => {
      const promoted = component.find(ObjectSchema);

      expect(promoted).toHaveLength(1);
    });

    it('should display alert when present', () => {
      expect(component.find(DynamicAlert)).toHaveLength(1);
    });

    it("should remove title, description and alert from the promoted option as it's already displayed", () => {
      const promoted = component.find(ObjectSchema);

      expect(promoted.props().schema).toMatchObject({
        ...schema.oneOf[0],
        title: undefined,
        description: undefined,
      });
    });

    it('should pass down all props to the promoted option', () => {
      const promoted = component.find(ObjectSchema);

      expectPropsToBeEqual(promoted, props);
    });

    describe('when the other option is selected', () => {
      describe('when there is one other option', () => {
        let objectSchema;

        const initialize = (promotionObj) => {
          schema = {
            title: 'Choose schema',
            oneOf: [promotedSchema, ...oneOtherOption],
            promotion: promotionObj,
          };

          props = { ...props, schema };

          component = shallow(<PromotedOneOfSchema {...props} />);

          getRadioGroup(component).simulate('change', 'other');
          objectSchema = component.find(GenericSchema).dive().find(ObjectSchema);
        };

        beforeEach(() => initialize(promotion));

        it('should render an object schema', () => {
          expect(objectSchema).toHaveLength(1);
        });

        it('should pass down the correct schema', () => {
          expect(objectSchema.props().schema).toMatchObject({
            ...schema.oneOf[1],
            title: 'Other group heading',
          });
        });

        it('should accept empty heading', () => {
          const headinglessPromotion = {
            ...promotion,
            default: 'promoted',
            other: { ...promotion.other, heading: null },
          };
          initialize(headinglessPromotion);

          expect(objectSchema.props().schema).toMatchObject({
            ...schema.oneOf[1],
            title: undefined,
          });
        });

        it('should pass down all props to the other option', () => {
          expectPropsToBeEqual(objectSchema, props);
        });
      });

      describe('when there are more than one other option', () => {
        let oneOfSchema;

        beforeEach(() => {
          getRadioGroup(component).simulate('change', 'other');
          oneOfSchema = component.find(GenericSchema).dive().find(OneOfSchema);
        });

        it('should render an oneOf schema', () => {
          expect(oneOfSchema).toHaveLength(1);
        });

        it('should pass down the correct schema', () => {
          expect(oneOfSchema.props().schema).toMatchObject({
            title: 'Other group heading',
            control: 'tab',
            oneOf: twoOtherOptions,
          });
        });

        it('should pass down all props to the other option', () => {
          expectPropsToBeEqual(oneOfSchema, props);
        });
      });
    });
  });
});

const expectPropsToBeEqual = (wrapper, props) => {
  expect(wrapper.props().locale).toBe(props.locale);
  expect(wrapper.props().model).toBe(props.model);
  expect(wrapper.props().onChange).toBe(props.onChange);
  expect(wrapper.props().submitted).toBe(props.submitted);
  expect(wrapper.props().errors).toBe(props.errors);
  expect(wrapper.props().translations).toBe(props.translations);
  expect(wrapper.props().onPersistAsync).toBe(props.onPersistAsync);
};

const getRadioGroup = (component) => {
  return component
    .find(PromotedOneOfControl)
    .dive()
    .find(PromotedOneOfRadioControl)
    .dive()
    .find(RadioGroup);
};
