import React from 'react'
import { Table, Icon, Button, Popconfirm } from 'antd'

export default class FormTable extends React.Component {
  //   constructor(props) {
  //     super(props)
  //   }
  render() {
    const { dataSource, editClick, deleteClick,tableChange,loading,pagination} = this.props
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
        render: text => <span>{+text ? '女' : '男'}</span>
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
        key: 'opera',
        width: 100,
        render: (text, record) => (
          <div className="opera">
            <Button
              ghost
              type="primary"
              onClick={() => editClick(record.key)}
              style={{ marginRight: 5 }}
            >
              <Icon type="edit" />修改
            </Button>
            <Popconfirm
              title="确定要删除吗?"
              onConfirm={() => deleteClick(record.key)}
            >
              <Button type="danger">
                <Icon type="minus-square-o" />删除
              </Button>
            </Popconfirm>
          </div>
        )
      }
    ]
    return <Table columns={columns} dataSource={dataSource} bordered={true} loading={loading} onChange={tableChange} pagination = {pagination}/>
  }
}
