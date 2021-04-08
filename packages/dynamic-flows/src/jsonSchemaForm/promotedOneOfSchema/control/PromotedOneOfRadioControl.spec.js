import React from 'react';
import { shallow } from 'enzyme';

import { RadioGroup } from '@transferwise/components';

import PromotedOneOfRadioControl from './PromotedOneOfRadioControl';

describe('Given a PromotedOneOfRadioControl component', () => {
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
      description: 'Other description',
    },
  };

  const promotionWithPromotedLabels = {
    promoted: {
      title: 'Promoted title',
      description: 'Promoted description',
    },
    other: {
      title: 'Other title',
      description: 'Other description',
    },
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

  describe('when provided valid props', () => {
    it('should render radio group', () => {
      component = shallow(<PromotedOneOfRadioControl {...props} />);

      expect(component.find(RadioGroup)).toHaveLength(1);
    });

    describe('when promoted labels are available', () => {
      it('should use promoted labels in the radio options', () => {
        component = shallow(
          <PromotedOneOfRadioControl {...props} promotion={promotionWithPromotedLabels} />,
        );

        expect(component.find(RadioGroup).props().radios).toEqual([
          {
            value: 'promoted',
            label: 'Promoted title',
            secondary: 'Promoted description',
          },
          {
            value: 'other',
            label: 'Other title',
            secondary: 'Other description',
          },
        ]);
      });
    });

    describe('when promoted labels are not available', () => {
      it('should fallback to using the labels of the promoted oneOf', () => {
        component = shallow(<PromotedOneOfRadioControl {...props} />);

        expect(component.find(RadioGroup).props().radios).toEqual([
          {
            value: 'promoted',
            label: 'a promoted oneOf title',
            secondary: 'a promoted oneOf description',
          },
          {
            value: 'other',
            label: 'Other title',
            secondary: 'Other description',
          },
        ]);
      });
    });

    describe('when an option is selected', () => {
      it('should trigger setSelection', () => {
        component = shallow(<PromotedOneOfRadioControl {...props} />);

        component.find(RadioGroup).simulate('change', 'other');

        expect(setSelection).toHaveBeenCalledWith('other');
      });
    });
  });
});
