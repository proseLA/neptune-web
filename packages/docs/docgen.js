const fs = require('fs');
const { resolve } = require('path');
const docgen = require('react-docgen');
const externalProptypesHandler = require('react-docgen-external-proptypes-handler');
const glob = require('glob');

const data = {};

const tabularFriendlyData = (metadata) => {
  const structuredData = [];
  Object.values(metadata).forEach((component) => {
    if (component.props) {
      const { props, displayName } = component;
      Object.keys(props).forEach((propName) => {
        structuredData.push({ displayName, propName, ...props[propName] });
      });
    }
  });

  return structuredData.sort((a, b) => (a.propName > b.propName ? 1 : -1));
};

const files = glob.sync(`../components/src/**/*.{js,tsx}`, {
  ignore: [
    '../components/src/**/*.{spec,docs,story}.{js,ts,tsx}',
    '../components/src/**/index.{js,ts}',
    '../**/common/**',
    '../**/utils/**',
    '../components/src/flowNavigation/avatar/*.{js,tsx,ts}',
  ],
});

const metadata = {};
files.sort().map((path) => {
  /* append display name handler to handlers list */
  const handlers = docgen.defaultHandlers.concat(externalProptypesHandler(path));

  /* read file to get source code */
  const fileSourceCode = fs.readFileSync(path, 'utf8');

  /* parse the component code to get metadata */
  try {
    const component = docgen.parse(fileSourceCode, null, handlers);
    if (isTypeScriptComponent(path)) {
      Object.keys(component.props).forEach((prop) => {
        const valueObj = component.props[prop];
        Object.defineProperty(
          valueObj,
          'type',
          Object.getOwnPropertyDescriptor(valueObj, 'flowType'),
        );
        // eslint-disable-next-line no-param-reassign
        delete valueObj.flowType;
      });
    }
    metadata[component.displayName] = component;
  } catch {
    return false;
  }
  return data;
});

function isTypeScriptComponent(filePath) {
  return filePath.endsWith('.tsx');
}

const tableFriendlyProps = JSON.stringify(tabularFriendlyData(metadata), null, 2);

fs.writeFileSync(
  resolve(process.cwd(), 'temp-tabular-props.js'),
  `export default ${tableFriendlyProps}`,
);
