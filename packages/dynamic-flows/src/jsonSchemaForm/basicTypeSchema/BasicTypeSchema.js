import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { getValidModelParts } from '../../common/validation/valid-model';
import { getValidationFailures } from '../../common/validation/validation-failures';
import DynamicAlert from '../../layout/alert';
import ControlFeedback from '../controlFeedback';
import Help from '../help';
import SchemaFormControl from '../schemaFormControl';

const generateId = () => {
  return String(Math.floor(100000000 * Math.random()));
};

const BasicTypeSchema = (props) => {
  const onChange = (newModel) => {
    setChanged(true);
    setModelAndBroadcast(sanitiseModel(newModel));
  };

  const getValidationKeys = (newModel) =>
    getValidationFailures(newModel, props.schema, props.required);

  const setModelAndBroadcast = (newModel) => {
    setModel(newModel);
    const validationKeys = getValidationKeys(newModel);
    setValidations(validationKeys);

    const broadcastModel = newModel;

    setLastModel(broadcastModel);

    if (broadcastModel !== lastModel) {
      props.onChange(broadcastModel, props.schema, broadcastModel, lastModel);
    }
  };

  const sanitiseModel = (newModel) => getValidModelParts(newModel, props.schema);

  const onFocus = () => setFocused(true);
  const onBlur = () => {
    setFocused(false);
    setBlurred(true);
    if (props.onBlur) {
      props.onBlur();
    }
  };

  const [id, setId] = useState('');
  const [model, setModel] = useState(props.model);
  const [lastModel, setLastModel] = useState(props.model);
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [validations, setValidations] = useState([]);

  const onSchemaChange = () => {
    // if no model, change to the default, only run this when the schema changes
    if (!model && props.schema.default) {
      setModelAndBroadcast(props.schema.default);
    }

    if (props.schema.const) {
      setModelAndBroadcast(props.schema.const);
    }

    if (props.schema.enum && props.schema.enum.length === 1) {
      setModelAndBroadcast(props.schema.enum[0]);
    }

    setId(generateId());
  };

  const refreshValidations = () => {
    setValidations(getValidationKeys(model));
  };

  const isConst = props.schema.const || (props.schema.enum && props.schema.enum.length === 1);
  const isHidden = props.schema.hidden || isConst;

  useEffect(onSchemaChange, [props.schema]);
  useEffect(refreshValidations, [props.model, props.submitted]);

  const formGroupClasses = {
    'form-group': true,
    'has-error':
      ((props.submitted || !changed) && !!props.errors) ||
      ((props.submitted || (changed && blurred)) && !!validations.length),
    'has-info': (focused && !!props.schema.description) || !!props.validationAsyncSuccessMessage,
  };

  const showLabel = props.schema.format !== 'file' && props.schema.type !== 'boolean';

  const hasHelp = !!props.schema.help;

  return (
    !isHidden && (
      <>
        {props.schema.alert && <DynamicAlert component={props.schema.alert} />}
        <div className={classNames(formGroupClasses)}>
          {showLabel && (
            <div className="d-inline-block">
              <label className="control-label d-inline" htmlFor={id}>
                {props.schema.title}
              </label>
              {hasHelp && <Help help={props.schema.help} />}
            </div>
          )}
          {!showLabel && hasHelp && <Help help={props.schema.help} />}
          <SchemaFormControl
            id={id}
            schema={props.schema}
            value={model}
            disabled={props.disabled}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <ControlFeedback
            changed={changed}
            focused={focused}
            blurred={blurred}
            submitted={props.submitted}
            errors={props.errors}
            schema={props.schema}
            validations={validations}
            validationAsyncSuccessMessage={props.validationAsyncSuccessMessage}
          />
        </div>
      </>
    )
  );
};

BasicTypeSchema.propTypes = {
  schema: PropTypes.shape({
    type: PropTypes.oneOf(['string', 'number', 'integer', 'boolean']),
    alert: PropTypes.shape({
      context: PropTypes.string,
      markdown: PropTypes.string,
    }),
    enum: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    ),
    const: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    format: PropTypes.string,
    title: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.shape({})),
    default: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    help: PropTypes.shape({ markdown: PropTypes.string }),
    description: PropTypes.string,
  }).isRequired,
  model: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  errors: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  validationAsyncSuccessMessage: PropTypes.string,
};

BasicTypeSchema.defaultProps = {
  model: null,
  errors: null,
  required: false,
  disabled: false,
  onBlur: null,
  validationAsyncSuccessMessage: null,
};

export default BasicTypeSchema;
