var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/src/components/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
};