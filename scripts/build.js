/*
 * @Descripttion: 构建模式脚本
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 11:06:15
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-10 11:18:05
 */

const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod.js');

webpack(webpackConfig, (err, stats) => {
    if(err || stats.hasErrors()){
        console.log("编译失败");
    }
});