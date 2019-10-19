const path = require('path');

module.exports = {
  //...Различная конфигурация, в данном случае она нам пока не нужна
  //т.к. используем конфигурацию storybook

  resolve: {
    extensions: [' ', '.js', '.jsx', '.styl']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  }
};
