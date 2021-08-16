/**
 * @jest-environment node
 */

import { renderToString } from 'react-dom/server';

import * as components from '.';

const excluded = new Set(['useSnackbar', 'convertStepToLayout', 'inlineReferences', 'DynamicFlow']);

function isNotExcluded(componentName) {
  return !excluded.has(componentName);
}

describe('Server side rendering', () => {
  it('can render components', () => {
    const componentNames = Object.keys(components).filter(isNotExcluded);
    expect(componentNames.length).toBeGreaterThan(0);

    // stick all possible properties we might need to render all components in here
    const allProps = {
      schema: {},
      components: [],
      onAction: jest.fn(),
      onModelChange: jest.fn(),
      onChange: jest.fn(),
      submitted: false,
      name: 'name',
      field: {
        control: 'text',
        type: 'string',
        label: 'hello',
      },
      onPersistAsync: jest.fn(),
      baseUrl: 'some-url',
    };
    const overrideProps = {};

    componentNames.forEach((componentName) => {
      const Component = components[componentName];
      const newProps = { ...allProps };

      Object.keys(overrideProps[componentName] || {}).forEach((propertyToOverrideKey) => {
        newProps[propertyToOverrideKey] = overrideProps[componentName][propertyToOverrideKey];
      });

      const view = renderToString(<Component {...newProps} />);

      expect(view).toStrictEqual(expect.any(String));
    });
  });
});
