/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-14 22:57:03
 */
import React,{Component} from 'react';
import {IconGlobalStyle} from '@/statics/iconfont/iconfont.js'; //全局样式
import {SideBarWrapper} from './style';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SideBar extends Component{
  render() {
    return (
      <React.Fragment>
        <IconGlobalStyle/>
        <SideBarWrapper>
          <div>
            <div className="title">博客相关</div>
            <ul>
              <li onClick={this.props.getChildValue.bind(this, '/blogSystem/blogWriter')}>
                <span className="iconfont list-icon">&#xe603;</span>
                <span>博客编写</span>
              </li>
              <li onClick={this.props.getChildValue.bind(this, '/blogSystem/blogRevise')}>
                <span className="iconfont list-icon">&#xe7f3;</span>
                <span>博客编辑</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="title title-2">评论相关</div>
            <ul>
              <li>
                <span className="iconfont list-icon">&#xe62f;</span>
                <span>评论编辑</span>
              </li>
            </ul>
          </div>
        </SideBarWrapper>
      </React.Fragment>
    );
  }
}
export default SideBar;