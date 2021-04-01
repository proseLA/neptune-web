import React from 'react';
import Types from 'prop-types';
import { RadioGroup } from '@transferwise/components';

const PromotedOneOfRadioControl = (props) => {
  const { selection, setSelection, promotion, promotedOneOf } = props;

  const radios = [
    {
      value: 'promoted',
      label: promotion.promoted?.title || promotedOneOf.title,
      secondary: promotion.promoted?.description || promotedOneOf.description,
    },
    {
      value: 'other',
      label: promotion.other.title,
      secondary: promotion.other.description,
    },
  ];

  return (
    <div className="form-group">
      <RadioGroup
        name="promoted-selection"
        onChange={setSelection}
        selectedValue={selection}
        radios={radios}
      />
    </div>
  );
};

PromotedOneOfRadioControl.propTypes = {
  promotedOneOf: Types.shape({
    title: Types.string,
    description: Types.string,
  }).isRequired,
  promotion: Types.shape({
    default: Types.string,
    checkedMeans: Types.string,
    control: Types.string,
    promoted: Types.shape({
      title: Types.string,
      description: Types.string,
    }),
    other: Types.shape({
      title: Types.string,
      heading: Types.shape({
        text: Types.string,
      }),
      description: Types.string,
    }),
  }).isRequired,
  selection: Types.string.isRequired,
  setSelection: Types.func.isRequired,
};

PromotedOneOfRadioControl.defaultProps = {};

export default PromotedOneOfRadioControl;
