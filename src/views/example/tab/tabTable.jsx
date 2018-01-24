import React from 'react'
import { Table,Button} from 'antd'
const { Column} = Table

export default class TabTable extends React.Component {
  render() {
    const {data} = this.props
    return (
      <Table dataSource={data} pagination={false}>
        <Column title="Name" dataIndex="lastName" key="lastName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Status"
          key="status"
          dataIndex="status"
          render={text => (
            <Button type={text ? 'primary' : 'danger'} ghost size="small">
              {text ? 'Success' : 'Pending'}
            </Button>
          )}
        />
      </Table>
    )
  }
}
