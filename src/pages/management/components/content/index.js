/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors: yuhui
 * @LastEditTime: 2020-03-01 00:49:26
 */
import React,{Component} from 'react';
import BlogWriterPanel from './blogWriterPanel';
import BlogListsPanel from './blogListsPanel';

class Content extends Component{
  constructor(props) {
    super(props);
    this.state = {
      blogData: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.moduleName=='/blogSystem/blogWriter'||this.state.blogData?<BlogWriterPanel blogData={this.state.blogData}/>:''
        }
        {
          this.props.moduleName=='/blogSystem/blogRevise'&&(!this.state.blogData)?<BlogListsPanel changeBlogData={this.changeBlogData.bind(this)}/>:''
        }
      </React.Fragment>
    );
  }

  // 标记博客数据
  changeBlogData = (data)=>{
    this.setState({
      blogData: data,
    })
  }
    
}
export default Content;