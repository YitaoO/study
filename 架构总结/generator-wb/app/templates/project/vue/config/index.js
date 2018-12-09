"use strict";
/**
 * 注：基本配置,如果需要设置代理跨域模式，只需要更改proxyTable
 */

const path = require("path");
const projectName = require("../package.json").name;

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      '/': {
        // target: 'https://test200.gxyfrr.cc/wpms/',
        target: 'http://192.168.1.94:9070/wpms/',
        changeOrigin: true,
        pathRewrite: {
          "^/": "/"
        }
      }
    },
    host: "localhost",
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: false,
    showEslintErrorsInOverlay: false,
    devtool: "cheap-module-eval-source-map",
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    assetsRoot: path.resolve(__dirname, `../dist/${projectName}`),
    assetsSubDirectory: "static",
    assetsPublicPath: "./",
    productionSourceMap: true,
    devtool: "#source-map",
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
