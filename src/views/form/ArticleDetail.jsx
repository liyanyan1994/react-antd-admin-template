import React from 'react'
import Moment from 'moment'
// import UEditor from '../../components/ueditor/index'
import MyQuill from '../../components/quill/index'
import { requestArticle } from '../../api/article'

import {
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Button,
  notification,
  message
} from 'antd'
const FormItem = Form.Item

const defaultForm = {
  // status: 'draft',
  quillHtml: '<p>test</p>', // 文章内容
  title: '', // 文章题目
  content_short: '', // 文章摘要
  author: '', // 作者
  source_name: '', // 来源
  display_time: undefined // 前台展示时间
}

class NormalArticleDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { postForm: Object.assign({}, defaultForm) }
    this.contentChange = this.contentChange.bind(this)
  }
  componentDidMount() {
    if (this.props.isEdit) {
      requestArticle()
        .then(res => {
          this.setState({ postForm: res.data })
        })
        .catch(err => {
          message.error(err)
        })
    } else {
      this.setState({ postForm: Object.assign({}, defaultForm) })
    }
  }
  contentChange(value) {
    const { postForm } = this.state
    postForm.quillHtml = value
    this.setState({ postForm: postForm })
  }
  handlePublish = e => {
    e.preventDefault()
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }
      const dataTime = fieldsValue['display_time'].format('YYYY-MM-DD HH:mm:ss')
      fieldsValue.display_time = new Date(dataTime).getTime()
      notification['success']({
        message: '成功',
        description: '发布成功'
      })
      console.log('Received values of form: ', fieldsValue)
    })
  }
  draftForm = e => {
    e.preventDefault()
    const { postForm } = this.state
    console.log(postForm.quillHtml)
    if (postForm.quillHtml === null) {
      message.warning('请填写必要的内容')
      return
    }
    message.success('保存成功')
  }
  render() {
    const formItem1LayOut = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      }
    }
    const formItem2LayOut = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 1 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      }
    }
    const formItem3LayOut = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      }
    }

    const { getFieldDecorator } = this.props.form
    const { postForm } = this.state
    return (
      <Form>
        <Row>
          <Col span={24}>
            <div
              style={{
                height: '60px',
                lineHeight: '60px',
                marginBottom: '20px',
                backgroundColor: '#d0d0d0',
                padding: '5px 20px',
                textAlign: 'right'
              }}
            >
              <Button
                type="primary"
                style={{ marginRight: '15px' }}
                onClick={this.handlePublish}
              >
                发布
              </Button>
              <Button onClick={this.draftForm}>草稿</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="postInfo-container">
              <Row gutter={24}>
                <Col span={24}>
                  <FormItem label="标题" {...formItem2LayOut}>
                    {getFieldDecorator('title', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your title!'
                        }
                      ],
                      initialValue: postForm.title
                    })(<Input placeholder="title" />)}
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem label="摘要" {...formItem2LayOut}>
                    {getFieldDecorator('content_short', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input content_short!'
                        }
                      ],
                      initialValue: postForm.content_short
                    })(<Input placeholder="content_short" />)}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <FormItem label="作者" {...formItem1LayOut}>
                    {getFieldDecorator('author', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input  author!'
                        }
                      ],
                      initialValue: postForm.author
                    })(<Input placeholder="author" />)}
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label="来源" {...formItem1LayOut}>
                    {getFieldDecorator('source_name', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input source_name!'
                        }
                      ],
                      initialValue: postForm.source_name
                    })(<Input placeholder="source_name" />)}
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label="发布时间" {...formItem3LayOut}>
                    {getFieldDecorator('display_time', {
                      rules: [
                        {
                          type: 'object',
                          required: true,
                          message: 'Please select time!'
                        }
                      ],
                      initialValue: postForm.display_time
                        ? Moment(postForm.display_time)
                        : undefined
                    })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
                  </FormItem>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <MyQuill
            id="content"
            height="400px"
            visible={false}
            content={postForm.quillHtml}
            contentChange={this.contentChange}
          />
        </Row>
      </Form>
    )
  }
}

const ArticleDetail = Form.create()(NormalArticleDetail)

export default ArticleDetail
