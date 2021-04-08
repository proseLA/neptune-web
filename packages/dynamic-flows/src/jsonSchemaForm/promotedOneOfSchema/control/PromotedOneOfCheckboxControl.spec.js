import React from 'react';
import { shallow, mount } from 'enzyme';

import { Checkbox } from '@transferwise/components';

import PromotedOneOfCheckboxControl from './PromotedOneOfCheckboxControl';

describe('Given a PromotedOneOfCheckboxControl component', () => {
  let component;
  let props;
  let setSelection;
  const selection = 'promoted';

  const promotedOneOf = {
    title: 'a promoted oneOf title',
    description: 'a promoted oneOf description',
  };

  const promotion = {
    control: 'checkbox',
    promoted: {
      title: 'Promoted title',
    },
    other: {
      title: 'Other title',
    },
  };

  const promotionMeansOther = {
    ...promotion,
    checkedMeans: 'other',
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
    it('should render checkbox', () => {
      component = shallow(<PromotedOneOfCheckboxControl {...props} />);

      expect(component.find(Checkbox)).toHaveLength(1);
    });
  });

  describe('when checked means other', () => {
    beforeEach(() => {
      component = mount(
        <PromotedOneOfCheckboxControl
          {...props}
          promotion={promotionMeansOther}
          selection="promoted"
        />,
      );
    });

    it('should use the other title for the checkbox', () => {
      expect(component.find(Checkbox).props().label).toEqual('Other title');
    });

    describe('when promoted is selected initially', () => {
      it('should be unchecked', () => {
        expect(component.find(Checkbox).props().checked).toBe(false);
      });

      describe('when the box is checked', () => {
        it('should trigger selection change to other', () => {
          component.find(Checkbox).find('input').simulate('change', true);

          expect(setSelection).toHaveBeenCalledWith('other');
        });
      });
    });

    describe('when other is selected initially', () => {
      beforeEach(() => {
        component = mount(
          <PromotedOneOfCheckboxControl
            {...props}
            promotion={promotionMeansOther}
            selection="other"
          />,
        );
      });

      it('should be checked', () => {
        expect(component.find(Checkbox).props().checked).toBe(true);
      });

      describe('when the box is unchecked', () => {
        it('should trigger selection change to promoted', () => {
          component.find(Checkbox).find('input').simulate('change', false);

          expect(setSelection).toHaveBeenCalledWith('promoted');
        });
      });
    });
  });

  describe('when checked means promoted', () => {
    beforeEach(() => {
      component = shallow(<PromotedOneOfCheckboxControl {...props} />);
    });

    it('should use the promoted title', () => {
      expect(component.find(Checkbox).props().label).toEqual('Promoted title');
    });

    describe('when the promoted title is missing', () => {
      it('should use the promoted oneOf title', () => {
        component = shallow(<PromotedOneOfCheckboxControl {...props} promotion={{}} />);

        expect(component.find(Checkbox).props().label).toEqual('a promoted oneOf title');
      });
    });

    describe('when other is selected initially', () => {
      beforeEach(() => {
        component = mount(<PromotedOneOfCheckboxControl {...props} selection="other" />);
      });

      it('should be unchecked by default', () => {
        expect(component.find(Checkbox).props().checked).toBe(false);
      });

      describe('when the box is checked', () => {
        it('should trigger selection change to promoted', () => {
          component.find(Checkbox).find('input').simulate('change', true);

          expect(setSelection).toHaveBeenCalledWith('promoted');
        });
      });
    });

    describe('when promoted is selected initially', () => {
      beforeEach(() => {
        component = mount(<PromotedOneOfCheckboxControl {...props} selection="promoted" />);
      });

      it('should be checked by default', () => {
        expect(component.find(Checkbox).props().checked).toBe(true);
      });

      describe('when the box is unchecked', () => {
        it('should trigger selection change to other', () => {
          component.find(Checkbox).find('input').simulate('change', false);

          expect(setSelection).toHaveBeenCalledWith('other');
        });
      });
    });
  });
});
