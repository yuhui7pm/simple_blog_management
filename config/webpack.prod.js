/*
 * @Descripttion: 生成模式的webpack的配置
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 11:05:58
 * @LastEditors: yuhui
 * @LastEditTime: 2020-03-01 00:58:06
 */
const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const optimizeCss = require('optimize-css-assets-webpack-plugin'); //对css代码进行优化
const ManifestPlugin = require('webpack-manifest-plugin'); //导出json文件，源文件->output文件

const config = {
  output: {
    filename: "bundle.[chunkhash].js",//没有发生改变的模块保持名称以使浏览器从缓存中获取
  },
  plugins: [
    new optimizeCss({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new ManifestPlugin(),
  ],
  // devtool: "source-map",
}

const options = {
  mode: "production"
}

module.exports = merge(webpackConfigCreator(options), config);