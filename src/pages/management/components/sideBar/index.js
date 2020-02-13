/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-12 19:23:01
 */
import React,{Component} from 'react';
import {IconGlobalStyle} from '@/statics/iconfont/iconfont.js'; //全局样式
import {SideBarWrapper} from './style';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createHashHistory } from 'history'; // 如果是history路由

class SideBar extends Component{
  render() {
    return (
      <React.Fragment>
        <IconGlobalStyle/>
        <SideBarWrapper>
          <div>
            <div className="title">博客相关</div>
            <ul>
              <li onClick={this.props.handleClickOnTitle()}>
                {/* <Link to="/blogSystem/blogWriter" style={{"textDecoration":"none","color":"#6c757d"}}> */}
                  <span className="iconfont list-icon">&#xe603;</span>
                  <span>博客编写</span>
                {/* </Link> */}
              </li>
              <li>
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