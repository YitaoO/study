/**
 * 开发环境
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包成多个页面

module.exports = {
  entry: {
    app: ['./src/demo/demo.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new extractTextPlugin("css/index.css") //css分离，暂时不需要这个功能
  ],
  devServer: {
    inline: true,
    hot: true,
    host: 'localhost',
    // historyApiFallback: true,
    port: process.env.PORT || 8101
  }
};