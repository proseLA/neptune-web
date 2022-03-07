import { UploadInput } from '@transferwise/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { usePersistAsync } from '../../../../common/hooks/usePersistAsync';
import { getArrayValidationFailures } from '../../../../common/validation/validation-failures';
import ControlFeedback from '../../../controlFeedback';

const ONE_KB_IN_BYTES = 1024;

const useUniqueId = (prefix) => {
  const prefixString = prefix ? `${prefix}-` : '';
  const [id] = useState(() => `${prefixString}${generateRandomValue()}`);
  return id;
};

const MultipleFileUploadSchema = (props) => {
  const [inputChanged, setInputChanged] = useState(false);

  const [files, setFiles] = useState(props.model);
  const performPersistAsync = usePersistAsync(props.schema.items.persistAsync);
  const fileInputName = useUniqueId('multi-upload-input');

  const { onChange, schema } = props;

  const fileSchemaDescriptor = props.schema.items.persistAsync.schema;

  function handleFilesChange(newFiles) {
    setFiles(newFiles);
    const validFiles = getSuccessfullyProcessedFiles(newFiles);

    const data = validFiles.map((file) => file.id);
    onChange(data);
  }

  const handleFileUpload = async (formData) => {
    const userUploadedFile = formData.get(fileInputName);
    setInputChanged(true);

    const isBlobSchema = fileSchemaDescriptor.type === 'blob';
    try {
      const inputValue = isBlobSchema ? userUploadedFile : await toBase64(userUploadedFile);
      const responsePostFileProcessing = await performPersistAsync(inputValue);
      return constructFileObject(responsePostFileProcessing);
    } catch (error) {
      return Promise.reject(constructFileObject(error));
    }
  };

  const validFiles = getSuccessfullyProcessedFiles(files);
  const fileListValidationFailures = getArrayValidationFailures(validFiles, schema);

  const showError =
    Boolean(props.errors) ||
    ((inputChanged || props.submitted) && Boolean(fileListValidationFailures.length));

  const fileSizeLimitInBytes = fileSchemaDescriptor.maxSize;
  const fileSizeLimitInKiloBytes = Math.floor(fileSizeLimitInBytes / ONE_KB_IN_BYTES);

  return (
    <div className={classNames('form-group', { 'has-error': showError })}>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label className="d-block control-label">
        {props.schema.items.title}
        <UploadInput
          multiple
          className="form-control"
          files={files}
          fileInputName={fileInputName}
          fileTypes={fileSchemaDescriptor.accepts}
          sizeLimit={fileSizeLimitInKiloBytes}
          maxFiles={props.schema.maxItems}
          maxFilesErrorMessage={props.schema.validationMessages?.maxItems}
          description={props.schema.items.description}
          disabled={props.disabled}
          onUploadFile={handleFileUpload}
          onDeleteFile={() => Promise.resolve()}
          onFilesChange={handleFilesChange}
        />
        <ControlFeedback
          changed={inputChanged}
          submitted={props.submitted}
          errors={props.errors}
          schema={props.schema}
          validations={fileListValidationFailures}
          focused={false}
          blurred
        />
      </label>
    </div>
  );
};

const FileItemSchema = PropTypes.shape({
  type: PropTypes.string,
  format: PropTypes.string,
  accepts: PropTypes.arrayOf(PropTypes.string),
  maxSize: PropTypes.number,
  validationMessages: PropTypes.object,
});

MultipleFileUploadSchema.propTypes = {
  schema: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    maxItems: PropTypes.number,
    minItems: PropTypes.number,
    items: PropTypes.shape({
      type: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      persistAsync: PropTypes.shape({
        url: PropTypes.string.isRequired,
        method: PropTypes.string,
        param: PropTypes.string.isRequired,
        idProperty: PropTypes.string.isRequired,
        schema: FileItemSchema,
      }),
    }),
    validationMessages: PropTypes.shape({
      maxItems: PropTypes.string,
    }),
  }).isRequired,
  disabled: PropTypes.bool,
  errors: PropTypes.string,
  hideTitle: PropTypes.bool,
  locale: PropTypes.string,
  model: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.shape({}),
  ]),
  onChange: PropTypes.func.isRequired,
  onPersistAsync: PropTypes.func,
  required: PropTypes.bool,
  submitted: PropTypes.bool.isRequired,
  translations: PropTypes.shape({}),
};

MultipleFileUploadSchema.defaultProps = {
  translations: {},
  errors: null,
  required: false,
};

export default MultipleFileUploadSchema;

//Utils - - - - -

//TODO: Refactor: This is duplicate logic as in CameraStep.js
const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', (error) => reject(error));
  });
};

function generateRandomValue() {
  return Math.floor(Math.random() * 10000000);
}

function constructFileObject(response) {
  const isError = response instanceof Error;
  const hasValidData = 'data' in response;
  const isInvalidResponseData = !hasValidData && !isError;

  if (isInvalidResponseData) {
    throw new Error(
      'onFileUpload callback must return an object containing "data" or "error" attributes',
    );
  }

  return {
    id: !isError ? response.data : generateRandomValue(),
    ...(isError ? { message: response.message } : response),
  };
}

function getSuccessfullyProcessedFiles(allFiles) {
  return allFiles.filter((file) => !file.error && file.status === 'succeeded');
}
