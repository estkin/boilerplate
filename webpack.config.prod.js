const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnext = require('postcss-cssnext');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/App'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
module: {
    loaders: [
      {
        test: /\.js?/,
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
      defaults: [autoprefixer, cssnext],
      cleaner:  [autoprefixer({ browsers: ['last 2 version'] })]
    };
  }
};
