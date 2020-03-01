/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors: yuhui
 * @LastEditTime: 2020-02-29 22:51:26
 */
import React,{Component, Fragment} from 'react';
import NavHeader from './components/topBar/index';
import SideBar from './components/sideBar/index';
import Content from './components/content/index';
import {HashRouter,Route,Switch,Prompt} from 'react-router-dom';//4.2.2版本 ；控制路由跳转
import { createHashHistory } from 'history'; // 如果是history路由

class ManagementSys extends Component{
  constructor(props) {
    super(props);
    this.state = {
      moduleName: '/blogSystem/blogWriter',
    }
  }

  // 获取模糊搜索选择的数据
  childValue = (data)=>{
    console.log(data,this.state.moduleName);
    this.setState({
      moduleName: data,
    })
    // createHashHistory().push(data);
  }
  
  render() {
    return (
      <Fragment>
        <NavHeader></NavHeader>
        <SideBar getChildValue={this.childValue}></SideBar>
        <Content moduleName={this.state.moduleName}></Content>
        <Prompt message="确定要离开？"  when={true}/>
      </Fragment>
    );
  }
}
export default ManagementSys;