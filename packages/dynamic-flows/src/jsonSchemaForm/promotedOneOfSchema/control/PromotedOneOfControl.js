import Types from 'prop-types';

import PromotedOneOfRadioControl from './PromotedOneOfRadioControl';
import PromotedOneOfCheckboxControl from './PromotedOneOfCheckboxControl';

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
  title: Types.string,
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

PromotedOneOfControl.defaultProps = {
  title: undefined,
};

export default PromotedOneOfControl;
