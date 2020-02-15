/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-14 23:04:52
 * @LastEditors: yuhui
 * @LastEditTime: 2020-02-15 16:55:46
 */
import React,{Component} from 'react';
import { Table, Divider, Tag } from 'antd';
// import "style-loader!css-loader!antd/dist/antd.css";
import "style-loader!css-loader!antd/lib/table/style/index.css";
import "style-loader!css-loader!antd/lib/divider/style/index.css";
import "style-loader!css-loader!antd/lib/tag/style/index.css";
import "style-loader!css-loader!antd/lib/pagination/style/index.css";
import {ContentWrapper} from './style'
import axios from 'axios';

class BlogListsPanel extends Component {
  constructor(props){
    super(props);
    this.state={
      blogLists:[]
    },
    this.columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
      },
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '时间',
        dataIndex: 'createtime',
        key: 'createtime',
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>更改</a>
            <Divider type="vertical" />
            <a onClick={this.deleteBlog.bind(this,record)}>删除</a>
          </span>
        ),
      },
    ];  
  }
  
  deleteBlog(blog){
    axios.post('/manage/deleteBlog',{
      blogId:blog.key,
      createTime:blog.timeStamp,
    },{
      headers: {
        'Access-Control-Allow-Origin':'*',  //解决cors头问题
        'Content-Type': 'application/json'
    }}).then((res)=>{
        let blogId = blog.id;
        let blogArr = this.state.blogLists;
        blogArr.splice(blogId-1,1);
        this.setState({
          blogLists:blogArr
        })
        alert('博客删除成功')
      }).catch(()=>{
        alert("博客删除失败")
    })
  }

  time(time) {
    var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
    return date.toJSON().substr(0, 19).replace('T', ' ');
  }

  componentDidMount(){
    axios.get('/manage/getBlogLists').then((res)=>{
      if(res.data.errNum===0){
        let dat = res.data.data;
        // console.log('res.data:',dat);
        let blogsFiltered = dat.map((item,index)=>{
          return {
            id:index+1,
            key:item.id,
            title:item.title,
            timeStamp:item.createtime,
            createtime:this.time(item.createtime),
            tags:['生活', '学习']
          }
        })
        this.setState({
          blogLists:blogsFiltered
        })
      }
    }).catch(()=>{
      alert("获取博客列表数据异常")
    })
  }

  render() {
    return (
      <ContentWrapper>
        <Table columns={this.columns} dataSource={this.state.blogLists}/>
      </ContentWrapper>
    );
  }
}

export default BlogListsPanel;