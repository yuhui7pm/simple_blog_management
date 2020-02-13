/*
 * @Descripttion: 博客后台管理的登录页面
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-12 17:45:22
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
import axios from 'axios';
import { createHashHistory } from 'history'; // 如果是history路由

class Login extends Component{
  
  /**
   * @description: 判断管理员账号密码是否正确
   * @param {type} 
   * @return: 
   * @author: yuhui
   */
  judgeAdminer(account,password){
    //base64编码传递数据到后端
    axios.post('/manage/login',{
      account:window.btoa('this is account:'+account),
      password:window.btoa('this is password:'+password)
    },{
      headers: {
        'Access-Control-Allow-Origin':'*',  //解决cors头问题
        'Access-Control-Allow-Credentials':'true', //解决session问题
        'Content-Type': 'application/json'
    }}).then((res)=>{
        if(res.data.errNum===-1){
          alert('管理员账号密码错误')
        }else{
          createHashHistory().push('/blogSystem')
        }
      }).catch(()=>{
        alert("管理员账号登录异常")
    })
  };

  /**
   * @description: 回车触发登陆事件
   * @param {type} 
   * @return: 
   * @author: yuhui
   */
  submitLogin(e,account,password){
    if(e.keyCode === 13) {
      this.judgeAdminer(account,password)
    }
  };

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
              {/* 新版本的React已经不推荐我们使用ref string转而使用ref callback */}
              <input placeholder="管理员账号" type="account" ref={adminAccount=>this.accout=adminAccount}/>
            </Line>
            <Line>
              <img className="smallImg" src={passwordIcon} />
              <input 
                placeholder="管理员密码" type="password" 
                ref={adminPassword=>this.password=adminPassword}
                onKeyUp = {(e)=>this.submitLogin(e,this.accout.value,this.password.value)}
              />
            </Line>
          </div>
          <LoginBut type="button" onClick={()=>{
              this.judgeAdminer(this.accout.value,this.password.value)
            }}>
            登&nbsp;&nbsp;录
          </LoginBut>
        </LoginWrapper>
      </LoginBg>
    )
  }
}
export default Login;