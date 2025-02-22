const stories = ['../src/**/*.story.@(js|tsx)'];

if (process.env.STORYBOOK_TEST) {
  stories.push('../test/**/*.story.js');
}

// Export a function. Accept the base config as the only param.
module.exports = {
  stories,
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.html$/i,
      loader: 'html-loader',
      options: {
        // Disables attributes processing
        attributes: {
          list: [
            // All default supported tags and attributes
            '...',
            {
              tag: 'img',
              attribute: 'src',
              type: 'src',
            },
          ],
        },
      },
    });

    // Return the altered config
    return config;
  },
};
