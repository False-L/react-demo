//var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  devServer:{
      contentBase: path.join(__dirname, "build"),//devServer目录
      compress: true,//开启gzip
      port: 9000,
      clientLogLevel: "none",//阻止消息产生
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,//excluode:忽略这个目录打包
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react', 'stage-3'],
        plugins: [
            ['import', [{ libraryName: "antd", style: 'css' }]],
              ]
      }
    },{
        test: /\.css$/,
        exclude: /^node_modules$/,//excluode:忽略这个目录打包
        loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
    },{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url-loader',
    options:{
      limit: 8192, // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
      name: './images/[name].[ext]'
      }
    },
    { test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }
    ]
  },
  plugins:[
    new ExtractTextPlugin("main.css"),
  ]
}