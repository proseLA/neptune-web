import PropTypes from 'prop-types';

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
  component: PropTypes.shape({
    components: PropTypes.arrayOf(PropTypes.shape({})),
    margin: marginModel,
    border: PropTypes.bool,
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
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
  onModelChange: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
  onPersistAsync: PropTypes.func.isRequired,
};

DynamicBox.defaultProps = {
  model: null,
  errors: null,
};

export default DynamicBox;
