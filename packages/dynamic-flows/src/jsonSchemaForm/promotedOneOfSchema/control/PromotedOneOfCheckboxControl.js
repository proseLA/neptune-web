import React from 'react';
import Types from 'prop-types';
import { Checkbox } from '@transferwise/components';

const PromotedOneOfCheckboxControl = (props) => {
  const { selection, setSelection } = props;
  const { promoted, other, checkedMeans } = props.promotion;
  const title =
    checkedMeans === 'other' ? other.title : promoted?.title || props.promotedOneOf.title;
  const selectionWhenChecked = checkedMeans === 'other' ? 'other' : 'promoted';
  const selectionWhenUnchecked = checkedMeans === 'other' ? 'promoted' : 'other';

  const checked = selection === selectionWhenChecked;

  const toggleSelection = () => {
    setSelection(checked ? selectionWhenUnchecked : selectionWhenChecked);
  };

  return (
    <div className="form-group">
      <Checkbox label={title} onChange={toggleSelection} checked={checked} />
    </div>
  );
};

PromotedOneOfCheckboxControl.propTypes = {
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

PromotedOneOfCheckboxControl.defaultProps = {};

export default PromotedOneOfCheckboxControl;
