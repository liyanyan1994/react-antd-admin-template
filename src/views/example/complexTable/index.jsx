import './index.css'
import React from 'react'
import FormTable from './FormTable'
import FormEdit from './FormEdit'
import { Select, Button, Input } from 'antd'
import { requestList } from '../../../api/userinfo'
const Option = Select.Option

var uuId = 100

//替换数组的对应项
function replace(arr, item, place) {
  //arr 数组,item 数组其中一项的key值, place 替换项
  arr.map(function(ar) {
    if (ar.key === item) {
      arr.splice(arr.indexOf(ar), 1, place)
    }
    return null
  })
  return arr
}

export default class ComplexTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: undefined,
      sex: undefined,
      dataSource: [],
      orignDataSource: [], //多存一条，过滤的时候使用
      visible: false, //dialoge是否显示
      tableRowKey: 0, // 单行key
      isUpdate: false, // 是否修改
      loading: true // table显示loading
    }
  }
  componentDidMount() {
    requestList().then(res => {
      this.setState({
        dataSource: res.data.items,
        orignDataSource: res.data.items,
        loading: false
      })
    })
  }
  // 筛选sex
  onChangeSex = value => {
    this.setState({ sex: value })
  }
  // 筛选userName
  onChangeUserName = e => {
    const value = e.target.value
    this.setState({ userName: value })
  }
  //   新建模态框
  onHandleCreateModal = () => {
    this.setState({ visible: true, isUpdate: false })
    const form = this.form
    form.resetFields()
  }
  //   取消
  handleCancel = () => {
    this.setState({ visible: false })
  }
  //接受新建表单数据
  saveFormRef = form => {
    console.log('saveFormRef')
    this.form = form
  }
  //   提交表单添加一个新的form信息
  handleCreate = () => {
    console.log('submit success')
    const form = this.form
    const { dataSource } = this.state
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      const createNewSource = dataSource.slice()
      //   orignDataSource.push({key:uuId++,...values})  // 和原始数据同步
      createNewSource.push({ key: uuId++, ...values })
      this.setState({ dataSource: createNewSource, visible: false })
    })
  }
  //   修改某一行的信息
  handleUpdate = () => {
    console.log('handleUpdate')
    const form = this.form
    const { dataSource, tableRowKey } = this.state
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      values.key = tableRowKey
      form.resetFields()
      this.setState({
        visible: false,
        dataSource: replace(dataSource, tableRowKey, values)
      })
    })
  }
  // 点击某一行进行编辑
  editClick = key => {
    const { dataSource } = this.state
    const form = this.form
    const filterObj = dataSource.filter(item => item.key === key)[0]
    form.setFieldsValue({ ...filterObj })
    this.setState({
      visible: true,
      tableRowKey: key,
      isUpdate: true
    })
  }
  //  点击删除某一行
  deleteClick = key => {
    const dataSource = [...this.state.dataSource]
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) })
  }

  // 按照条件筛选
  onFilterSearch = () => {
    const { userName, sex, orignDataSource } = this.state
    let filterArr = orignDataSource.filter(item => {
      if (userName && item.userName.indexOf(userName) < 0) return false
      if (sex && item.sex !== sex) return false
      return true
    })
    this.setState({ dataSource: filterArr })
  }
  render() {
    const { userName, dataSource, sex, visible, isUpdate, loading } = this.state
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
          <Button
            icon="plus"
            type="primary"
            className="filter-items"
            onClick={this.onHandleCreateModal}
          >
            Add
          </Button>
          <Button icon="download" type="primary" className="filter-items">
            Export
          </Button>
        </div>
        <FormTable
          dataSource={dataSource}
          editClick={this.editClick}
          deleteClick={this.deleteClick}
          loading={loading}
        />

        {isUpdate ? (
          <FormEdit
            ref={this.saveFormRef}
            visible={visible}
            title="Update"
            onCancel={this.handleCancel}
            onCreate={this.handleUpdate}
          />
        ) : (
          <FormEdit
            ref={this.saveFormRef}
            visible={visible}
            title="Create"
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
        )}
      </div>
    )
  }
}
