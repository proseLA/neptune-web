import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import JsonSchemaForm from './JsonSchemaForm';

import simpleSchema from './schemas/simple.json';
import promotedOneOfSchema from './schemas/promotedOneOf.json';
import promotedOneOfCheckboxSchema from './schemas/promotedOneOfCheckbox.json';
import oneOfSchema from './schemas/oneOf.json';
import allOfSchema from './schemas/allOf.json';
import audRecipientSchema from './schemas/audRecipient.json';
import fileUploadPersistAsyncSchema from './schemas/uploadPersistAsync.json';
import currencySchema from './schemas/currency.json';
import validationAsyncSchema from './schemas/validationAsync.json';
import reviewFieldsSchema from './schemas/reviewFields.json';

export default {
  component: JsonSchemaForm,
  title: 'JsonSchemaForm',
};

export const basic = () => {
  const schemas = {
    simple: simpleSchema,
    promotedOneOf: promotedOneOfSchema,
    promotedOneOfCheckbox: promotedOneOfCheckboxSchema,
    oneOf: oneOfSchema,
    allOf: allOfSchema,
    'AUD Recipient': audRecipientSchema,
    'File upload persist async': fileUploadPersistAsyncSchema,
    validationAsync: validationAsyncSchema,
    currency: currencySchema,
    reviewFields: reviewFieldsSchema,
  };

  const schema = select('schema', schemas, reviewFieldsSchema);

  const model = {
    number: 3,
    string: 'hi',
    textarea: 'this is a long text',
    password: '********',
    checkbox: true,
    select: 3,
    radio: 2,
  };

  const stringError = text('error from server', '');
  const errors = { string: stringError };
  const translationsFromProps = {};
  const submitted = boolean('submitted', false);
  const disabled = boolean('disabled', false);

  return (
    <JsonSchemaForm
      schema={schema}
      model={model}
      errors={errors}
      translations={translationsFromProps}
      onChange={action('onChange')}
      submitted={submitted}
      disabled={disabled}
      baseUrl=""
      onPersistAsync={() => {}}
    />
  );
};
