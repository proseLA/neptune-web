import { getSchemaType, schemaType } from './schemaTypes';

export function shouldDebounceSchema(schema) {
  return (
    getSchemaType(schema) === schemaType.BASIC &&
    schema.type !== 'boolean' &&
    schema.format !== 'base64url'
  );
}
