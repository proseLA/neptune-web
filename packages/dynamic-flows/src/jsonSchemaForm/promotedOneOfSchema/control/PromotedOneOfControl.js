import PropTypes from 'prop-types';

import PromotedOneOfCheckboxControl from './PromotedOneOfCheckboxControl';
import PromotedOneOfRadioControl from './PromotedOneOfRadioControl';

const PromotedOneOfControl = (props) => {
  const controlType = props.promotion.control || 'radio';

  switch (controlType) {
    case 'radio':
      return <PromotedOneOfRadioControl {...props} />;
    case 'checkbox':
      return <PromotedOneOfCheckboxControl {...props} />;
    default:
      return <></>;
  }
};

PromotedOneOfControl.propTypes = {
  title: PropTypes.string,
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

PromotedOneOfControl.defaultProps = {
  title: undefined,
};

export default PromotedOneOfControl;
