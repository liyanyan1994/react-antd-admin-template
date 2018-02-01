import React from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
export default class UEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        content: props.content
    }
    this.editor = null
  }
  componentDidMount() {
    this.initEditor()
  }
  initEditor = () => {
    const toolOption = [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['clean'] // remove formatting button
    ]
    const options = {
      debug: 'warn',
      modules: {
        toolbar: toolOption
      },
      placeholder: '请输入文本...',
      readOnly: false,
      theme: 'snow'
    }
    const editor = (this.editor = new Quill(
      document.getElementById(this.props.id),
      options
    ))
    const { content } = this.state
    if (content) editor.clipboard.dangerouslyPasteHTML(content)
    editor.on('text-change', this.handleChange.bind(this))
  }
  handleChange() {
    const quillContent = this.editor.root.innerHTML
    this.props.contentChange(quillContent)
  }
//   从父组件获取的content不能够直接赋值 question
  componentWillReceiveProps(nextProps) {
    //   if (nextProps.content !== this.props.content) {
    //   this.editor.clipboard.dangerouslyPasteHTML(nextProps.content)
    // }else{return}
  }
  render() {
    const { id, height="400px", visible = true } = this.props
    return (
      <div>
        <div id={id} style={{ height }} />
        {visible ? <div dangerouslySetInnerHTML={{ __html:  this.state.content}} /> : null}
      </div>
    )
  }
}
