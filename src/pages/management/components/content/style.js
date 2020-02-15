/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-12 18:42:20
 * @LastEditors: yuhui
 * @LastEditTime : 2020-02-14 19:03:49
 */
import styled from 'styled-components';

export const ContentWrapper = styled.div` 
  float:right;
  width:calc(100% - 16rem - 100px);
  height:auto;
  background-color: #fff;
  border: none;
  box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin:50px 50px 0;
  a{
    // text-decoration:underline;
  }
  a:hover{
    text-decoration:underline;
    underline:blue;
    color:blue; 
    cursor:pointer;
  }
`