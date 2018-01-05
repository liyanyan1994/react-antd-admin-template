import './index.css'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import { childRoutes } from '../../router/index'
import SiderBar from '../../components/sidebar/index'
import NavPath from '../../components/navpath/index'

const { Header, Content } = Layout

class App extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false
    }
    this.onCheckedChange = this.onCheckedChange.bind(this);
  }
  // 父组件接收到子组件传递过来的值，进行下一步操作
  onCheckedChange(newState) {
    this.setState({ collapsed: newState })
  }
  render() {
    return (
      <Layout>
        <SiderBar checked={this.state.collapsed} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <NavPath
              initialChecked={this.state.collapsed}
              callbackParent={this.onCheckedChange}
            />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ minHeight: 460 }}>
              {childRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                  exact={route.exactly}
                />
              ))}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
