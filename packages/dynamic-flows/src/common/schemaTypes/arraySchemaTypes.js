import { isArray } from '@transferwise/neptune-validation';

import { FieldFormats, FieldTypes } from '../../field/Field';

export const ArraySchemaVariants = {
  TUPLE: 'TUPLE',
  LIST: 'LIST',
};

export const ArrayItemVariants = {
  FILE: 'FILE',
};

function isFileItemSchema(itemObject) {
  if (!itemObject.persistAsync) {
    return false;
  }
  const { schema } = itemObject.persistAsync;

  const isBlob = schema.type === FieldTypes.BLOB;
  const isBase64FileSchema =
    schema.type === FieldTypes.STRING && schema.format === FieldFormats.BASE_64_URL;

  return isBase64FileSchema || isBlob;
}

export const getListItemType = (schema) => {
  if (isTupleArraySchema(schema)) {
    return null;
  }

  if (isFileItemSchema(schema.items)) {
    return ArrayItemVariants.FILE;
  }

  return null;
};

function isTupleArraySchema(schema) {
  const schemaItems = schema.items;
  return isArray(schemaItems);
}

export const getArrayVariant = (schema) => {
  const { TUPLE, LIST } = ArraySchemaVariants;

  if (!isArraySchema(schema)) {
    return null;
  }

  if (isTupleArraySchema(schema)) {
    return TUPLE;
  }

  return LIST;
};

export function isArraySchema(schema) {
  return schema.type === 'array';
}
