import { Checkbox } from '@transferwise/components';
import PropTypes from 'prop-types';

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
      <Checkbox label={title} checked={checked} onChange={toggleSelection} />
    </div>
  );
};

PromotedOneOfCheckboxControl.propTypes = {
  promotedOneOf: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  promotion: PropTypes.shape({
    default: PropTypes.string,
    checkedMeans: PropTypes.string,
    control: PropTypes.string,
    promoted: PropTypes.shape({
      title: PropTypes.string,
    }),
    other: PropTypes.shape({
      title: PropTypes.string,
      heading: PropTypes.shape({
        text: PropTypes.string,
      }),
      description: PropTypes.string,
    }),
  }).isRequired,
  selection: PropTypes.string.isRequired,
  setSelection: PropTypes.func.isRequired,
};

PromotedOneOfCheckboxControl.defaultProps = {};

export default PromotedOneOfCheckboxControl;
