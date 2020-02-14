/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-14 23:03:27
 */
import React,{Component} from 'react';
import {ContentWrapper} from './style';
import BlogWriter from '../smallCmp/blogWriter/index';
import axios from 'axios';

class BlogWriterPanel extends Component{
  constructor(props) {
    super(props);
    this.state={
      blogTitle:'',
      blogPic:'',
      blogRecommend:'',
      blogMusic:'',
      blogText:'',
    }
  }
  
  handleGet(htmlText){
    this.setState({
      blogText:htmlText
    })
  }

  uploadBlog(){    
    axios.post('/manage/uploadBlog',{
      blogTitle:this.state.blogTitle,
      blogPicUrl:this.state.blogPic,
      blogMusicUrl:this.state.blogMusic,
      blogRecommend:this.state.blogRecommend,
      blogHtml:this.state.blogText,
    },{
      headers: {
        'Access-Control-Allow-Origin':'*',  //解决cors头问题
        'Content-Type': 'application/json'
    }}).then((res)=>{
        if(res.data.errNum===-1){
          alert('博客上传失败');
        }else{
          alert('博客上传成功');
        }
      }).catch(()=>{
        alert("博客上传异常")
    })
  }

  render() {
    return (
      <React.Fragment>
        <ContentWrapper  style={{'padding':'40px 50px','boxSizing':'border-box','position':'relative'}}>
          <div style={{'marginBottom':'20px'}}>
            <span style={{'display':'inline-block','marginRight':'30px'}}>博客标题：</span>
            <input 
              style={{'width':'700px','height':'50px','lineHeight':'50px','fontSize':'24px','padding':'0 8px'}}
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
              style={{'width':'700px','height':'50px','lineHeight':'50px','fontSize':'24px','padding':'0 8px'}}
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
              style={{'width':'700px','height':'50px','lineHeight':'50px','fontSize':'24px','padding':'0 8px'}}
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
              style={{'width':'700px','minHeight':'150px','fontSize':'24px','padding':'0 8px','verticalAlign':'top'}}
              onChange={(e) => {
                this.setState({
                  blogRecommend: e.target.value,
                });
              }}
            ></textarea>
          </div>

          <div style={{'marginBottom':'20px'}}>
            <span style={{'display':'inline-block','marginRight':'30px','verticalAlign':'top'}}>博客正文：</span>
            <BlogWriter handleValue={this.handleGet.bind(this)}/>
          </div>
          <button type="button" 
          style={{'height':'30px','width':'100px','position':'absolute','left':'50%','transform':'translate(-50%,-50%)'}}
          onClick={this.uploadBlog.bind(this)}
          >提交</button>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}
export default BlogWriterPanel;