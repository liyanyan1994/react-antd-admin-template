import React from 'react'
import { Table,Button } from 'antd'

const { Column} = Table

const data = [
  {
    key: '1',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    status: 0
  },
  {
    key: '2',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    status: 1
  },
  {
    key: '3',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    status: 1
  },
  {
    key: '4',
    lastName: 'Helen',
    age: 18,
    address: 'Units States No. 1 Park',
    status: 0
  }
]
export default class Tables extends React.Component {
  render() {
    return (
      <Table dataSource={data} pagination={false}>
        <Column title="Name" dataIndex="lastName" key="lastName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Status"
          key="status"
          dataIndex="status"
          render={(text) => (
            <Button type={text? 'primary':'danger'} ghost size='small'>
             {text ? 'Success':'Pending'}
            </Button>
          )}
        />
      </Table>
    )
  }
}
