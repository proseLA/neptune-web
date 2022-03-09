const fs = require('fs');

const { generateFromFile } = require('react-to-typescript-definitions');

/**
 * dir where we would place generated `.d.ts` files
 * (same folder as we specifing in `tsconfig.json` via `declarationDir`)
 */
const typesDistFolder = 'build/types';

/**
 * list of JS files that uses prop-types (basically React components)
 * and that are exposed from `@transferwise/dynamic-flows` library
 */
const jsFiles = [
  { filename: 'DynamicFlow', folder: 'flow' },
  { filename: 'Field', folder: 'field' },
  { filename: 'FormControl', folder: 'formControl' },
  { filename: 'JsonSchemaForm', folder: 'jsonSchemaForm' },
  { filename: 'DynamicLayout', folder: 'layout' },
];

jsFiles.forEach(({ filename, folder }) => {
  const filePath = `${folder}/${filename}`;

  // generate types declration content
  let fileTypeDeclrationContent = null;
  try {
    fileTypeDeclrationContent = generateFromFile(null, `src/${filePath}.js`, {
      babylonPlugins: ['optionalChaining', 'nullishCoalescingOperator'],
    });
  } catch (error) {
    /* eslint-disable no-console */
    console.log(`Error while generating types for '${filePath}'`);
    throw error;
  }

  // write content into .d.ts files
  fs.writeFileSync(`${typesDistFolder}/${filePath}.d.ts`, fileTypeDeclrationContent);
});
