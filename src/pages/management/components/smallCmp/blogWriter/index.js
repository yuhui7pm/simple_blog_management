/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors: yuhui
 * @LastEditTime: 2020-03-08 21:27:16
 */
import React,{Component, Fragment} from 'react';
import Editor from 'wangeditor';
import axios from 'axios';
import qs from 'qs';

class blogWriter extends Component{
  constructor(props) {
    super(props);
    this.state = {
        editorContent:'',
        htmlData:''
     };
  };
  
  componentDidMount() {
    this.initEditor()
  };

  //在组件渲染完毕（componentDidMount）之后实例化编辑器：
  initEditor(){
    const elemMenu = this.refs.editorElemMenu;
    const elemBody = this.refs.editorElemBody;
    const editor = new Editor(elemMenu,elemBody)
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
        this.setState({
            editorContent: editor.txt.html()
        })
        
        if(editor.txt.html()){
            this.props.handleValue(editor.txt.html());
        }
    }
    //配置你的富文本编辑器所需要的功能
    editor.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'quote',  // 引用
        'emoticon',  // 表情
        'image',  // 插入图片
        'table',  // 表格
        'video',  // 插入视频
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
    ]
    editor.customConfig.uploadImgShowBase64 = true
    // editor.customConfig.uploadImgServer = '/picture' //设置上传文件的服务器路径
    // editor.customConfig.uploadFileName = 'myFile'; //设置文件上传的参数名称
    // editor.customConfig.pasteFilterStyle = true
    editor.customConfig.uploadImgMaxSize = 10 * 1024 * 1024; // 将图片大小限制为 10M

    // editor.customConfig.customUploadImg = (files, insert) => {
    //     if(files[0]){
    //         axios.post('/manage/picture', {
    //             data:qs.stringify({
    //             file:files[0],
    //             path:'/picture'
    //         })},{
    //             headers: {
    //                 'Access-Control-Allow-Origin':'*',  //解决cors头问题
    //                 'Access-Control-Allow-Credentials':'true', //解决session问题
    //           }}).then(res => {
    //                 const result = res.data;
    //                 if (result.code === '000000') {
    //                 const data = result.data;
    //                 insert(data);
    //             }
    //         });
    //     }
    // };

    // editor.customConfig.customUploadImg = function (files, insert) {
    //     console.log(files)
    //     if (files[0]) {
    //         const formData = new window.FormData()
    //         formData.append('file', files[0], 'cover.jpg')
    //         fetch('/manage/picture', {
    //             method: 'POST',
    //             contentType: false,
    //             body: formData
    //         }).then((res) => {
    //             return res.json()
    //         }).then((res) => {
    //             if (res.flag) {
    //                 // 这里你的后台可能不是我这样的对象属性，后面会带我的node后台，请自行参考
    //                 insert(res.path)
    //             } else {
    //                 console.log(res)
    //             }
    //         })
    //     } else {
    //         console.info('请选择想上传的图片')
    //     }
    // }


    editor.customConfig.autoHeightEnabled = true
    editor.create();

    //从父组件中传过来的数据
    if(this.props.blogContentData){
        editor.txt.html(this.props.blogContentData)
    }
  }

  render() {
    return (
        <Fragment>
            <div className="shop" style={{'display':'inline-block'}}>
                <div className="text-area" >
                    <div ref="editorElemMenu"
                        style={{backgroundColor:'#f1f1f1',border:"1px solid #ccc"}}
                        className="editorElem-menu">
                    </div>
                    <div
                        style={{
                            border:"1px solid #ccc",
                            borderTop:"none",
                            width:800,
                            fontSize:'20px',
                            height:3000
                        }}
                        ref="editorElemBody" className="editorElem-body">
                    </div>
                </div>
            </div>
        </Fragment>
    );
  }
}
export default blogWriter;