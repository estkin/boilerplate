const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnext = require('postcss-cssnext');
const impy = require('postcss-import');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/App'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  postcss: function () {
    return {
      defaults: [impy, autoprefixer, cssnext],
      cleaner:  [autoprefixer({ browsers: ['last 2 version'] })]
    };
  }
};
