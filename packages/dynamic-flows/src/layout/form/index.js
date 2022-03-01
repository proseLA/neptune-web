import PropTypes from 'prop-types';

import JsonSchemaForm from '../../jsonSchemaForm';
import { marginModel, orientationModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicForm = (props) => {
  const form = props.component;

  const onChange = (model, triggerSchema, triggerModel, lastTriggerModel) => {
    props.onModelChange(model, form.schema, triggerModel, triggerSchema, lastTriggerModel);
  };

  return (
    <JsonSchemaForm
      schema={form.schema}
      model={props.model}
      submitted={props.submitted}
      className={getMarginBottom(form.margin || 'lg')}
      errors={props.errors}
      onChange={onChange}
      onPersistAsync={props.onPersistAsync}
    />
  );
};

DynamicForm.propTypes = {
  component: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    schema: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    model: PropTypes.object,
    submitted: false,
    margin: marginModel,
    orientation: orientationModel,
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
  onPersistAsync: PropTypes.func.isRequired,
};

DynamicForm.defaultProps = {
  model: null,
  errors: null,
};

export default DynamicForm;
