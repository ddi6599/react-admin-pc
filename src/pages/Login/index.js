import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Login extends Component {
    componentDidMount () {
        console.log(this.props)
        const { history } = this.props
        if(window.localStorage.getItem('login_token')) {
            history.push('/')
        }
    }
    login () {
        const { history } = this.props
        window.localStorage.setItem('login_token','_userName_liMing')
        history.push('/')
    }
    render () {
        return (
            <div>
                <h1>Login Page</h1>
                <div onClick={this.login.bind(this)}>click me to login</div>
                <div><Link to='/'>To Index</Link></div>
            </div>
        )
    }
}

export default Login