// Creates main component file.
const { capitalizeFirstLetter } = require('@transferwise/files-scaffold/utils/index.js');

module.exports = {
  type: 'component',
  path: 'packages/components/src',
  ext: 'tsx',
  createDir: true,
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import { CommonProps } from '../common';

type ${capitalizeFirstLetter(name)}Props = CommonProps & {};

/**
 * ${capitalizeFirstLetter(name)} docs.
 *
 * @example <${capitalizeFirstLetter(name)} />
 */

const ${capitalizeFirstLetter(name)} = (props: ${capitalizeFirstLetter(name)}Props) => {
  return <div>${capitalizeFirstLetter(name)}</div>;
};

export default ${capitalizeFirstLetter(name)};
`,
};
