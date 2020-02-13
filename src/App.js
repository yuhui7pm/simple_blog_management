/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 11:38:34
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-12 18:30:32
 */
import React,{Component} from 'react';
import {hot} from 'react-hot-loader/root';
import {BrowserRouter,Route,HashRouter,Switch} from 'react-router-dom';//4.2.2版本 ；控制路由跳转
import {GlobalStyle} from './style'; //全局样式

import Login from './pages/login/index'
import NotFound from './pages/404NotFound/notFound'
import ManagementSys from './pages/management/index'
class App extends Component {
    render(){
        return (
            <div>
                <GlobalStyle/>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/blogSystem" component={ManagementSys}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

export default hot(App);