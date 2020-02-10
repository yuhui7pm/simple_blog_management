/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:48:43
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-10 20:31:13
 */
import styled from 'styled-components';
import BG from "../../statics/loginPage/BG.jpg";

// 登录页背景图片
export const LoginBg = styled.div`
  height:100%;
  width:100%;
  background-image: url(${BG});
  text-align: center;
  background-size: 100% 100%;
  height: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`

export const Top = styled.div`
  width: 100%;
  position: absolute;
  color: #094a4a;
  text-align: right;
  font-size: 32px;
  top: 10%;
  line-height: 20px;
  right: 0%;
  img{
    width:50%
  }
`

export const LoginWrapper = styled.div`
  background: #00000075;
  width: 40%;
  text-align: center;
  padding: 40px 2%;
  border-radius: 2px;
  position: absolute;
  top: 30%;
  right: 7%;
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #e4e4e4;
  margin-bottom: 40px;
`

export const Line = styled.div`
  margin: 32px 1%;
  width: 92%;
  background: #ffffffe8;
  padding: 5px 2%;
  input{
    border: none;
    padding: 0px 1%;
    margin: 1% 0px;
    background: none;
    width: 80%;
    font-size: 16px;
    line-height: 30px;
    outline: none;   
  }
  .smallImg {
    width: 26px;
    float: left;
    vertical-align: middle;
    margin-top: 5px;
    margin-left: 8px;
  }
`

export const LoginBut = styled.button`
  background: #496461;
  padding: 14px 0px;
  border: none;
  color: #fff;
  font-size: 16px;
  width: 96%;
  margin-left: -9px;
  margin-top: 10px;
  :hover
    cursor: pointer;
`