/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 11:05:36
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-10 15:38:47
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//两种模式都有用到
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//两种模式都有用到
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const postCssImport = require('postcss-import');
const autoPrefixer = require('autoprefixer');

function webpackCommonConfigCreator(options){
  return {
      mode: options.mode,
      entry: "./src/index.js",
      output: {
          // filename: "bundle.[hash].js",//为了在每次修改代码后，浏览器都能获取到最新的js
          path: path.resolve(__dirname, "../build"),
          publicPath: "/",//脚手架默认的publicPath设置为 /，则对应的资源外链都是从服务器路径/开始寻找资源
      },
      module:{
        rules:[
          {
            test:/\.(js|jsx)$/,
            include:path.resolve(__dirname,'../src'),
            use:[
              {
                loader:"babel-loader",
                options:{
                  presets:['@babel/preset-react'],
                  plugins: ["react-hot-loader/babel"]
                }
              }
            ]
          },
          {
            test: /\.(css|scss)$/,
            include: path.resolve(__dirname, '../src'),
            use: ExtractTextPlugin.extract({
              fallback:"style-loader", //编译后用什么loader来提取css文件
              use:[{
                loader:"css-loader", // 指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
                options:{
                  modules:{
                    mode:"local",
                    localIdentName:'[path][name]_[local]--[hash:base64]'
                  },
                  localsConvention:'camelCase'
                }
              },
              { loader: "sass-loader"},
              {
                 loader: "postcss-loader",
                 options: {
                    ident: 'postcss',
                    plugins: loader => [
                      postCssImport({ root: loader.resourcePath }),
                      autoPrefixer()
                    ]
                }
              }
            ]})
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader'] //加载字体
          },
          {
            test: /\.(jpg|png|svg|gif)$/,
            use: [
              {
                  loader: 'url-loader',
                  options: {
                      limit: 10240,
                      name: 'images/[name].[hash].[ext]',
                      publicPath: "/"
                  },
              },
            ]
          },
        ]
      },
      plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new ExtractTextPlugin({
          filename: "[name][hash].css"
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), "build/"), path.resolve(process.cwd(), "dist/")]
        }),
      ],
  }
}

module.exports = webpackCommonConfigCreator;