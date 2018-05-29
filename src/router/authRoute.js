import React from 'react'
// import store from '../store'
import { Route, Redirect } from 'react-router-dom'
export default class extends React.Component {
    render () {
        let {component: Component, ...rest} = this.props
        // 是否登录
        // if (!store.getState().user.user.name) {
        //     return <Redirect to='/login' />
        // }
        if (!window.localStorage.getItem('login_token')) {
            return <Redirect to='/login' />
        }
        return <Route {...rest}  component={Component}/>
    }
}
