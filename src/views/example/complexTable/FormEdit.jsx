import React from 'react'
import { Modal, Form, Input, Radio, InputNumber } from 'antd'
const FormItem = Form.Item
// const Option = Select.Option

class BaseFormEdit extends React.Component {
//   constructor(props){
//       super(props)
//   }
  render() {
    const { title, visible, onCancel, onCreate,form} = this.props
    const { getFieldDecorator } = form
    const FormItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 16 }
    }
    return (
      <Modal
        title={title}
        // width= {800}
        visible={visible}
        onOk={onCreate}
        onCancel={onCancel}
      >
        <Form layout="horizontal">
          <FormItem label="userName" {...FormItemLayout} >
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your userName!' }
              ]
            })(<Input placeholder="userName" />)}
          </FormItem>

          <FormItem label="性别" {...FormItemLayout} >
            {getFieldDecorator('sex', {
              initialValue: "1",
              rules: [{ required: true, message: '请选择性别！' }]
            })(
              <Radio.Group>
                <Radio value="0">男</Radio>
                <Radio value="1">女</Radio>
              </Radio.Group>
            )}
          </FormItem>

          <FormItem label="年龄" {...FormItemLayout} >
            {getFieldDecorator('age', {
              initialValue: 18,
              rules: [{ required: true, message: '请输入年龄！' }]
            })(<InputNumber min={0} max={199} step={1} />)}
          </FormItem>

          <FormItem label="地址" {...FormItemLayout} >
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your address' }]
          })(<Input />)}
        </FormItem>
        </Form>
      </Modal>
    )
  }
}
const FormEdit = Form.create()(BaseFormEdit)
export default FormEdit
