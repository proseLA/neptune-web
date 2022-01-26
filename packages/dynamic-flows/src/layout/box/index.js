import Types from 'prop-types';

import DynamicLayout from '..';
import { marginModel } from '../models';
import { getMarginBottom } from '../utils';

const getBorderClass = (border) => {
  return border ? ' well p-b-0' : '';
};

const getBoxWidthClasses = (component) => {
  switch (component.width) {
    case 'xs':
      return ' col-md-4 col-md-offset-4';
    case 'sm':
      return ' col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4';
    case 'md':
      return ' col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3';
    case 'lg':
      return ' col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2';
    case 'xl':
    default:
      return ' col-xs-12';
  }
};

const DynamicBox = (props) => {
  const box = props.component;
  const margin = getMarginBottom(box.margin || box.border ? 'lg' : 'xs');

  if (!box.width || box.width === 'xl') {
    return (
      <div className={margin + getBorderClass(box.border)}>
        <DynamicLayout
          components={box.components}
          model={props.model}
          submitted={props.submitted}
          disabled={props.disabled}
          errors={props.errors}
          onModelChange={props.onModelChange}
          onAction={props.onAction}
          onPersistAsync={props.onPersistAsync}
        />
      </div>
    );
  }

  return (
    <div className="row">
      <div className={margin + getBoxWidthClasses(box)}>
        <div className={getBorderClass(box.border)}>
          <DynamicLayout
            components={box.components}
            model={props.model}
            submitted={props.submitted}
            disabled={props.disabled}
            errors={props.errors}
            onModelChange={props.onModelChange}
            onAction={props.onAction}
            onPersistAsync={props.onPersistAsync}
          />
        </div>
      </div>
    </div>
  );
};

DynamicBox.propTypes = {
  component: Types.shape({
    components: Types.arrayOf(Types.shape({})),
    margin: marginModel,
    border: Types.bool,
    width: Types.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.object, Types.array, Types.bool]),
  submitted: Types.bool.isRequired,
  disabled: Types.bool,
  errors: Types.oneOfType([Types.string, Types.object, Types.array]),
  onModelChange: Types.func.isRequired,
  onAction: Types.func.isRequired,
  onPersistAsync: Types.func.isRequired,
};

DynamicBox.defaultProps = {
  model: null,
  errors: null,
};

export default DynamicBox;
