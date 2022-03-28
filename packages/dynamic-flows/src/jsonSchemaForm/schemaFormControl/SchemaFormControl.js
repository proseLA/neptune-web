import { isNull, isUndefined } from '@transferwise/neptune-validation';
import PropTypes from 'prop-types';

import { FormControlType } from '../../common';
import { isOneOfSchema } from '../../common/schemaTypes/schemaTypes';
import { getValidModelParts } from '../../common/validation/valid-model';
import FormControl from '../../formControl';

import { mapConstSchemaToOption, mapSchemaToUploadOptions } from './optionMapper';

const isNativeInput = (propsSchemaType) => {
  return propsSchemaType === 'string' || propsSchemaType === 'number';
};

export const getControlType = (schema) => {
  if (schema.control) {
    if (isOneOfSchema(schema) && schema.oneOf.length > 3) {
      return FormControlType.SELECT;
    }
    return schema.control;
  }

  if (schema.enum) {
    return schema.enum.length >= 3 ? 'select' : 'radio';
  }

  if (schema.oneOf) {
    return schema.oneOf.length === 1 || schema.oneOf.length >= 3 ? 'select' : 'radio';
  }
  if (schema.type === 'string') {
    switch (schema.format) {
      case 'date':
        return 'date';
      case 'password':
        return 'password';
      case 'phone':
        return 'tel';
      case 'base64url':
        return 'file';
      default:
        return 'text';
    }
  }
  if (schema.type === 'boolean') {
    return 'checkbox';
  }
  if (schema.type === 'integer') {
    return 'number';
  }

  return schema.type;
};

const getOptions = (schema) => {
  // DEPRECATED: values is a legacy approach, use oneOf.
  if (schema.values) {
    return schema.values;
  }
  if (schema.enum) {
    return schema.enum.map((value) => {
      return { value, label: value };
    });
  }
  if (schema.oneOf) {
    return schema.oneOf.map(mapConstSchemaToOption);
  }
  return null;
};

const SchemaFormControl = (props) => {
  const getSanitisedValue = (value) =>
    isNativeInput(props.schema.type) && (isNull(value) || isUndefined(value)) ? '' : value;

  const onChange = (value) => {
    // If the model does not satisfy the schema propagate null
    props.onChange(getValidModelParts(value, props.schema));
  };
  const controlType = getControlType(props.schema);
  const options = getOptions(props.schema);

  const events = {
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onChange,
  };

  const safeValue = getSanitisedValue(props.value);

  const controlProps = {
    id: props.id,
    name: props.id,
    label: props.schema.title,
    options,
    placeholder: props.schema.placeholder,
    autoComplete: !props.schema.help,
    disabled: props.disabled || props.schema.disabled,
    displayPattern: props.schema.displayFormat,
    uploadProps: mapSchemaToUploadOptions(props.schema),
  };

  return <FormControl type={controlType} value={safeValue} {...events} {...controlProps} />;
};

SchemaFormControl.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  schema: PropTypes.shape({
    type: PropTypes.oneOf(['string', 'number', 'integer', 'boolean']),
    format: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
    placeholder: PropTypes.string,
    help: PropTypes.shape({}),
    displayFormat: PropTypes.string,
    disabled: PropTypes.bool,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
};

SchemaFormControl.defaultProps = {
  value: 'one',
  onFocus: null,
  onBlur: null,
  disabled: false,
};

export default SchemaFormControl;
