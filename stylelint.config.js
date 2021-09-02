module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-value-no-unknown-custom-properties',
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'csstools/value-no-unknown-custom-properties': [
      true,
      {
        importFrom: ['./node_modules/@transferwise/neptune-tokens/tokens.css'],
      },
    ],
  },
  ignoreFiles: [
    '**/*.js',
    '**/*.ts',
    '**/*.tsx',
    '**/bootstrap-forms.less',
    '**/legacy-variables.less',
  ],
};
