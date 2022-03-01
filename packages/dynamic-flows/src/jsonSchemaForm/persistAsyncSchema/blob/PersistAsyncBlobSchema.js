import { Upload } from '@transferwise/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { isStatus422 } from '../../../common/api/utils';
import { useFetcher } from '../../../common/contexts/fetcherContext';
import { getValidationFailures } from '../../../common/validation/validation-failures';
import ControlFeedback from '../../controlFeedback';
import { mapSchemaToUploadOptions } from '../../schemaFormControl/optionMapper';
import { getIdFromResponse } from '../basic/PersistAsyncBasicSchema';

const PersistAsyncBlobSchema = (props) => {
  const [persistAsyncValidationMessages, setPersistAsyncValidationMessages] = useState({});
  const [persistAsyncValidations, setPersistAsyncValidations] = useState(null);
  const [validations, setValidations] = useState([]);
  const [changed, setChanged] = useState(false);

  const fetcher = useFetcher();
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
          url,
          method,
          fileInputName: props.schema.persistAsync.param,
          headers: {
            'X-Access-Token': 'Tr4n5f3rw153',
          },
        }}
        fetcher={fetcher}
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
  schema: PropTypes.shape({
    type: PropTypes.oneOf(['string', 'number', 'integer', 'boolean']),
    title: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    description: PropTypes.string,
    persistAsync: PropTypes.shape({
      method: PropTypes.string,
      url: PropTypes.string,
      param: PropTypes.string,
      idProperty: PropTypes.string,
      schema: PropTypes.shape({
        maxSize: PropTypes.number,
        type: PropTypes.oneOf(['blob']),
        accepts: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  }).isRequired,
  model: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  errors: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  required: PropTypes.bool,
};

PersistAsyncBlobSchema.defaultProps = {
  errors: null,
  required: false,
};

export default PersistAsyncBlobSchema;
