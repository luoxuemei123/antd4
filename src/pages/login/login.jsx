import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import {getToken} from '../../api'
import logo from './image/logo1.jpeg'
const Login = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    let data = new FormData();
    data.append('username','gy_jt01')
    data.append('password','123456')
    data.append('grant_type','password')
    getToken(data)
  };
  return (
    <div className="login">
      <div className="login-heater">
        <img src={logo} alt="" />
        <h1>后台管理系统</h1>
      </div>
      <div className="login-content">
        <h1>用户登录</h1>
        <div>
          <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" >
                登录
              </Button>
              <Button onClick={() => {
                form.resetFields();
              }}
              >
                重置
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default Login
