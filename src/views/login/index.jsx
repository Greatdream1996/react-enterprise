import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form name='login-form' initialValues={{ remember: true }} onFinish={onFinish} style={{ width: '300px' }}>
        <Form.Item>
          <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Welcome to Login</h2>
        </Form.Item>
        <Form.Item name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input prefix={<UserOutlined />} placeholder='Username' />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password prefix={<LockOutlined />} placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
