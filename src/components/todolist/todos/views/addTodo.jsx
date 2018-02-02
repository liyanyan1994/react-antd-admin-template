import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { addTodo } from '../../../../actions/actions'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item
class AddTodoForm extends Component {
  onSubmit = (ev) => {
    ev.preventDefault()
    this.props.form.validateFields((err,values) => {
        if(err){return}
        this.props.onAdd(values.todoText)
        this.props.form.resetFields()
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.onSubmit} layout="inline">
        <FormItem className="form-input">
          {getFieldDecorator('todoText', {
            rules: [{ required: true, message: 'New Todo Content is not null' }]
          })(<Input className="new-todo" placeholder="Todo Text"/>)}
        </FormItem>
        <FormItem>
          <Button className="add-btn" htmlType="submit">
            add
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const AddTodo = Form.create()(AddTodoForm)

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: text => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)
