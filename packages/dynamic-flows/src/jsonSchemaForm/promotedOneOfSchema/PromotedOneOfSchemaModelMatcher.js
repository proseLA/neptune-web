import { isValidSchema } from '@transferwise/neptune-validation';

export const getSelectionFromModel = (schema, model) => {
  const matchingSchemas = schema.oneOf.filter((childSchema) => isValidSchema(model, childSchema));
  if (matchingSchemas.length === 1) {
    if (matchingSchemas[0].promoted) {
      return 'promoted';
    }
    return 'other';
  }

  return null;
};
