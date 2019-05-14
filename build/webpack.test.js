const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'base': './src/style/index.scss'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('fonts', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('image', '[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
