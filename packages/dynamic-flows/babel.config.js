const tsPreset = ['@babel/preset-typescript', { isTSX: true, allExtensions: true }];

const esConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0.0',
        // targets: {
        //   browsers: please check browserlistrc
        // },
        modules: false,
      },
    ],
    tsPreset,
    [
      'minify',
      {
        builtIns: false,
      },
    ],
  ],
};

const esConfigNoPolyfill = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: false, modules: false }],
    tsPreset,
    [
      'minify',
      {
        builtIns: false,
      },
    ],
  ],
};

const testConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: {
          node: 'current',
        },
      },
    ],
    tsPreset,
  ],
};

module.exports = {
  // "unambiguous" - Consider the file a "module" if import/export statements are present, or else consider it a "script".
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
  env: {
    test: testConfig,
    es: esConfig,
    'es-nopolyfill': esConfigNoPolyfill,
  },
};
