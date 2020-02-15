/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors: yuhui
 * @LastEditTime : 2020-02-14 23:06:18
 */
import React,{Component} from 'react';
import BlogWriterPanel from './blogWriterPanel';
import BlogListsPanel from './blogListsPanel';

class Content extends Component{
  render() {
    return (
      <React.Fragment>
        {
          this.props.moduleName=='/blogSystem/blogWriter'?<BlogWriterPanel/>:''
        }

        {
          this.props.moduleName=='/blogSystem/blogRevise'?<BlogListsPanel/>:''
        }
      </React.Fragment>
    );
  }
}
export default Content;