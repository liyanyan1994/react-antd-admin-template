import React from 'react'
import { Tabs, Card } from 'antd'
import TabTable from './tabTable'
const TabPane = Tabs.TabPane

const data = [
  {
    name: 'China',
    key: 'china',
    data: [
      {
        key: '1',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 111 Lake Park',
        status: 0
      },
      {
        key: '2',
        lastName: 'Linda',
        age: 42,
        address: 'London No. 1 Lake Park',
        status: 1
      },
      {
        key: '3',
        lastName: 'Hello Mrs',
        age: 23,
        address: 'London No. 12 Lake Park',
        status: 0
      },
      {
        key: '4',
        lastName: 'sdf n',
        age: 12,
        address: 'London No. 103 Lake Park',
        status: 1
      }
    ]
  },
  {
    name: 'USA',
    key: 'usa',
    data: [
      {
        key: '5',
        lastName: 'Green',
        age: 43,
        address: 'London No. 1 Lake Park',
        status: 1
      },
      {
        key: '6',
        lastName: 'Books',
        age: 22,
        address: 'London No. 1 Lake Park',
        status: 0
      },
      {
        key: '7',
        lastName: 'Yeloos',
        age: 12,
        address: 'London No. 121 Lake Park',
        status: 0
      },
      {
        key: '8',
        lastName: 'Green',
        age: 28,
        address: 'London No. 1 Lake Park',
        status: 1
      },
      {
        key: '9',
        lastName: 'Butents',
        age: 18,
        address: 'London No. 14 Lake Park',
        status: 1
      }
    ]
  },
  {
    name: 'Japan',
    key: 'Japan',
    data: [
      {
        key: '9',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        status: 1
      },
      {
        key: '10',
        lastName: 'TelPhone',
        age: 24,
        address: 'Sidney No. 12 Lake Park',
        status: 1
      },
      {
        key: '11',
        lastName: 'Whitney',
        age: 12,
        address: 'Sidney No. 31 Lake Park',
        status: 0
      },
      {
        key: '12',
        lastName: 'Black',
        age: 23,
        address: 'Sidney No. 1 Lake Park',
        status: 0
      }
    ]
  },
  {
    name: 'Europen',
    key: 'europen',
    data: [
      {
        key: '13',
        lastName: 'Helen',
        age: 28,
        address: 'Units States No. 10 Park',
        status: 1
      },
      {
        key: '14',
        lastName: 'Mixin',
        age: 13,
        address: 'Units States No. 11 Park',
        status: 0
      },
      {
        key: '15',
        lastName: 'Elinst',
        age: 29,
        address: 'Units States No. 112 Park',
        status: 1
      },
      {
        key: '16',
        lastName: 'Jest',
        age: 18,
        address: 'Units States No. 123 Park',
        status: 0
      }
    ]
  }
]

export default class Tab extends React.Component {
  render() {
    return (
      <Card className="tab-container">
        <Tabs>
          {data.map(item => (
            <TabPane tab={item.name} key={item.key}>
              <TabTable data={item.data} />
            </TabPane>
          ))}
        </Tabs>
      </Card>
    )
  }
}
