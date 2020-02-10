/*
 * @Descripttion: 开发模式脚本
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 11:06:24
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-10 11:21:53
 */


const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev.js');

const compiler = webpack(webpackConfig);

const options = Object.assign({}, webpackConfig.devServer, {
  open: true
})
const server = new webpackDevServer(compiler, options);

server.listen(3003, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:3003');
})