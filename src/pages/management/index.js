/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-12 19:22:12
 */
import React,{Component, Fragment} from 'react';
import NavHeader from './components/topBar/index';
import SideBar from './components/sideBar/index';
import Content from './components/content/index';
import {HashRouter,Route,Switch} from 'react-router-dom';//4.2.2版本 ；控制路由跳转

import BlogWriter from './components/smallCmp/blogWriter/index';

class ManagementSys extends Component{
  handleClickOnTitle () {
    console.log('click on title');
    // this.setState({linkUrl: val});
  }
  
  render() {
    return (
      <Fragment>
        <NavHeader></NavHeader>
        <SideBar>
        </SideBar>

        <Content>
          <HashRouter>
            <Switch>
              <Route path="/" exact component={BlogWriter}/>
              <Route path="/blogSystem/blogWriter" component={BlogWriter}></Route>
            </Switch>
          </HashRouter>
          {/* this.state.linkUrl */}
        </Content>

      </Fragment>
    );
  }
}
export default ManagementSys;