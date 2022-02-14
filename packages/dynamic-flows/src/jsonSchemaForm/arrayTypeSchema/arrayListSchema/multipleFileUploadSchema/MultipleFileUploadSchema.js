import { UploadInput } from '@transferwise/components';
import classNames from 'classnames';
import Types from 'prop-types';
import { useState } from 'react';

import { usePersistAsync } from '../../../../common/hooks/usePersistAsync';
import { getArrayValidationFailures } from '../../../../common/validation/validation-failures';
import ControlFeedback from '../../../controlFeedback';

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
          sizeLimit={fileSchemaDescriptor.maxSize}
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

const FileItemSchema = Types.shape({
  type: Types.string,
  format: Types.string,
  accepts: Types.arrayOf(Types.string),
  maxSize: Types.number,
  validationMessages: Types.object,
});

MultipleFileUploadSchema.propTypes = {
  schema: Types.shape({
    title: Types.string,
    type: Types.string.isRequired,
    description: Types.string,
    maxItems: Types.number,
    minItems: Types.number,
    items: Types.shape({
      type: Types.string,
      title: Types.string,
      description: Types.string,
      persistAsync: Types.shape({
        url: Types.string.isRequired,
        method: Types.string,
        param: Types.string.isRequired,
        idProperty: Types.string.isRequired,
        schema: FileItemSchema,
      }),
    }),
    validationMessages: Types.shape({
      maxItems: Types.string,
    }),
  }).isRequired,
  disabled: Types.bool,
  errors: Types.string,
  hideTitle: Types.bool,
  locale: Types.string,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  onChange: Types.func.isRequired,
  onPersistAsync: Types.func,
  required: Types.bool,
  submitted: Types.bool.isRequired,
  translations: Types.shape({}),
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
