require('postcss-import');
require('autoprefixer');
require('@arshaw/postcss-custom-properties');
require('postcss-custom-media');
require('cssnano');

module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    '@arshaw/postcss-custom-properties': {
      importFrom: [
        '../../node_modules/@transferwise/neptune-tokens/colors-base.css',
        '../../node_modules/@transferwise/neptune-tokens/themes/default/tokens.css',
      ],
      preserveWithFallback: true,
    },
    'postcss-custom-media': {
      stage: 1,
      importFrom: '../../packages/css/src/props/custom-media.css',
    },
    cssnano: {
      preset: 'default',
    },
  },
};
