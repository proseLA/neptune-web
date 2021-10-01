const rehypePrism = require('@mapbox/rehype-prism');
// eslint-disable-next-line import/order
const rehypeSlug = require('rehype-slug');
const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [rehypeSlug, rehypePrism],
  },
});
const withImages = require('next-images');
const withTM = require('next-transpile-modules')([
  '@transferwise/dynamic-flows',
  // Required for labs which is only exported as es version.
  '@transferwise/components',
  '@transferwise/neptune-validation',
  'buble',
  'regexpu-core',
  'unicode-match-property-ecmascript',
  'unicode-match-property-value-ecmascript',
]);

const pageExtensions = ['js', 'mdx', 'tsx'];

let assetPrefix = '';
const branch = process.env.BRANCH_NAME;

if (process.env.NODE_ENV === 'production') {
  assetPrefix = branch === 'main' ? '/neptune-web' : `/neptune-web/branch/${branch}`;
}

module.exports = withTM(
  withImages(
    withMDX({
      pageExtensions,
      assetPrefix,
      env: {
        ASSET_PREFIX: assetPrefix,
      },
      images: {
        disableStaticImages: true,
      },
      webpack(config) {
        config.module.rules.push({
          test: [/\.code.js$/, /\.txt$/],
          use: 'raw-loader',
        });

        return config;
      },
    }),
  ),
);
