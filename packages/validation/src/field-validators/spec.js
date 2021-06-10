import { getFieldValidationFailures, TYPE_ERROR } from '.';

describe('Given a library for identifying validation failures', () => {
  let rules;

  describe('when value is null and rules required', () => {
    beforeEach(() => {
      rules = {
        type: 'string',
        minLength: { value: 3, message: 'minLength' },
        maxLength: { value: 6, message: 'minLength' },
        pattern: { value: '^[a-z]+$', message: 'pattern' },
        required: true,
      };
    });

    it('should return only required', () => {
      expect(getFieldValidationFailures(null, rules)).toEqual(['required']);
    });
  });

  describe('when validating a string rules', () => {
    beforeEach(() => {
      rules = {
        type: 'string',
        minLength: { value: 3, message: 'minLength' },
        maxLength: { value: 6, message: 'minLength' },
        pattern: { value: '^[a-z]+$', message: 'pattern' },
        required: false,
      };
    });

    it('should return an empty array for valid string', () => {
      expect(getFieldValidationFailures('string', rules)).toEqual([]);
    });
    it('should return an empty array for null if not required', () => {
      expect(getFieldValidationFailures(null, rules)).toEqual([]);
    });
    it('should return minLength when too short', () => {
      expect(getFieldValidationFailures('va', rules)).toEqual([rules.minLength]);
    });
    it('should return maxLength when too long', () => {
      expect(getFieldValidationFailures('stringa', rules)).toEqual([rules.maxLength]);
    });
    it('should return pattern when does not pass regex', () => {
      expect(getFieldValidationFailures('STRING', rules)).toEqual([rules.pattern]);
    });
    it('should return type when incorrect data type', () => {
      expect(getFieldValidationFailures(1234, rules)).toEqual([TYPE_ERROR]);
    });
  });

  describe('when validating a string date', () => {
    beforeEach(() => {
      rules = {
        type: 'string',
        minimum: { value: '2000-01-01T00:00:00Z', message: 'minimum' },
        maximum: { value: '2010-01-01T00:00:00Z', message: 'maximum' },
      };
    });

    it('should return an empty array for valid date', () => {
      expect(getFieldValidationFailures('2005-01-01T00:00:00Z', rules)).toEqual([]);
    });
    it('should return [min] when date is too early', () => {
      expect(getFieldValidationFailures('1999-01-01T00:00:00Z', rules)).toEqual([rules.minimum]);
    });
    it('should return [max] when date is too late', () => {
      expect(getFieldValidationFailures('2011-01-01T00:00:00Z', rules)).toEqual([rules.maximum]);
    });
  });

  describe('when validating a number rules', () => {
    beforeEach(() => {
      rules = {
        type: 'number',
        minimum: { value: 0, message: 'minimum' },
        maximum: { value: 20, message: 'maximum' },
      };
    });

    it('should return an empty array for an integer in range', () => {
      expect(getFieldValidationFailures(10, rules)).toEqual([]);
    });
    it('should return an empty array for a float in range', () => {
      expect(getFieldValidationFailures(12.34, rules)).toEqual([]);
    });
    it('should return an empty array for a number that matches our min', () => {
      expect(getFieldValidationFailures(0, rules)).toEqual([]);
    });
    it('should return an empty array for a number that matches our max', () => {
      expect(getFieldValidationFailures(20, rules)).toEqual([]);
    });
    it('should return [min] when number is too low', () => {
      expect(getFieldValidationFailures(-1, rules)).toEqual([rules.minimum]);
    });
    it('should return [max] when number is too high', () => {
      expect(getFieldValidationFailures(21, rules)).toEqual([rules.maximum]);
    });
    it('should return [type] when incorrect data type', () => {
      expect(getFieldValidationFailures('string', rules)).toEqual([TYPE_ERROR]);
    });
  });

  describe('when validating an integer rules', () => {
    beforeEach(() => {
      rules = { type: 'integer' };
    });

    it('should return an empty array for valid integer', () => {
      expect(getFieldValidationFailures(15, rules)).toEqual([]);
    });
    it('should return [type] when a number is not an integer', () => {
      expect(getFieldValidationFailures(12.34, rules)).toEqual([TYPE_ERROR]);
    });
  });

  describe('when validating a boolean rules', () => {
    beforeEach(() => {
      rules = { type: 'boolean' };
    });

    it('should return an empty array for valid boolean', () => {
      expect(getFieldValidationFailures(true, rules)).toEqual([]);
      expect(getFieldValidationFailures(false, rules)).toEqual([]);
    });
    it('should return [type] when incorrect data type', () => {
      expect(getFieldValidationFailures(1, rules)).toEqual([TYPE_ERROR]);
    });
  });

  describe('when validating a const rules', () => {
    beforeEach(() => {
      rules = { const: 'abcd' };
    });

    it('should return an empty array when the const matches', () => {
      expect(getFieldValidationFailures('abcd', rules)).toEqual([]);
    });
    it('should return [enum] when not const', () => {
      expect(getFieldValidationFailures('1234', rules)).toEqual(['enum']);
    });
    it('should return [enum] when null', () => {
      expect(getFieldValidationFailures(null, rules)).toEqual(['enum']);
    });
  });

  describe('when validating an enum rules', () => {
    beforeEach(() => {
      rules = { enum: ['a', 'b', 'c'] };
    });

    it('should return an empty array when value is one of the enums', () => {
      expect(getFieldValidationFailures('b', rules)).toEqual([]);
    });
    it('should return [enum] when not allowed', () => {
      expect(getFieldValidationFailures('d', rules)).toEqual(['enum']);
    });
    it('should return [enum] when null', () => {
      expect(getFieldValidationFailures(null, rules)).toEqual(['enum']);
    });
  });

  describe('when validating an array rules', () => {
    beforeEach(() => {
      rules = {
        type: 'array',
        items: {
          type: 'number',
        },
        minItems: { value: 2, message: 'minItems' },
        maxItems: { value: 2, message: 'maxItems' },
      };
    });

    it('should return an empty array for a valid array', () => {
      expect(getFieldValidationFailures([1, 2], rules)).toEqual([]);
    });
    it('should return [minItems] when the array is too small', () => {
      expect(getFieldValidationFailures([1], rules)).toEqual([rules.minItems]);
    });
    it('should return [maxItems] when the array is too big', () => {
      expect(getFieldValidationFailures([1, 2, 3], rules)).toEqual([rules.maxItems]);
    });
    it('should return [type] when incorrect data type', () => {
      expect(getFieldValidationFailures({ a: 1 }, rules)).toEqual([TYPE_ERROR]);
    });
  });

  describe('when validating an object rules', () => {
    beforeEach(() => {
      rules = {
        type: 'object',
        properties: {
          a: {
            type: 'number',
          },
        },
        required: ['a'],
      };
    });

    it('should return an empty array for a valid object', () => {
      expect(getFieldValidationFailures({ a: 1 }, rules)).toEqual([]);
    });
    it('should return [required] when required properties are missing', () => {
      expect(getFieldValidationFailures({}, rules)).toEqual(['required']);
    });
    it('should return [type] when incorrect data type', () => {
      expect(getFieldValidationFailures([1], rules)).toEqual([TYPE_ERROR]);
    });
  });
});
