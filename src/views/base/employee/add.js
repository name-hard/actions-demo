import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import api from '../../../assets/js/api'
const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 20
  }
}

export default class EmployeeAdd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  componentDidMount () {
    let params = { a: 1 }
    api.base.list(params).then((response) => {
      console.log(response)
      this.setState({
        list: response.data
      })
    }).catch((error) => {
      console.log(error)
    });
  }

  render () {
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
