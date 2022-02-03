import {
  ArrayItemVariants,
  ArraySchemaVariants,
  getArrayVariant,
  getListItemType,
  isArraySchema,
} from './arraySchemaTypes';

describe('Given utility function', () => {
  describe('when checking if a given schema is array schema', () => {
    it('should return false if not an array schema', () => {
      const schema = { type: 'object', properties: {} };
      expect(isArraySchema(schema)).toBeFalsy();
    });

    it('should return true if a valid array schema', () => {
      const schema = { type: 'array', items: {} };
      expect(isArraySchema(schema)).toBeTruthy();
    });
  });

  describe('when getting array variant - List or Tuple', () => {
    it('should return null if not an array schema', () => {
      const schema = { type: 'object', properties: {} };
      expect(getArrayVariant(schema)).toBeNull();
    });

    it('should return variant as tuple if valid tuple schema', () => {
      const schema = { type: 'array', items: [{ type: 'string', title: 'First name' }] };
      expect(getArrayVariant(schema)).toStrictEqual(ArraySchemaVariants.TUPLE);
    });

    it('should return variant as List if valid list schema', () => {
      const schema = { type: 'array', items: { type: 'string', title: 'First name' } };
      expect(getArrayVariant(schema)).toStrictEqual(ArraySchemaVariants.LIST);
    });
  });

  describe('when item type for a list schema', () => {
    it('should return null if not a list schema', () => {
      const schema = { type: 'array', items: [{ type: 'string', title: 'First name' }] };
      expect(getListItemType(schema)).toBeNull();
    });

    it('should return file schema if it is a multiple file upload schema', () => {
      const schema = {
        type: 'array',
        items: {
          type: 'string',
          persistAsync: { schema: { type: 'string', format: 'base64url' } },
        },
      };
      expect(getListItemType(schema)).toStrictEqual(ArrayItemVariants.FILE);
    });

    it('should return variant as null for not implemented types', () => {
      const schema = { type: 'array', items: { type: 'string', title: 'First name' } };
      expect(getListItemType(schema)).toBeNull();
    });
  });
});
