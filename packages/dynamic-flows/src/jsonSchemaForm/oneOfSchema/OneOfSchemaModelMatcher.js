const getSchemaProperties = (childSchema) => {
  return childSchema.properties !== null && typeof childSchema.properties === 'object'
    ? Object.entries(childSchema.properties)
    : [];
};

export function getBestMatchingSchemaIndexForModel(schema, model) {
  if (model === null || model === undefined) {
    return null;
  }

  const schemaPoints = schema.oneOf.map((childSchema) => {
    let points = 0;
    getSchemaProperties(childSchema).forEach(([key, propertySchema]) => {
      if (isConstSchema(propertySchema) && propertySchema.const === model[key]) {
        points += 2;
      } else if (isNoNConstSchema(propertySchema) && typeof model[key] !== 'undefined') {
        points += 1;
      }
    });
    return points;
  });

  if (schemaPoints.every((p) => p === schemaPoints[0])) {
    return null;
  }
  return schemaPoints.indexOf(Math.max(...schemaPoints));
}

export function isConstSchema(schema) {
  return !!schema && (schema.const || (schema.enum && schema.enum.length === 1));
}

export function isNoNConstSchema(schema) {
  return !!schema && !isConstSchema(schema);
}
