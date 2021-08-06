const rehypePrism = require('@mapbox/rehype-prism');
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

const branch = process.env.CIRCLE_BRANCH;
const assetPrefix =
  process.env.NODE_ENV === 'production'
    ? `/neptune-web${branch === 'main' ? '' : `/branch/${branch}`}`
    : '';

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
