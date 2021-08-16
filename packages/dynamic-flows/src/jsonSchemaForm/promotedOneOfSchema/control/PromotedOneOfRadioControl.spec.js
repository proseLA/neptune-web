import { RadioGroup } from '@transferwise/components';
import { shallow } from 'enzyme';

import PromotedOneOfRadioControl from './PromotedOneOfRadioControl';

describe('Given a PromotedOneOfRadioControl component', () => {
  let component;
  let props;
  let setSelection;
  const selection = 'promoted';
  const title = 'Group title';

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
      title,
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

    it('should render the schema title in a label', () => {
      expect(component.find('.control-label').text()).toContain(title);
    });

    describe('when promoted labels are available', () => {
      it('should use promoted labels in the radio options', () => {
        component = shallow(
          <PromotedOneOfRadioControl {...props} promotion={promotionWithPromotedLabels} />,
        );

        expect(component.find(RadioGroup).props().radios).toStrictEqual([
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

    describe('when image and icon are provided for the promoted and other element', () => {
      it('should render the avatars', () => {
        const promotedOneOfWithImage = {
          ...promotedOneOf,
          image: {
            url: 'someUrl',
          },
        };

        const promotionWithIcon = {
          other: {
            title: 'Other title',
            description: 'Other description',
            icon: {
              name: 'bank',
            },
          },
        };

        component = shallow(
          <PromotedOneOfRadioControl
            {...props}
            promotedOneOf={promotedOneOfWithImage}
            promotion={promotionWithIcon}
          />,
        );

        const { radios } = component.find(RadioGroup).props();
        const promoted = radios[0];
        const other = radios[1];

        expect(promoted.value).toBe('promoted');
        expect(promoted.label).toBe('a promoted oneOf title');
        expect(promoted.secondary).toBe('a promoted oneOf description');
        expect(promoted.avatar).toBeDefined();

        expect(other.value).toBe('other');
        expect(other.label).toBe('Other title');
        expect(other.secondary).toBe('Other description');
        expect(other.avatar).toBeDefined();
      });
    });

    describe('when promoted labels are not available', () => {
      it('should fallback to using the labels of the promoted oneOf', () => {
        component = shallow(<PromotedOneOfRadioControl {...props} />);

        expect(component.find(RadioGroup).props().radios).toStrictEqual([
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
