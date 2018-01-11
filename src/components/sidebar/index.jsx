import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { childRoutes } from '../../router/index'

import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout
const SubMenu = Menu.SubMenu

class SiderBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: this.props.checked,
      mode: this.props.checked ? 'vertical' : 'inline',
    }
  }
  // 父组件属性改变时的钩子函数
  componentWillReceiveProps(nextProps){
    const {checked} = nextProps
    this.setState({
        collapsed: checked,
        mode: checked ? 'vertical' : 'inline',
    })
  }
  render() {
    const _menuProcess = (nodes, pkey) => {
      return (
        Array.isArray(nodes) &&
        nodes.map((item, i) => {
          const menu = _menuProcess(item.child, item.key)
          if (menu.length > 0) {
            return (
              <SubMenu
                key={'sub' + item.key}
                title={
                  <span>
                    <Icon type={item.icon} />
                    <span className="nav-text">{item.name}</span>
                  </span>
                }
              >
                {menu}
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item key={'menu' + item.key}>
                {item.url ? (
                  <Link to={item.url}>
                    <span className="nav-text">
                      {item.icon && <Icon type={item.icon} />}
                      {item.name}
                    </span>
                  </Link>
                ) : (
                  <span className="nav-text">
                    {item.icon && <Icon type={item.icon} />}
                    {item.name}
                  </span>
                )}
              </Menu.Item>
            )
          }
        })
      )
    }
    const menu = _menuProcess(childRoutes)
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['0']}>
          {menu}
        </Menu>
      </Sider>
    )
  }
}

export default SiderBar
