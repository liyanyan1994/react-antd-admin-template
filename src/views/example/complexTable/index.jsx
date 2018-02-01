import './index.css'
import React from 'react'
import FormTable from './FormTable'
import FormEdit from './FormEdit'
import { Select, Button, Input, notification, message } from 'antd'
import { requestList } from '../../../api/userinfo'
const Option = Select.Option

var uuId = 1000

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
      dataSource: [],
      visible: false, //dialoge是否显示
      tableRowKey: 0, // 单行key
      isUpdate: false, // 是否修改
      loading: true, // table显示loading
      listQuery: {
        limit: 10,
        current: 1,
        total: 10,
        userName: undefined,
        sex: undefined
      }
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  //   请求mock数据得到list
  fetchData = () => {
    this.setState({ loading: true })
    requestList(this.state.listQuery).then(res => {
      const listQuery = { ...this.state.listQuery }
      listQuery.total = res.data.total
      this.setState({
        dataSource: res.data.items,
        loading: false,
        listQuery: listQuery
      })
    })
  }
  //   table翻页
  tableChange = pagination => {
    const listQuery = { ...this.state.listQuery }
    listQuery.current = pagination.current // 指定当前页数
    this.setState({ listQuery: listQuery }, () => {
      this.fetchData()
    }) // setState()为异步,需要采用匿名函数进行回调
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
      createNewSource.unshift({ key: uuId++, ...values })
      this.setState(
        { dataSource: createNewSource, visible: false },
        function() {
          this.notification('创建成功')
        }
      )
    })
  }
  // 右侧通知信息
  notification = describe => {
    notification['success']({
      message: '成功',
      description: describe
    })
  }
  // 某一行进行编辑
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

  //   提交修改信息
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
      this.setState(
        {
          visible: false,
          dataSource: replace(dataSource, tableRowKey, values)
        },
        function() {
          message.success('update success')
        }
      )
    })
  }

  //  删除某一行
  deleteClick = key => {
    const dataSource = [...this.state.dataSource]
    this.setState(
      { dataSource: dataSource.filter(item => item.key !== key) },() => {message.success('删除成功')}
    )
  }

  // sex同步select
  onChangeSex = value => {
    const listQuery = { ...this.state.listQuery }
    listQuery.sex = value // 指定current
    this.setState({ listQuery: listQuery })
  }
  // userName同步input
  onChangeUserName = e => {
    const listQuery = { ...this.state.listQuery }
    listQuery.userName = e.target.value
    this.setState({ listQuery: listQuery })
  }

  // 按照条件筛选
  onFilterSearch = () => {
    const { listQuery } = this.state
    listQuery.current = 1
    this.setState({ listQuery: listQuery }, () =>{
      this.fetchData()
    }) //匿名函数进行回调
  }
  render() {
    const { dataSource, visible, isUpdate, loading, listQuery } = this.state
    const userName = listQuery.userName
    const sex = listQuery.sex
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
          tableChange={this.tableChange}
          loading={loading}
          pagination={listQuery}
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
