import { isArray, isEmpty } from '@transferwise/neptune-validation';
import classNames from 'classnames';
import Types from 'prop-types';
import { useEffect, useState } from 'react';

import { isValidSchema } from '../../common/validation/schema-validators';
import { getValidModelParts } from '../../common/validation/valid-model';
import { getValidationFailures } from '../../common/validation/validation-failures';
import DynamicAlert from '../../layout/alert';
import ControlFeedback from '../controlFeedback';
import GenericSchema from '../genericSchema';
import Help from '../help';
import SchemaFormControl from '../schemaFormControl';

import {
  getBestMatchingSchemaIndexForModel,
  isConstSchema,
  isNoNConstSchema,
} from './OneOfSchemaModelMatcher';

const getModelPartsForSchemas = (model, schemas) => {
  return schemas.map((schema) => getValidModelParts(model, schema));
};

const getValidIndexFromModel = (schema, model) => {
  return schema.oneOf.findIndex((childSchema) => isValidSchema(model, childSchema));
};

const getValidIndexFromDefault = (schema) => {
  return schema.oneOf.findIndex((childSchema) => isValidSchema(schema.default, childSchema));
};

const generateId = () => {
  return String(Math.floor(100000000 * Math.random()));
};

// We want our model to be the index, so alter the oneOf schemas to be a const
const mapOneOfToConst = (schema, index) => {
  return {
    title: schema.title,
    description: schema.description,
    const: index,
    disabled: schema.disabled,
    icon: schema.icon,
    image: schema.image,
  };
};

const mapSchemas = (schema) => {
  return {
    ...schema,
    oneOf: schema.oneOf.map(mapOneOfToConst),
  };
};

const errorsToString = (errors) => {
  // When oneOf represents a select, errors should be of type string
  if (typeof errors === 'string') {
    return errors;
  }
  return null;
};

const OneOfSchema = (props) => {
  const getActiveSchemaIndex = (schema, model) => {
    const indexFromModel = getValidIndexFromModel(schema, model);
    // If our model satisfies one of the schemas, use that schema.
    if (indexFromModel >= 0) {
      return indexFromModel;
    }

    // If we have a non-const oneOf and there's only one, active index must be the first one
    if (schema.oneOf.length === 1 && isNoNConstSchema(schema.oneOf[0])) {
      return 0;
    }

    if (isConstSchema(schema.oneOf[0])) {
      const indexFromDefault = getValidIndexFromDefault(schema);
      // If the default value satisfies one of the schemas, use that schema.
      if (indexFromDefault >= 0) {
        return indexFromDefault;
      }
    }

    if (model !== null && typeof model === 'object' && Object.keys(model).length >= 1) {
      // Even if the model does not satisfy any of the schemas, it may be closer to one of them.
      return getBestMatchingSchemaIndexForModel(schema, model);
    }

    // Otherwise do not default
    return null;
  };

  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [validations, setValidations] = useState(
    getValidationFailures(props.model, props.schema, props.required),
  );
  const [id, setId] = useState('');
  const [schemaIndex, setSchemaIndex] = useState(getActiveSchemaIndex(props.schema, props.model));
  const [models, setModels] = useState(getModelPartsForSchemas(props.model, props.schema.oneOf));

  // When the schema we receive from parent changes
  useEffect(() => {
    const modelIndex = getValidIndexFromModel(props.schema, props.model);
    const defaultIndex = getValidIndexFromDefault(props.schema);
    if (modelIndex === -1 && defaultIndex >= 0) {
      onChooseNewSchema(defaultIndex);
    }

    setId(generateId());
  }, [props.schema]);

  if (!isArray(props.schema.oneOf)) {
    // eslint-disable-next-line no-console
    console.error('Incorrect format', props.schema);
    return '';
  }

  const onChildModelChange = (index, model, triggerSchema, triggerModel, lastTriggerModel) => {
    models[index] = model;
    setModels(models);
    setChanged(true);
    props.onChange(model, triggerSchema, triggerModel, lastTriggerModel);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
    setBlurred(true);
  };

  const onChooseNewSchema = (index) => {
    setSchemaIndex(index);

    const newSchema = props.schema.oneOf[index];

    if (isConstSchema(newSchema)) {
      // If new schema is a const we want to share the parent schema, not the const
      const model = newSchema.const || newSchema.enum[0];
      props.onChange(model, props.schema, model);

      // Apply validations for the change
      setValidations(getValidationFailures(newSchema.const, props.schema, props.required));
    } else {
      props.onChange(models[index], newSchema, models[index]);
    }
  };

  const schemaForSelect = mapSchemas(props.schema);

  const formGroupClasses = {
    'form-group': true,
    'has-error':
      (!changed && props.errors && !isEmpty(props.errors)) ||
      ((props.submitted || (changed && blurred)) && validations.length),
  };

  const hasHelp = !!props.schema.help;

  return (
    <>
      {(props.schema.oneOf.length > 1 || isConstSchema(props.schema.oneOf[0])) && (
        <>
          <div className={classNames(formGroupClasses)}>
            {props.schema.title && (
              <div className="d-inline-block">
                <label className="control-label d-inline" htmlFor={id}>
                  {props.schema.title}
                </label>
                {hasHelp && <Help help={props.schema.help} />}
              </div>
            )}
            {!props.schema.title && hasHelp && <Help help={props.schema.help} />}
            <SchemaFormControl
              id={id}
              schema={schemaForSelect}
              value={schemaIndex}
              translations={props.translations}
              locale={props.locale}
              disabled={props.disabled}
              onChange={onChooseNewSchema}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <ControlFeedback
              changed={changed}
              focused={focused}
              blurred={blurred}
              submitted={props.submitted}
              errors={errorsToString(props.errors)}
              schema={props.schema}
              validations={validations}
            />
          </div>
          {props.schema.alert && <DynamicAlert component={props.schema.alert} />}
        </>
      )}

      {isNoNConstSchema(props.schema.oneOf[schemaIndex]) && (
        <GenericSchema
          schema={props.schema.oneOf[schemaIndex]}
          model={models[schemaIndex]}
          errors={props.errors}
          locale={props.locale}
          translations={props.translations}
          submitted={props.submitted}
          hideTitle
          disabled={props.disabled}
          onChange={(model, triggerSchema, triggerModel, lastTriggerModel) =>
            onChildModelChange(schemaIndex, model, triggerSchema, triggerModel, lastTriggerModel)
          }
          onPersistAsync={props.onPersistAsync}
        />
      )}
    </>
  );
};

OneOfSchema.propTypes = {
  schema: Types.shape({
    title: Types.string,
    alert: Types.shape({
      context: Types.string,
      markdown: Types.string,
    }),
    control: Types.string,
    placeholder: Types.string,
    help: Types.shape({ markdown: Types.string }),
    oneOf: Types.arrayOf(Types.object).isRequired,
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  required: Types.bool,
  disabled: Types.bool,
  onPersistAsync: Types.func.isRequired,
};

OneOfSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  required: false,
  translations: {},
  disabled: false,
};

export default OneOfSchema;
