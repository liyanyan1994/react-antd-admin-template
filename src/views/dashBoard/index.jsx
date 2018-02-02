import React from 'react'
import { Row, Col, Card } from 'antd'
import PanelGroup from './panelGroup/index'
import LineChart from './lineChart/index'
import RadarChart from './radarChart/index'
import PieChart from './pieChart/index'
import BarChart from './barChart/index'
import TransactionTable from './transactionTable/index'
import BoxCard from './boxCard/index'
import Todo from '../../components/todolist/index'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default class DashBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      chartData: lineChartData.newVisitis
    }
  }
  handleSetLineChartData = type => {
    this.setState({
      chartData: lineChartData[type]
    })
  }

  render() {
    return (
      <div>
        <PanelGroup handleSetLineChartData={this.handleSetLineChartData} />
        <Row
          style={{
            background: '#fff',
            padding: '16px 16px 0',
            marginBottom: '32px'
          }}
        >
          <LineChart chartData={this.state.chartData} />
        </Row>
        <Row gutter={16} style={{ marginBottom: '20px' }}>
          <Col span={8}>
            <Card bordered={false}>
              <RadarChart />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <PieChart height="400px" />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <BarChart />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card bordered={false}>
              <TransactionTable />
            </Card>
          </Col>
          <Col span={8}>
            <Todo />
          </Col>
          <Col span={8}>
            <BoxCard />
          </Col>
        </Row>
      </div>
    )
  }
}
