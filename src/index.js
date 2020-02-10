/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 11:08:28
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-10 19:13:24
 */

import React from 'react';//react的核心思想是虚拟Dom
import ReactDom from 'react-dom';//react-dom：把虚拟Dom渲染到文档中变成实际dom
import App from './App.js';

//App是一个组件，将组件通过ReactDom.render就可以渲染到页面上 
//React 开发的过程就是通过开发各类组件，并将各类组件拼接成我们所需要的页面
ReactDom.render(<App />, document.getElementById('root'));