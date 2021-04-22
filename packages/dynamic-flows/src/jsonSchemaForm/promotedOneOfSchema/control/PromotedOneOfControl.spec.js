import React from 'react';
import { shallow } from 'enzyme';

import PromotedOneOfControl from './PromotedOneOfControl';
import PromotedOneOfRadioControl from './PromotedOneOfRadioControl';
import PromotedOneOfCheckboxControl from './PromotedOneOfCheckboxControl';

describe('Given a PromotedOneOfControl component', () => {
  let component;
  let props;
  let setSelection;
  const selection = 'promoted';

  const promotedOneOf = {
    title: 'a promoted oneOf title',
    description: 'a promoted oneOf description',
  };

  const promotion = {
    other: {
      title: 'Other title',
    },
  };

  const promotionWithRadioControl = {
    ...promotion,
    control: 'radio',
  };

  const promotionWithCheckboxControl = {
    ...promotion,
    control: 'checkbox',
  };

  beforeEach(() => {
    setSelection = jest.fn();
    props = {
      promotedOneOf,
      promotion,
      selection,
      setSelection,
    };
  });

  describe('when given a radio control', () => {
    beforeEach(() => {
      component = shallow(
        <PromotedOneOfControl {...props} promotion={promotionWithRadioControl} />,
      );
    });

    it('should render PromotedOneOfRadioControl', () => {
      expect(component.find(PromotedOneOfRadioControl)).toHaveLength(1);
    });

    it('should pass down all props', () => {
      expect(component.find(PromotedOneOfRadioControl).props()).toEqual({
        ...props,
        promotion: promotionWithRadioControl,
      });
    });
  });

  describe('when control not given', () => {
    it('should default to radio control', () => {
      component = shallow(<PromotedOneOfControl {...props} />);

      expect(component.find(PromotedOneOfRadioControl)).toHaveLength(1);
    });
  });

  describe('when given a checkbox control', () => {
    beforeEach(() => {
      component = shallow(
        <PromotedOneOfControl {...props} promotion={promotionWithCheckboxControl} />,
      );
    });

    it('should render PromotedOneOfCheckboxControl', () => {
      expect(component.find(PromotedOneOfCheckboxControl)).toHaveLength(1);
    });

    it('should should pass down all props', () => {
      expect(component.find(PromotedOneOfCheckboxControl).props()).toEqual({
        ...props,
        promotion: promotionWithCheckboxControl,
      });
    });
  });
});
