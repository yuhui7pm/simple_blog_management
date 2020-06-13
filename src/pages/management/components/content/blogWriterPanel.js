/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors: yuhui
 * @LastEditTime: 2020-03-08 22:31:48
 */
import React,{Component} from 'react';
import {ContentWrapper} from './style';
import BlogWriter from '../smallCmp/blogWriter/index';
import axios from 'axios';

class BlogWriterPanel extends Component{
  constructor(props) {
    super(props);
    this.state={
      blogId:-1,
      blogTitle:'',
      blogPic:'',
      blogRecommend:'',
      blogMusic:'',
      blogText:'',
      blogStatus:'',
      createtime:'',
    }
  }
  
  handleGet(htmlText){
    this.setState({
      blogText:htmlText
    })
  }

  uploadBlog(){    
    if(this.state.blogText){
      let postUrl;
      if(this.state.blogStatus.length>0){
        postUrl = '/manage/updateBlog'
      }else{
        postUrl = '/manage/uploadBlog'
      }
      axios.post(postUrl,{
        blogId:this.state.blogId,
        blogTitle:this.state.blogTitle,
        blogPicUrl:this.state.blogPic,
        blogMusicUrl:this.state.blogMusic,
        blogRecommend:this.state.blogRecommend,
        blogHtml:this.state.blogText,
        createtime:this.state.createtime,
      },{
        headers: {
          'Access-Control-Allow-Origin':'*',  //解决cors头问题
          'Content-Type': 'application/json'
      }}).then((res)=>{
          if(res.data.errNum===-1){
            alert('博客上传失败');
          }else{
            alert('博客上传成功');
            location.reload();
          }
        }).catch(()=>{
          alert("博客上传异常")
      })
    }
  }

  //点击修改博客数据，从后台获取数据到wangEditor页面
  getBlogData(time){
    axios.get('/manage/getBlogDataAgain',{
      params: {
        timeStamp: time
      }
    }).then((res)=>{
      if(res.data.errNum===0){
        let dataOld = res.data.data;
        let dat = dataOld[0];
        this.setState({
          blogTitle:dat.title,
          blogPic:dat.picurl,
          blogRecommend:dat.introduction,
          blogMusic:dat.musicurl,
          blogText:dat.context,
          blogId:dat.id,
          createtime:dat.createtime
        })
      }
    }).catch(()=>{
      alert("获取博客列表数据异常")
    })
  }

  render() {
    return (
      <React.Fragment>
        <ContentWrapper  style={{'padding':'40px 50px','boxSizing':'border-box','position':'relative'}}>
          <div style={{'marginBottom':'20px'}}>
            <span style={{'display':'inline-block','marginRight':'30px'}}>博客标题：</span>
            <input 
              className = 'blogTitle'
              style={{'width':'700px','height':'50px','lineHeight':'50px','fontSize':'24px','padding':'0 8px'}}
              value = {this.state.blogTitle||''}
              onChange={(e) => {
                this.setState({
                  blogTitle: e.target.value,
                });
              }}
            />
          </div>

          <div style={{'marginBottom':'20px'}}>
            <span style={{'display':'inline-block','marginRight':'30px'}}>博客图片：</span>
            <input 
              className = 'blogPicUrl'
              style={{'width':'700px','height':'50px','lineHeight':'50px','fontSize':'24px','padding':'0 8px'}}
              value = {this.state.blogPic||''}
              onChange={(e) => {
                this.setState({
                  blogPic: e.target.value,
                });
              }}
            />
          </div>

          <div style={{'marginBottom':'20px'}}>
            <span style={{'display':'inline-block','marginRight':'30px'}}>博客音乐：</span>
            <input 
              className = 'blogMusicUrl'
              style={{'width':'700px','height':'50px','lineHeight':'50px','fontSize':'24px','padding':'0 8px'}}
              value = {this.state.blogMusic||''}
              onChange={(e) => {
                this.setState({
                  blogMusic: e.target.value,
                });
              }}
            />
          </div>

          <div style={{'marginBottom':'20px'}}>
            <span style={{'display':'inline-block','marginRight':'30px'}}>博客介绍：</span>
            <textarea 
              className = 'blogIntroduction'
              style={{'width':'700px','minHeight':'150px','fontSize':'24px','padding':'0 8px','verticalAlign':'top'}}
              value = {this.state.blogRecommend||''}
              onChange={(e) => {
                this.setState({
                  blogRecommend: e.target.value,
                });
              }}
            ></textarea>
          </div>

          <div style={{'marginBottom':'20px'}}>
            <span style={{'display':'inline-block','marginRight':'30px','verticalAlign':'top'}}>博客正文：</span>
            {/* 必须要加判断因为是异步的 */}
            {
              this.state.blogStatus?(
                this.state.blogText&&<BlogWriter blogContentData={this.state.blogText} handleValue={this.handleGet.bind(this)}/>
              ):<BlogWriter handleValue={this.handleGet.bind(this)}/>
            }
          </div>
          <button type="button" 
          style={{'height':'30px','width':'100px','position':'absolute','left':'50%','transform':'translate(-50%,-50%)'}}
          onClick={this.uploadBlog.bind(this)}
          >提交</button>
        </ContentWrapper>
      </React.Fragment>
    );
  }

  componentDidMount(){
    const blogData = this.props.blogData;
    const timeStamp = blogData.timeStamp;
    if(blogData){
      this.setState({
        blogStatus:'更新博客数据'
      })
      this.getBlogData(timeStamp)
    }else{
      console.log('新建博客');
    }
  }
}
export default BlogWriterPanel;