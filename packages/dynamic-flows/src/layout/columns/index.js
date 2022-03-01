import PropTypes from 'prop-types';

import DynamicLayout from '..';
import { marginModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicColumns = (props) => {
  const columns = props.component;

  let leftWidth = 'col-md-6';
  let rightWidth = 'col-md-6';

  if (columns.bias === 'left') {
    leftWidth = 'col-md-8';
    rightWidth = 'col-md-4';
  }
  if (columns.bias === 'right') {
    leftWidth = 'col-md-4';
    rightWidth = 'col-md-8';
  }

  return (
    <div className={`${getMarginBottom(columns.margin || 'xs')} row`}>
      <div className={`${leftWidth} m-b-0`}>
        <DynamicLayout
          components={columns.left}
          model={props.model}
          submitted={props.submitted}
          errors={props.errors}
          onModelChange={props.onModelChange}
          onAction={props.onAction}
          onPersistAsync={props.onPersistAsync}
        />
      </div>
      <div className={`${rightWidth} m-b-0`}>
        <DynamicLayout
          components={columns.right}
          model={props.model}
          submitted={props.submitted}
          errors={props.errors}
          onModelChange={props.onModelChange}
          onAction={props.onAction}
          onPersistAsync={props.onPersistAsync}
        />
      </div>
    </div>
  );
};

DynamicColumns.propTypes = {
  component: PropTypes.shape({
    left: PropTypes.arrayOf(PropTypes.shape),
    right: PropTypes.arrayOf(PropTypes.shape),
    margin: marginModel,
    bias: PropTypes.oneOf(['left', 'right']),
  }).isRequired,
  model: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool,
  ]),
  submitted: PropTypes.bool.isRequired,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  onAction: PropTypes.func.isRequired,
  onModelChange: PropTypes.func.isRequired,
  onPersistAsync: PropTypes.func.isRequired,
};

DynamicColumns.defaultProps = {
  model: null,
  errors: null,
};

export default DynamicColumns;
