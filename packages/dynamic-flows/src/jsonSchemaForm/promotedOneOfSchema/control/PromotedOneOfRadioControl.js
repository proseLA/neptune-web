import { RadioGroup } from '@transferwise/components';
import PropTypes from 'prop-types';
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
  title: PropTypes.string,
  promotedOneOf: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    icon: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  promotion: PropTypes.shape({
    default: PropTypes.string,
    checkedMeans: PropTypes.string,
    control: PropTypes.string,
    promoted: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    other: PropTypes.shape({
      title: PropTypes.string,
      heading: PropTypes.shape({
        text: PropTypes.string,
      }),
      description: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
      icon: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  }).isRequired,
  selection: PropTypes.string.isRequired,
  setSelection: PropTypes.func.isRequired,
};

PromotedOneOfRadioControl.defaultProps = {
  title: undefined,
};

export default PromotedOneOfRadioControl;
