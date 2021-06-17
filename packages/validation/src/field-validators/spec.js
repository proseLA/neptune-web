import { getFieldValidationFailures } from '.';

describe('Given a library for identifying validation failures', () => {
  it('should return required with custom message', () => {
    const rules = {
      type: 'string',
      required: { value: true, message: 'Custom required' },
      minLength: { value: 3 },
      maxLength: { value: 6, message: 'Custom maxLength message' },
    };
    expect(getFieldValidationFailures('', rules)).toEqual([rules.required]);
  });

  it('should return required with custom message', () => {
    const rules = {
      type: 'string',
      required: { value: true, message: 'Custom required' },
      minLength: { value: 3 },
      maxLength: { value: 6, message: 'Custom maxLength message' },
    };
    expect(getFieldValidationFailures(null, rules)).toEqual([rules.required]);
  });

  it('should return minLength with default message', () => {
    const rules = {
      type: 'string',
      required: { value: true, message: 'Custom required' },
      minLength: { value: 3 },
      maxLength: { value: 6, message: 'Custom maxLength message' },
    };
    expect(getFieldValidationFailures('aa', rules)).toEqual([
      { ...rules.minLength, message: 'minLength' },
    ]);
  });

  it('should return maxLength with custom message', () => {
    const rules = {
      type: 'string',
      required: { value: true, message: 'Custom required' },
      minLength: { value: 3 },
      maxLength: { value: 6, message: 'Custom maxLength message' },
    };
    expect(getFieldValidationFailures('aaaaaaa', rules)).toEqual([{ ...rules.maxLength }]);
  });

  it('should return both minLength  and maxLength', () => {
    const rules = {
      type: 'string',
      required: { value: true, message: 'Custom required' },
      minLength: { value: 9 },
      maxLength: { value: 6, message: 'Custom maxLength message' },
    };
    expect(getFieldValidationFailures('aaaaaaa', rules)).toEqual([
      { ...rules.minLength, message: 'minLength' },
      { ...rules.maxLength },
    ]);
  });
});
