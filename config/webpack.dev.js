/*
 * @Descripttion: 开发模式的webpack配置
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 11:05:46
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-11 22:51:34
 */
const webpackConfigCreator = require('./webpack.common');
const path = require('path');
const merge = require('webpack-merge');

const config = {
  output: {
     filename: "bundle.[hash].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    hot: true,
    proxy: {
      '/manage': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
          '^/manage': '/manage'
        }
      }
    },
    // historyApiFallback: true
  },
  devtool: "inline-source-map",
}

const options = {
    mode: "development"
}

module.exports = merge(webpackConfigCreator(options), config);