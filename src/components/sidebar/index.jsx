import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout
const SubMenu = Menu.SubMenu

const list = [
  {
    key: '0',
    name: '首页',
    icon: 'laptop',
    url: '/dashboard'
  },
  {
    key: 'sub1',
    name: 'Components',
    icon: 'user',
    child: [
      {
        key: '1',
        name: 'Card',
        url: '/card'
      },
      {
        key: '2',
        name: 'Table',
        url: '/table'
      }
    ]
  },
  {
    key: '3',
    name: 'Page2',
    icon: 'file',
    url: '/page2'
  },
  {
    key: 'sub3',
    name: 'Team',
    icon: 'team',
    child: [
      {
        key: '4',
        name: 'team1',
        url: '/team1'
      },
      {
        key: '5',
        name: 'team2',
        url: '/team2'
      }
    ]
  }
]

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
    const menu = _menuProcess(list)
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
