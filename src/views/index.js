import React, { Component } from 'react'
import { Layout } from 'antd'
import SideMenu from '../components/sidemenu'
import { Switch, Route } from 'react-router-dom'
import EmployeeList from './base/employee/list'
import EmployeeListAdd from './base/employee/add'

const { Header, Content } = Layout

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo"/>
          </Header>
          <Layout>
            <SideMenu />
            <Layout style={{ padding: '24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                <Switch>
                  <Route path="/employee/add" component={EmployeeListAdd}></Route>
                  <Route path="/employee" component={EmployeeList}></Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}
