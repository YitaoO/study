/**
 * 配置入口
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //页面
const CleanWebpackPlugin = require("clean-webpack-plugin"); //打包前清除dist

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    // 打包html
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    // 打包前清除
    new CleanWebpackPlugin(["dist", "build"], {
      verbose: false,
      exclude: ["img"] //不删除img静态资源
    })
  ]
};
