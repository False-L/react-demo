var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react', 'stage-3'],
        "plugins": []
      }
    },
    {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url-loader?limit=8192' 
    },
 
    { test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }
    ]
  }
}