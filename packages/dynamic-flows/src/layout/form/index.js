import Types from 'prop-types';

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
  component: Types.shape({
    // eslint-disable-next-line react/forbid-prop-types
    schema: Types.object,
    // eslint-disable-next-line react/forbid-prop-types
    model: Types.object,
    submitted: false,
    margin: marginModel,
    orientation: orientationModel,
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.object, Types.array, Types.bool]),
  submitted: Types.bool.isRequired,
  errors: Types.oneOfType([Types.string, Types.object, Types.array]),
  onModelChange: Types.func.isRequired,
  onPersistAsync: Types.func.isRequired,
};

DynamicForm.defaultProps = {
  model: null,
  errors: null,
};

export default DynamicForm;
