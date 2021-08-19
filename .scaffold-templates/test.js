// Creates Test file.

const { capitalizeFirstLetter } = require('@transferwise/files-scaffold/utils/index.js');

module.exports = {
  type: 'jest',
  path: 'packages/components/src',
  ext: 'spec.tsx',
  createDir: true,
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import { render, screen } from '../test-utils';

import ${capitalizeFirstLetter(name)} from '.';

describe('${capitalizeFirstLetter(name)}', () => {
  it('can render component', () => {
    render(<${capitalizeFirstLetter(name)} />);
    expect(screen.getByText('${capitalizeFirstLetter(name)}')).toBeInTheDocument();
  });
});
`,
};
