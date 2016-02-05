const autoprefixer = require('autoprefixer');
const cssnext = require('postcss-cssnext');

module.exports = {
  entry: './app/main.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function () {
    return {
      defaults: [autoprefixer, cssnext],
      cleaner:  [autoprefixer({ browsers: [] })]
    };
  }
};
