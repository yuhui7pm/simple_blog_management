/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-12 13:39:57
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-12 17:30:09
 */
import styled from 'styled-components';
import daqiao from "@/statics/loginPage/daqiao.jpg";

export const Nav = styled.nav`
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  box-shadow:0 0.125rem 0.8rem rgba(0, 0, 0, 0.1);
  padding:.5rem 1.5rem;
  background-color: #fff!important;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height:62px;
  .navBarBrand{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size:25px;
    letter-spacing:4px
  }
  a{
    text-decoration:none;
    color:#4680ff;
  }
  ul{
    display:flex;
    align-items:center;
  }
  li{
    height: 50px;
    line-height:50px;
    display:inline-block;
    cursor:pointer;
    margin-right:40px;
  }
  li:first-child{
    margin-right:60px
  }
  .messTip{
    font-size:30px;
    line-height:50px;
    display:inline-block;
  }
  .adminIcon{
    height: 50px;
    width:50px;
    border-radius:25px;
    display:inline-block;
    background:url('${daqiao}') no-repeat; 
    background-size:100% 100%;
  }
`