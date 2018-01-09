import React from 'react'
import { Row, Col, Card } from 'antd'

import './index.css'

export default class PanelGroup extends React.Component {
  render() {
    return (
      <Row gutter={32}>
        <Col span="6" className="card-panel-col">
          <Card className="card-panel">
            <div className="card-panel-icon-wrapper">
              <i className="icon iconfont icon-people card-panel-icon" />
            </div>
            <div className="card-panel-description">
              <div className="card-panel-text">New Lists</div>
              <p className="card-panel-num">12233</p>
            </div>
          </Card>
        </Col>
        <Col span="6" className="card-panel-col">
          <Card className="card-panel">
            <div className="card-panel-icon-wrapper">
              <i className="icon iconfont icon-messagex card-panel-icon" />
            </div>
            <div className="card-panel-description">
              <div className="card-panel-text">Messages</div>
              <p className="card-panel-num">12233</p>
            </div>
          </Card>
        </Col>
        <Col span="6" className="card-panel-col">
          <Card className="card-panel">
            <div className="card-panel-icon-wrapper">
              <i className="icon iconfont icon-qian card-panel-icon" />
            </div>
            <div className="card-panel-description">
              <div className="card-panel-text">Purchase</div>
              <p className="card-panel-num">9280</p>
            </div>
          </Card>
        </Col>
        <Col span="6" className="card-panel-col">
          <Card className="card-panel">
            <div className="card-panel-icon-wrapper">
              <i className="icon iconfont icon-gouwuche card-panel-icon" />
            </div>
            <div className="card-panel-description">
              <div className="card-panel-text">shoppings</div>
              <p className="card-panel-num">163600</p>
            </div>
          </Card>
        </Col>
      </Row>
    )
  }
}
