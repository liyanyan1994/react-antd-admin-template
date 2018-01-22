import './index.css'
import React from 'react'
import FormTable from './FormTable'
import FormEdit from './FormEdit'
import { Select, Button, Input } from 'antd'
const Option = Select.Option
// 原始数据 可改成API请求数据
const orignDataSource = [
  { userName: 'doudou', sex: '1', age: 16, address: '上海' },
  { userName: '萌新', sex: '0', age: 26, address: '广州' },
  { userName: '痘痘', sex: '1', age: 14, address: '深圳' },
  { userName: '阿狸', sex: '0', age: 7, address: '贵阳' }
]
export default class ComplexTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: undefined,
      sex: undefined,
      dataSource: orignDataSource,
      visiable: false //dialoge是否显示
    }
  }
// 筛选sex
  onChangeSex = value => {
    this.setState({ sex: value })
  }
// 筛选userName
  onChangeUserName = e => {
    const value = e.target.value
    console.log(e.target.value)
    this.setState({ userName: value })
  }
//   新建模态框
  onHandleCreateModal = () => {
    this.setState({visiable: true})
  }
//   取消
  handleCancel = () => {
      this.setState({visiable: false})
  }
//   提交表单，创建新的
  handleCreate = () => {
    console.log('submit success')
  }
  // 按照条件筛选
  onFilterSearch = () => {
    const { userName, sex } = this.state
    let filterArr = orignDataSource.filter(item => {
      if (userName && item.userName.indexOf(userName) < 0) return false
      if (sex && item.sex !== sex) return false
      return true
    })
    this.setState({ dataSource: filterArr })
  }
  render() {
    const { userName, dataSource, sex,visiable} = this.state
    return (
      <div className="table-container">
        <div className="filter-container">
          <Input
            placeholder="姓名"
            value={userName}
            onChange={this.onChangeUserName}
            className="filter-items filter-input"
          />
          <Select
            onChange={this.onChangeSex}
            value={sex}
            className="filter-items filter-select"
            placeholder="性别"
          >
            <Option value="0">男</Option>
            <Option value="1">女</Option>
          </Select>
          <Button
            icon="search"
            type="primary"
            className="filter-items"
            onClick={this.onFilterSearch}
          >
            Search
          </Button>
          <Button icon="plus" type="primary" className="filter-items" onClick={this.onHandleCreateModal}>
            Add
          </Button>
          <Button icon="download" type="primary" className="filter-items">
            Export
          </Button>
        </div>
        {visiable ? <FormEdit visiable={visiable} title='Create' onCancel={this.handleCancel} onCreate={this.handleCreate}/> : <FormTable dataSource={dataSource} />}
      </div>
    )
  }
}
