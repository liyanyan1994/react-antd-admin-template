import React from 'react'
import './index.css'
import { Card,Progress } from 'antd'
export default class BoxCard extends React.Component {
  render() {
    return (
      <Card bordered={false}>
        <div>
            <img className='card-img' alt="example" width="100%" src="http://www.liyanyan1994.xyz/images/01.jpg" />
        </div>
        <div className='progress-item'>
            <span>React</span>
            <Progress percent={80} />
        </div>
        <div className='progress-item'>
            <span>Antd Design</span>
            <Progress percent={50} />
        </div>
        <div className='progress-item'>
            <span>Eslints</span>
            <Progress percent={30} />
        </div>
      </Card>
    )
  }
}
