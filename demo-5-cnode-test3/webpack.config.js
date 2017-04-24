var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader:'babel-loader',
      query: {
        presets: ['es2015','react', 'stage-3'],
        "plugins": []
      }
    },
    {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
    },
 
    { test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }
    ]
  },
   plugins: [
        new webpack.HotModuleReplacementPlugin()
   ]
}