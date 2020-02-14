/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-12 13:39:57
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-14 22:01:15
 */
import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  width: 16rem;
  background: #fff;
  box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  min-height:calc(100% - 78px);
  display:inline-block;
  top:0;
  bottom:0;
  .title{
    color: #ced4da;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.2em;
    font-weight: 700;
    text-transform: uppercase;
    padding:1.5rem;
  }
  .title:hover{
    cursor:default
  }
  .title-2{
    margin-top:20px;
  }
  li{
    height:36px;
    padding:8px 0;
    line-height:36px;
    color:#6c757d;
    display:flex;
    align-items:center;
    padding-left:1.5rem;
    padding-right:1.5rem;
  }
  li>span{
    display:inline-block;
    height:36px;
    line-height:36px;
  }
  li:hover{
    text-decoration: none;
    background: #f5f5f5;
    cursor:pointer
  }
  .list-icon{
    margin-right:20px;
    font-size:25px;
  }
`