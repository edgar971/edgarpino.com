const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: [
      path.resolve('./files'),
      path.resolve('./node_modules')      
    ]
  },
  entry: {
    vendor: [
      'babel-polyfill', 
      'react',
      'react-dom',
    ],
    app: ['./files/js/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};

module.exports = config;