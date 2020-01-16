const path = require('path');

module.exports = function({ config, mode }) {
  const stories = path.resolve(__dirname, '../stories');
  // eslint-loader
  const eslintRule = config.module.rules[2];
  eslintRule.include.push(stories);
  // babel-loader
  const babelRule = config.module.rules[3].oneOf[1];
  babelRule.include.push(stories);

  return config;
};
