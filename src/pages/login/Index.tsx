import React from 'react';
import './index.scss'
import { Form, Input, Button } from 'antd'
import * as Valid from '../../utils/valid'
import logo from '../../assets/images/logo.png'

const Login: React.FC<any> = (props) => {

  /**
   * 登录执行
   */
  const handleSubmit = (e:any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
        props.history.push('/')
      }
    });
  }

  const { getFieldDecorator } = props.form;
  return (
    <div className='login'>
      <div className="login-form">
        <img src={logo} className="logo" alt=""/>
        <Form layout="horizontal" onSubmit={handleSubmit} labelCol={{ span: 5 }} wrapperCol={{ span: 17, offset: 1 }}>
          <Form.Item label="账号">
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: '请输入用户账号' },
                { validator: Valid.isUser}
              ],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item label="密码">
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: '请输入用户密码' },
                { validator: Valid.isPwd }
              ],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit" style={{width: '180px'}} icon="login">
              登录
          </Button>
          </Form.Item>
        </Form>
        <p className="note">注：admin-超级管理员账号，user-普通用户</p>
      </div>

    </div>
  )
}

export default Form.create<any>()(Login)
