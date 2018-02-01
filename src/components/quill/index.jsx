import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const quillMoules = {
    toolbar: [
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
}
export default class MyQuill extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange =this.handleChange.bind(this)
  }
  handleChange(quillContent) {
    this.props.contentChange(quillContent)
  }
  render() {
    const { content } = this.props

    return <ReactQuill value={content} onChange={this.handleChange}  modules={quillMoules}/>
  }
}
