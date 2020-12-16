import React, { Component } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;
const { Sider } = Layout;
export default class SideMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined/>} title="系统管理">
            <Menu.Item key="1">
              <Link to='/employee'>人员信息</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}
