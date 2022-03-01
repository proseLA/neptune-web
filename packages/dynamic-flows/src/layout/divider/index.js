import PropTypes from 'prop-types';

import { marginModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicDivider = ({ component }) => {
  const margin = getMarginBottom(component.margin);
  const className = `m-t-0 ${margin}`;

  return <hr className={className} />;
};

DynamicDivider.propTypes = {
  component: PropTypes.shape({
    margin: marginModel,
  }).isRequired,
};

export default DynamicDivider;
