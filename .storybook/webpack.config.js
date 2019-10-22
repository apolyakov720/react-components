//Как сделать лучше слияние конфигов?

const customWebpackConfig = require('../webpack.config.js');

module.exports = async ({ config }) => {
  return {
    ...config,
    watchOptions: {
      poll: true
    },
    resolve: {
      ...config.resolve,
      extensions: customWebpackConfig.resolve.extensions,
      alias: customWebpackConfig.resolve.alias
    },
    module: {
      ...config.module,
      rules: customWebpackConfig.module.rules
    }
  };
};
