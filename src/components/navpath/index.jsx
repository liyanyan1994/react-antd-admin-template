import React from 'react'
import { Breadcrumb, Icon } from 'antd'
export default class NavPath extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: this.props.initialChecked
    }
    this.toggle = this.toggle.bind(this) //必须要绑定this
  }

  toggle() {
    const newState = !this.state.collapsed
    this.setState({ collapsed: newState })
    this.props.callbackParent(newState) //子组件调用父组件的callbackParent函数，传递新值到父组件
  }

  render() {
    return (
      <div style={{ marginLeft: 10 }}>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <Breadcrumb style={{ margin: '24px 16px 0', display: 'inline-block' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
