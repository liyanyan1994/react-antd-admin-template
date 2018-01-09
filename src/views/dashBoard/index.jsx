import React from 'react'
import {Row} from 'antd'
import PanelGroup from './panelGroup/index'
import LineChart from './lineChart/index'
export default class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <p>dashBoard</p>
        <PanelGroup></PanelGroup>
        <Row style={{background:'#fff',padding:'16px 16px 0',marginBottom:'32px'}}>
            <LineChart></LineChart>
        </Row>
      </div>
    )
  }
}
