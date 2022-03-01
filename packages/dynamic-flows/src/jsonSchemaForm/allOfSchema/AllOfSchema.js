import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { getValidModelParts } from '../../common/validation/valid-model';
import GenericSchema from '../genericSchema';

const splitModel = (model, schemas) => {
  // If we receive a model, break it down to parts valid for each schema
  return schemas.map((schema) => getValidModelParts(model, schema) || {});
};

const combineModels = (models) => {
  return models.reduce((current, combined) => {
    return { ...combined, ...current };
  }, {});
};

const getSchemaColumnClasses = (width) => {
  return {
    'col-xs-12': true,
    'col-sm-6': width === 'md',
    'col-sm-4': width === 'sm',
  };
};

const AllOfSchema = (props) => {
  const onChangeModelIndex = (index, model, triggerSchema, triggerModel, lastTriggerModel) => {
    const modelSchema = props.schema.allOf[index];
    models[index] = getValidModelParts(model, modelSchema);
    setModels(models);
    props.onChange(combineModels(models), triggerSchema, triggerModel, lastTriggerModel);
  };

  const [models, setModels] = useState(splitModel(props.model, props.schema.allOf));

  return (
    <>
      {props.schema.title && <h3 className="page-header">{props.schema.title}</h3>}
      {props.schema.description && <p>{props.schema.description}</p>}
      <div className="row">
        {props.schema.allOf.map((schema, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={classNames(getSchemaColumnClasses(schema.width))}>
            <GenericSchema
              schema={schema}
              model={models[index]}
              errors={props.errors}
              locale={props.locale}
              translations={props.translations}
              submitted={props.submitted}
              disabled={props.disabled}
              onChange={(model, triggerSchema, triggerModel, lastTriggerModel) =>
                onChangeModelIndex(index, model, triggerSchema, triggerModel, lastTriggerModel)
              }
              onPersistAsync={props.onPersistAsync}
            />
          </div>
        ))}
      </div>
    </>
  );
};

AllOfSchema.propTypes = {
  schema: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    allOf: PropTypes.arrayOf(PropTypes.object).isRequired,
    width: PropTypes.string,
  }).isRequired,
  model: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.shape({}),
  ]),
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.shape({})]),
  locale: PropTypes.string,
  translations: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onPersistAsync: PropTypes.func.isRequired,
};

AllOfSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  disabled: false,
};

export default AllOfSchema;
