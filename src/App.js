/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 11:38:34
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-10 18:12:52
 */
import React,{Component} from 'react';
import {hot} from 'react-hot-loader/root';
import {GlobalStyle} from './style'; //全局样式
import Login from './pages/login/index'

class App extends Component {
    render(){
        return (
            <div>
                <GlobalStyle/>
                <Login></Login>
            </div>
        )
    }
}

export default hot(App);