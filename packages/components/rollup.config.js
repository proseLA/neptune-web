import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';
import json from '@rollup/plugin-json';

import pkg from './package.json';

// Rollup
const input = 'src/index.ts';
const file =
  process.env.NODE_ENV === 'umd-nopolyfill' ? './build/umd/no-polyfill/main.js' : pkg.main;
const extensions = ['.js', '.ts', '.tsx'];

// Rollup can resolve only explicit exports.
// https://github.com/rollup/rollup/issues/2671
// https://github.com/rollup/rollup-plugin-commonjs
const namedExports = {
  '../../node_modules/@transferwise/formatting/dist/formatting.js': [
    'formatAmount',
    'formatMoney',
    'formatDate',
    'formatNumber',
  ],
  'react/jsx-runtime': ['jsx', 'jsxs', 'Fragment'],
};

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  icons: '@transferwise/icons',
};

// Plugins
const plugins = [
  // Resolves modules from node_modules
  resolve({ extensions }),
  babel({
    babelHelpers: 'runtime',
    extensions,
    exclude: [/node_modules/],
  }),
  // Convert CJ into ES6
  commonjs({ sourcemap: false, namedExports }),
  postcss({
    config: true,
    extract: pkg.style,
    extensions: ['.css'],
  }),
  json(),
  uglify(),
];

export default [
  {
    input,
    output: [{ file, name: pkg.name, format: 'umd', globals }],
    external: [
      ...Object.keys(pkg.devDependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins,
  },
];
