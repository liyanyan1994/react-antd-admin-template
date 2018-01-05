import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class SiderMenu extends Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse = {this.onCollapse }
        >
          <div className="logo" />
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
          >
            <Menu.Item key="1">Tom</Menu.Item>
            <Menu.Item key="2">Bill</Menu.Item>
            <Menu.Item key="3">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
          >
            <Menu.Item key="4">Team 1</Menu.Item>
            <Menu.Item key="5">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
            <span>
              <Icon type="file" />
              <span className="nav-text">File</span>
            </span>
          </Menu.Item>
        </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Breadcrumb>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderMenu;
