const path = require('path');
const webpack = require('webpack');
const uglify = require('uglifyjs-webpack-plugin'); //压缩
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      //css loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      //图片 loader
      {
        test: /\.(png|jpg|gif|jpeg)/, //是匹配图片文件后缀名称
        use: [{
          loader: 'url-loader', //是指定使用的loader和loader的配置参数
          options: {
            limit: 500 //是把小于500B的文件打成Base64的格式，写入JS
          }
        }]
      },
      //html中图片 loader
      {
        test: /\.(png|jpg|gif|jpeg)/, //是匹配图片文件后缀名称
        use: [{
          loader: 'url-loader', //是指定使用的loader和loader的配置参数
          options: {
            limit: 500, //是把小于500B的文件打成Base64的格式，写入JS
            outputPath: 'images/', //打包后的图片放到images文件夹下
          }
        }]
      },
      {
        test: /\.(htm|html)$/i,
        use: ['html-withimg-loader']
      },
      //babel 配置
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'] //给loader指定一个preset(就不需要配置.babel)
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ // 定义环境变量
      'process.env': JSON.stringify(process.env.NODE_ENV)
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.min.js'
    }
  }
};