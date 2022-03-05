/* eslint-disable jest/valid-title */
/* eslint-disable jest/no-standalone-expect */

import { shouldDebounceSchema } from './shouldDebounceSchema';

const getTitle = (title, expectation) =>
  `should ${expectation ? 'debounce' : 'NOT debounce'} a ${title}`;

describe('shouldDebounceSchema', () => {
  const cases = [
    ['string schema', { type: 'string' }, true],
    ['number schema', { type: 'number' }, true],
    ['integer schema', { type: 'integer' }, true],
    ['oneOf schema', { oneOf: [{ type: 'string' }, { type: 'number' }] }, false],
    ['oneOf consts schema', { oneOf: [{ const: 0 }, { const: 1 }, { const: 2 }] }, false],
    ['boolean schema', { type: 'boolean' }, false],
    ['array schema', { type: 'array' }, false],
    [
      'object schema',
      { type: 'object', properties: { a: { type: 'string' }, b: { type: 'integer' } } },
      false,
    ],
    ['string base64url schema', { type: 'string', format: 'base64url' }, false],
  ];

  cases.forEach(([title, schema, expectation]) => {
    it(getTitle(title, expectation), () => {
      expect(shouldDebounceSchema(schema)).toBe(expectation);
    });
  });
});
