/*
 * @Descripttion: 博客上传
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors: yuhui
 * @LastEditTime: 2020-03-01 23:10:44
 */
import React,{Component, Fragment} from 'react';
import Editor from 'wangeditor';

class blogWriter extends Component{
  constructor(props) {
    super(props);
    this.state = {
        editorContent:'',
        htmlData:''
     };
  };
  
  //在组件渲染完毕（componentDidMount）之后实例化编辑器：
  componentDidMount() {
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
    // editor.customConfig.uploadImgServer = '/blogImg' //设置上传文件的服务器路径
    // editor.customConfig.uploadFileName = 'myFile'; //设置文件上传的参数名称
	// editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024; // 将图片大小限制为 3M

    editor.customConfig.autoHeightEnabled = true
    editor.create();

    //从父组件中传过来的数据
    if(this.props.blogContentData){
        editor.txt.html(this.props.blogContentData)
    }
  };

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