import { UploadInput } from '@transferwise/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useIntl } from 'react-intl';

import { usePersistAsync } from '../../../../common/hooks/usePersistAsync';
import { useUniqueId } from '../../../../common/hooks/useUniqueId';
import CommonMessages from '../../../../common/messages';
import { toBase64, toKilobytes } from '../../../../common/utils/file-utils';
import { getArrayValidationFailures } from '../../../../common/validation/validation-failures';
import ControlFeedback from '../../../controlFeedback';

import MultiFileUploadMessages from './MultipleFileUploadSchema.messages';

const MultipleFileUploadSchema = (props) => {
  const [inputChanged, setInputChanged] = useState(false);

  const [files, setFiles] = useState(() => convertFileIdsToComponentFileObjects(props.model));
  const performPersistAsync = usePersistAsync(props.schema.items.persistAsync);
  const uid = useUniqueId('multi-upload-input');

  const { onChange, schema } = props;

  const fileSchemaDescriptor = props.schema.items.persistAsync.schema;

  function handleFilesChange(newFiles) {
    setFiles(newFiles);
    const validFiles = getSuccessfullyProcessedFiles(newFiles);

    const data = validFiles.map((file) => file.id);
    onChange(data);
  }

  const handleFileUpload = async (formData) => {
    const userUploadedFile = formData.get(uid);
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

  const defaultErrorMessages = useFormattedDefaultErrorMessages(props.schema);

  function getValidationMessages() {
    const { minItems, maxItems } = props.schema;
    return {
      ...(props.required && { required: defaultErrorMessages.requiredMessage }),
      ...(minItems && { minItems: defaultErrorMessages.minItemsErrorMessage }),
      ...(maxItems && { maxItems: defaultErrorMessages.maxItemsErrorMessage }),
    };
  }

  const validFiles = getSuccessfullyProcessedFiles(files);
  const fileIds = validFiles.map((file) => file.id);
  const fileListValidationFailures = getArrayValidationFailures(fileIds, schema, props.required);

  const showError =
    Boolean(props.errors) ||
    ((inputChanged || props.submitted) && Boolean(fileListValidationFailures.length));

  return (
    <div className={classNames('form-group', { 'has-error': showError })}>
      <label className="d-block control-label" htmlFor={uid}>
        {props.schema.title}
      </label>
      <UploadInput
        multiple
        className="form-control"
        files={files}
        fileInputName={uid}
        id={uid}
        fileTypes={fileSchemaDescriptor.accepts}
        sizeLimit={toKilobytes(fileSchemaDescriptor.maxSize)}
        sizeLimitErrorMessage={
          fileSchemaDescriptor.validationMessages?.maxSize ||
          defaultErrorMessages.maxFileSizeErrorMessage
        }
        maxFiles={props.schema.maxItems}
        maxFilesErrorMessage={
          props.schema.validationMessages?.maxItems || defaultErrorMessages.maxItemsErrorMessage
        }
        uploadButtonTitle={fileSchemaDescriptor.title}
        description={fileSchemaDescriptor.description}
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
        validationMessages={getValidationMessages()}
        focused={false}
        blurred
      />
    </div>
  );
};

const FileItemSchema = PropTypes.shape({
  type: PropTypes.string,
  format: PropTypes.string,
  accepts: PropTypes.arrayOf(PropTypes.string),
  maxSize: PropTypes.number,
  validationMessages: PropTypes.object,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
  model: PropTypes.arrayOf(PropTypes.string),
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

function generateRandomId() {
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
    id: !isError ? response.data : generateRandomId(),
    ...(isError ? { message: response.message } : response),
  };
}

function getSuccessfullyProcessedFiles(allFiles) {
  return allFiles.filter((file) => !file.error && file.status === 'succeeded');
}
function convertFileIdsToComponentFileObjects(fileIds) {
  return fileIds.map((id) => ({ id, status: 'succeeded' }));
}

function useFormattedDefaultErrorMessages(schema) {
  const { formatMessage } = useIntl();

  const { minItems, maxItems } = schema;
  const { maxFileSizeError, maxItemsError, minItemsError } = MultiFileUploadMessages;

  return {
    maxFileSizeErrorMessage: formatMessage(maxFileSizeError),
    maxItemsErrorMessage: formatMessage(maxItemsError, { maxItems }),
    minItemsErrorMessage: formatMessage(minItemsError, { minItems }),
    requiredMessage: formatMessage(CommonMessages.required),
  };
}
