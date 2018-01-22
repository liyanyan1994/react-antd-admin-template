import React from 'react'
import { Table, Icon,Button } from 'antd'

export default class FormTable extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName',
        width: 100
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        width: 70,
        render: (text) => (<span>{+text? '女': '男'}</span>)
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        width: 70
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        width: 200
      },
      {
        title: '操作',
        dataIndex: 'Opera',
        key:'opera',
        width: 100,
        render: (text, record) => (
          <div className="opera">
            <Button type="dashed" style={{marginRight:5}}>
              <Icon type="edit"></Icon>修改
            </Button>
            <Button>
              <Icon type="minus-square-o" />删除
            </Button>
          </div>
        )
      }
    ]
    const {dataSource} = this.props
    return (
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered={true}
        rowKey="formTable"
      />
    )
  }
}