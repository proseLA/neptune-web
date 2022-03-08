import classNames from 'classnames';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { getValidModelParts } from '../../common/validation/valid-model';
import DynamicAlert from '../../layout/alert';
import GenericSchema from '../genericSchema';

const getSchemaColumnClasses = (width) => {
  return {
    'col-xs-12': true,
    'col-sm-6': width === 'md',
    'col-sm-4': width === 'sm',
  };
};

const ObjectSchema = (props) => {
  const [model, setModel] = useState({ ...(props.model || {}) });

  const onChangeProperty = (
    propertyName,
    propertyModel,
    triggerSchema,
    triggerModel,
    lastTriggerModel,
  ) => {
    if (propertyModel !== null) {
      model[propertyName] = propertyModel;
    } else {
      delete model[propertyName];
    }
    setModel(model);
    props.onChange(model, triggerSchema, triggerModel, lastTriggerModel);
  };

  const isRequired = (propertyName) =>
    props.schema.required && props.schema.required.includes(propertyName);

  useEffect(() => {
    // When the schema changes, only retain valid parts of the model
    const newModel = getValidModelParts(model, props.schema);
    setModel(newModel);
    if (!isEqual(newModel, model)) {
      const triggerModel = newModel;
      props.onChange(newModel, props.schema, triggerModel);
    }
  }, [props.schema]);

  const allorderedPropertiesSet = new Set([
    ...(props.schema.displayOrder || []),
    ...Object.keys(props.schema.properties),
  ]);

  const isPropertyDefined = (propertyName) =>
    typeof props.schema.properties[propertyName] !== 'undefined';

  const orderedPropertyNames = [...allorderedPropertiesSet].filter(isPropertyDefined);

  return (
    <fieldset>
      {props.schema.title && !props.hideTitle && <legend> {props.schema.title} </legend>}
      {props.schema.description && !props.hideTitle && <p> {props.schema.description} </p>}

      {props.schema.alert && <DynamicAlert component={props.schema.alert} />}

      <div className="row">
        {orderedPropertyNames.map((propertyName) => (
          <div
            key={propertyName}
            className={classNames(
              getSchemaColumnClasses(props.schema.properties[propertyName].width),
            )}
          >
            <GenericSchema
              schema={props.schema.properties[propertyName]}
              model={props.model && props.model[propertyName]}
              errors={props.errors && props.errors[propertyName]}
              locale={props.locale}
              translations={props.translations}
              submitted={props.submitted}
              required={isRequired(propertyName)}
              disabled={props.disabled}
              onChange={(newModel, triggerSchema, triggerModel, lastTriggerModel) =>
                onChangeProperty(
                  propertyName,
                  newModel,
                  triggerSchema,
                  triggerModel,
                  lastTriggerModel,
                )
              }
              onPersistAsync={props.onPersistAsync}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
};

ObjectSchema.propTypes = {
  schema: PropTypes.shape({
    type: PropTypes.oneOf(['object']).isRequired,
    alert: PropTypes.shape({
      context: PropTypes.string,
      markdown: PropTypes.string,
    }),
    properties: PropTypes.shape({}).isRequired,
    required: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    description: PropTypes.string,
    width: PropTypes.oneOf(['sm', 'md', 'lg']),
    displayOrder: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  model: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  locale: PropTypes.string,
  translations: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  hideTitle: PropTypes.bool,
  disabled: PropTypes.bool,
  onPersistAsync: PropTypes.func.isRequired,
};

ObjectSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  hideTitle: false,
  disabled: false,
};

export default ObjectSchema;
