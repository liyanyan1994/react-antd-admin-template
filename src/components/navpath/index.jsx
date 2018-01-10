import React from 'react'
import './index.css'
import { Breadcrumb, Icon, Dropdown, Menu, Avatar } from 'antd'
import { Link, withRouter, } from 'react-router-dom'

class NavPath extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: this.props.initialChecked
    }
    this.toggle = this.toggle.bind(this) //必须要绑定this
    this.handleLoginOut = this.handleLoginOut.bind(this)
  }
  componentDidMount(){
    console.log('----navpath-----')
  }
  componentWillReceiveProps(){
    console.log('----componentWillReceiveProps-----')
    console.log(this.props.history.location.pathname)
  }
  toggle() {
    const newState = !this.state.collapsed
    this.setState({ collapsed: newState })
    this.props.callbackParent(newState) //子组件调用父组件的callbackParent函数，传递新值到父组件
  }
  handleLoginOut = () =>{
    console.log('loginout')
    console.log(this.props.router)
    this.props.history.replace('/login')
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Link to="/page2">首页</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/liyanyan1994/react-antd-admin-template"
          >
            项目地址
          </a>
        </Menu.Item>
        <Menu.Item key="3" >
          <a onClick={this.handleLoginOut}>退出登录</a>
        </Menu.Item>
      </Menu>
    )
    return (
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <Breadcrumb style={{ margin: '24px 16px 0', display: 'inline-block' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="drop-down">
          <Dropdown overlay={menu}>
            <a className="antd-drown-link">
              <Avatar shape="square" icon="user" />
            </a>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default withRouter(NavPath)