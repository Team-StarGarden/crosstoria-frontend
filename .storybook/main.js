require('dotenv').config();

module.exports = {
  stories: ['../stories/**/*.stories.(ts|tsx|mdx)'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {},
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
  ],
};
