import React, { Component } from 'react';
import { Button, Form, Input, Icon } from 'antd'
import './index.less'
import { withRouter } from 'react-router-dom'
import connect from 'connect'
const FormItem = Form.Item

@connect
@withRouter
class NormalLoginForm extends Component {
    componentDidMount () {
        const { history } = this.props
        if(window.localStorage.getItem('login_token')) {
            history.push('/')
        }
    }
    handleSubmit = (e) => {
        const { history, showLoading, hideLoading } = this.props
        showLoading()
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                window.localStorage.setItem('login_token',JSON.stringify(values))
                setTimeout(() => {
                    history.push('/')
                    hideLoading()
                },1000)

            }
        })
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="form">
                <div className="logo">
                    <img src={require('assets/images/logo.png')} width='100' alt="LOGO" />
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入账号' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="userName" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <p>
                            <span>Username：flying</span>
                            <span>Password：flying</span>
                        </p>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const Login = Form.create()(NormalLoginForm);
export default Login