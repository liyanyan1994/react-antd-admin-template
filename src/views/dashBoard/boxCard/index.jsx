import React from 'react'
import './index.css'
import { Card,Progress } from 'antd'
export default class BoxCard extends React.Component {
  render() {
    return (
      <Card bordered={false}>
        <div>
            <img className='card-img' alt="example" width="100%" src="https://pic2.zhimg.com/80/v2-470c39038b351a82b647630497355e46_r.jpg" />
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
