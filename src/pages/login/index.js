/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-10 20:47:10
 */
import React,{Component} from 'react';
import {
  LoginBg,
  Top,
  LoginWrapper,
  Title,
  Line,
  LoginBut
} from './style.js';

import titlePic from '../../statics/loginPage/blog_manage_sys_logo.png';
import usernameIcon from '../../statics/loginPage/icon3.png';
import passwordIcon from '../../statics/loginPage/icon4.png';

class Login extends Component{
  render(){
    return(
      <LoginBg>
        <Top>
          <img src={titlePic}/>    
        </Top>
        <LoginWrapper>
          <Title>博客管理系统</Title>
          <div>
            <Line>
              <img className="smallImg" src={usernameIcon} />
              <input placeholder="请输入账号" type="text" />
            </Line>
            <Line>
              <img className="smallImg" src={passwordIcon} />
              <input placeholder="请输入账号" type="text" />
            </Line>
          </div>
          <LoginBut type="button">登&nbsp;&nbsp;录</LoginBut>
        </LoginWrapper>
      </LoginBg>

      // <div class="content">
      // <div class="login">
      //   <div class="title">店铺管理登录</div>
      //   <div class="locon">
      //     <div class="line">
      //     <img class="smallImg" src="img/icon3.png" />
      //     <input placeholder="请输入账号" type="text" />
      //   </div>
      //   <div class="line">
      //     <img class="smallImg" src="img/icon4.png" />
      //     <input placeholder="请输入密码" type="password" />
      //   </div>
      //   <button type="button" class="logBut">登&nbsp;&nbsp;录</button>
      //   </div>
      // </div>
      // </div>

    )
  }
}

export default Login;