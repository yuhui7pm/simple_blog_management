/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-12 16:56:21
 */
import React,{Component} from 'react';
import {Nav} from './style';
import {IconGlobalStyle} from '@/statics/iconfont/iconfont.js'; //全局样式

class NavHeader extends Component{
  render() {
    return (
      <React.Fragment>
        <IconGlobalStyle></IconGlobalStyle>
        <header>
          <Nav>
            <a href='#'><span className="iconfont">&#xe63c;</span></a>
            <a href='#' className='navBarBrand'>博客管理系统</a>
            <ul>
              <li>
                <span className="iconfont messTip">&#xe60c;</span>
              </li>
              <li className="adminIcon">
              </li>
            </ul>
          </Nav>
        </header>
      </React.Fragment>
      
    );
  }
}
export default NavHeader;