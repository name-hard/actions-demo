import React, { Component } from 'react'
import './login.less'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        remember: true,
        username: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input your Username!' }
        ],
        pwd: [
          { required: true, message: 'Please input your Password!' }
        ]
      }
    }
  }

  formRef = React.createRef();

  onFinish = (values) => {
    this.props.history.push('/')
    console.log('Received values of form: ', values);
  };

  componentDidMount () {
  }

  render () {
    return (
      <div className="login-page">
        <div className="login-form">
          <p className="login-title">XX系统</p>
          <Form
            ref={this.formRef}
            name="normal_login"
            initialValues={this.state.form}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={this.state.rules.name}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={this.state.rules.pwd}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object
}
