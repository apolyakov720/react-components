const path = require('path');

module.exports = {
  //...Различная конфигурация, в данном случае она нам пока не нужна
  //т.к. используем конфигурацию storybook

  resolve: {
    extensions: [' ', '.js', '.jsx', '.ts', '.tsx', '.styl'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets')
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(otf|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
};
