import { Upload } from '@transferwise/components';
import classNames from 'classnames';
import Types from 'prop-types';
import { useEffect, useState } from 'react';

import { isStatus422 } from '../../../common/api/utils';
import { useBaseUrl } from '../../../common/contexts/baseUrlContext/BaseUrlContext';
import { getValidationFailures } from '../../../common/validation/validation-failures';
import ControlFeedback from '../../controlFeedback';
import { mapSchemaToUploadOptions } from '../../schemaFormControl/optionMapper';
import { getIdFromResponse } from '../basic/PersistAsyncBasicSchema';

const PersistAsyncBlobSchema = (props) => {
  const baseUrl = useBaseUrl();

  const [persistAsyncValidationMessages, setPersistAsyncValidationMessages] = useState({});
  const [persistAsyncValidations, setPersistAsyncValidations] = useState(null);
  const [validations, setValidations] = useState([]);
  const [changed, setChanged] = useState(false);

  const refreshValidations = () => {
    if (props.submitted) {
      setValidations(getValidationFailures(props.model, props.schema, props.required));
    }
  };

  useEffect(refreshValidations, [props.model, props.submitted]);

  const onSuccess = async (httpResponse, fileName) => {
    const jsonResponse = await httpResponse.json();
    const id = getIdFromResponse(props.schema.persistAsync.idProperty, jsonResponse);
    props.onChange(id, props.schema, id);
    setChanged(true);
  };
  const onFailure = async (errorResponse) => {
    if (errorResponse.response && isStatus422(errorResponse.response.status)) {
      const jsonResponse = await errorResponse.response.json();
      setPersistAsyncValidationMessages(jsonResponse.validation || {});
      setPersistAsyncValidations([props.schema.persistAsync.param]);
    }
    props.onChange(null, props.schema, null);
    setChanged(true);
  };
  const onCancel = () => {
    setPersistAsyncValidations(null);
    props.onChange(null, props.schema, null);
    setChanged(true);
  };

  const { url, method } = props.schema.persistAsync;

  const combinedValidations = persistAsyncValidations || validations;
  const formGroupClasses = {
    'form-group': true,
    'has-error': (props.submitted || changed) && !!combinedValidations.length,
  };

  return (
    <div className={classNames(formGroupClasses)}>
      <Upload
        animationDelay={0}
        maxSize={props.schema.persistAsync.schema.maxSize}
        usLabel={props.schema.title}
        usPlaceholder={props.schema.description}
        httpOptions={{
          url: baseUrl + url,
          method,
          fileInputName: props.schema.persistAsync.param,
          headers: {
            'X-Access-Token': 'Tr4n5f3rw153',
          },
        }}
        onSuccess={onSuccess}
        onFailure={onFailure}
        onCancel={onCancel}
        {...mapSchemaToUploadOptions(props.schema.persistAsync.schema)}
      />
      <ControlFeedback
        blurred
        focused={false}
        changed={changed}
        submitted={props.submitted}
        errors={props.errors}
        schema={props.schema}
        validations={combinedValidations}
        validationMessages={{
          required: 'Value is required...',
          ...persistAsyncValidationMessages,
        }}
      />
    </div>
  );
};

PersistAsyncBlobSchema.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    title: Types.string,
    disabled: Types.bool,
    hidden: Types.bool,
    description: Types.string,
    persistAsync: Types.shape({
      method: Types.string,
      url: Types.string,
      param: Types.string,
      idProperty: Types.string,
      schema: Types.shape({
        maxSize: Types.number,
        type: Types.oneOf(['blob']),
        accepts: Types.arrayOf(Types.string),
      }),
    }),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool]),
  errors: Types.string,
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  required: Types.bool,
};

PersistAsyncBlobSchema.defaultProps = {
  errors: null,
  required: false,
};

export default PersistAsyncBlobSchema;
