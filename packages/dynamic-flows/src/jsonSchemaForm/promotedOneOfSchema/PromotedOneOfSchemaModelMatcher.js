import { getBestMatchingSchemaIndexForModel } from '../oneOfSchema/OneOfSchemaModelMatcher';

export const getSelectionFromModel = (schema, model) => {
  const index = getBestMatchingSchemaIndexForModel(schema, model);
  if (index !== null) {
    return schema.oneOf[index].promoted ? 'promoted' : 'other';
  }
  return null;
};
