import { RadioGroup } from '@transferwise/components';
import Types from 'prop-types';
import { useState, useEffect } from 'react';

import { mapAvatar, mapIcon } from '../../schemaFormControl/optionMapper';

const generateId = () => {
  return String(Math.floor(100000000 * Math.random()));
};

const PromotedOneOfRadioControl = (props) => {
  const { selection, setSelection, promotion, promotedOneOf, title } = props;

  const [id, setId] = useState('');

  useEffect(() => {
    setId(generateId());
  }, [props.title]);

  const radios = [
    {
      value: 'promoted',
      label: promotion.promoted?.title || promotedOneOf.title,
      secondary: promotion.promoted?.description || promotedOneOf.description,
      ...mapIcon(promotedOneOf.icon),
      ...mapAvatar(promotedOneOf.image),
    },
    {
      value: 'other',
      label: promotion.other.title,
      secondary: promotion.other.description,
      ...mapIcon(promotion.other.icon),
      ...mapAvatar(promotion.other.image),
    },
  ];

  return (
    <div className="form-group">
      {title && (
        <label className="control-label" htmlFor={id}>
          {title}
        </label>
      )}
      <RadioGroup
        name="promoted-selection"
        selectedValue={selection}
        radios={radios}
        id={id}
        onChange={setSelection}
      />
    </div>
  );
};

PromotedOneOfRadioControl.propTypes = {
  title: Types.string,
  promotedOneOf: Types.shape({
    title: Types.string,
    description: Types.string,
    image: Types.shape({
      url: Types.string,
    }),
    icon: Types.shape({
      name: Types.string,
    }),
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
      image: Types.shape({
        url: Types.string,
      }),
      icon: Types.shape({
        name: Types.string,
      }),
    }),
  }).isRequired,
  selection: Types.string.isRequired,
  setSelection: Types.func.isRequired,
};

PromotedOneOfRadioControl.defaultProps = {
  title: undefined,
};

export default PromotedOneOfRadioControl;
