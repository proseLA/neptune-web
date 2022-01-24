import Types from 'prop-types';

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
  component: Types.shape({
    left: Types.arrayOf(Types.shape),
    right: Types.arrayOf(Types.shape),
    margin: marginModel,
    bias: Types.oneOf(['left', 'right']),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.object, Types.array, Types.bool]),
  submitted: Types.bool.isRequired,
  errors: Types.oneOfType([Types.string, Types.object, Types.array]),
  onAction: Types.func.isRequired,
  onModelChange: Types.func.isRequired,
  onPersistAsync: Types.func.isRequired,
};

DynamicColumns.defaultProps = {
  model: null,
  errors: null,
};

export default DynamicColumns;
