const basicTypes = new Set(['string', 'number', 'integer', 'boolean']);

export const schemaType = {
  READ_ONLY: 'readOnly',
  PERSIST_ASYNC: 'persistAsync',
  VALIDATION_ASYNC: 'validationAsync',
  OBJECT: 'object',
  PROMOTED_ONE_OF: 'promotedOneOf',
  ONE_OF: 'oneOf',
  ALL_OF: 'allOf',
  BASIC: 'basic',
};

export const isReadOnlySchema = (schema) => !!schema.readOnly && isBasicSchema(schema);

export const isPersistAsyncSchema = (schema) => !!schema.persistAsync;

export const isValidationAsyncSchema = (schema) => !!schema.validationAsync;

export const isObjectSchema = (schema) => schema.type === 'object';

export const isPromotedOneOfSchema = (schema) => !!schema.oneOf && !!schema.promotion;

export const isOneOfSchema = (schema) => !!schema.oneOf;

export const isAllOfSchema = (schema) => !!schema.allOf;

export const isBasicSchema = (schema) =>
  basicTypes.has(schema.type) || !!schema.enum || !!schema.const;

export const getSchemaType = (schema) => {
  // Order of application is important here
  if (isReadOnlySchema(schema)) {
    return schemaType.READ_ONLY;
  }
  if (isPersistAsyncSchema(schema)) {
    return schemaType.PERSIST_ASYNC;
  }
  if (isValidationAsyncSchema(schema)) {
    return schemaType.VALIDATION_ASYNC;
  }
  if (isObjectSchema(schema)) {
    return schemaType.OBJECT;
  }
  if (isPromotedOneOfSchema(schema)) {
    return schemaType.PROMOTED_ONE_OF;
  }
  if (isOneOfSchema(schema)) {
    return schemaType.ONE_OF;
  }
  if (isAllOfSchema(schema)) {
    return schemaType.ALL_OF;
  }
  if (isBasicSchema(schema)) {
    return schemaType.BASIC;
  }
  return null;
};
