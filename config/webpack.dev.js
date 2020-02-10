/*
 * @Descripttion: 开发模式的webpack配置
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 11:05:46
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-10 15:24:45
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
    hot: true
  },
  devtool: "inline-source-map",
}

const options = {
    mode: "development"
}

module.exports = merge(webpackConfigCreator(options), config);