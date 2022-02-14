import { select } from '@storybook/addon-knobs';

import JsonSchemaForm from '../JsonSchemaForm';
import allOfSchema from '../schemas/allOf.json';
import audRecipientSchema from '../schemas/audRecipient.json';
import currencySchema from '../schemas/currency.json';
import oneOfSchema from '../schemas/oneOf.json';
import oneOfTabsSchema from '../schemas/oneOfTabs.json';
import promotedOneOfSchema from '../schemas/promotedOneOf.json';
import promotedOneOfCheckboxSchema from '../schemas/promotedOneOfCheckbox.json';
import simpleSchema from '../schemas/simple.json';
import fileUploadPersistAsyncSchema from '../schemas/uploadPersistAsync.json';
import validationAsyncSchema from '../schemas/validationAsync.json';

import { JsonSchemaFormWrapper } from './utils';

export default {
  component: JsonSchemaForm,
  title: 'JsonSchemaForm/Basic',
};

export const basic = () => {
  const schemas = {
    simple: simpleSchema,
    promotedOneOf: promotedOneOfSchema,
    promotedOneOfCheckbox: promotedOneOfCheckboxSchema,
    oneOf: oneOfSchema,
    oneOfTabs: oneOfTabsSchema,
    allOf: allOfSchema,
    'AUD Recipient': audRecipientSchema,
    'File upload persist async': fileUploadPersistAsyncSchema,
    validationAsync: validationAsyncSchema,
    currency: currencySchema,
  };

  const schema = select('schema', schemas, simpleSchema);

  return <JsonSchemaFormWrapper schema={schema} initialModel={{}} />;
};
