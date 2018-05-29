import React, { Component } from 'react';
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom'
import connect from 'connect'
@connect
@withRouter
class Personal extends Component {
    componentDidMount () {
        console.log(this.props)
    }
    loginOut () {
        const { history, showLoading, hideLoading } = this.props
        window.localStorage.removeItem('login_token')
        showLoading()
        setTimeout(() => {
            history.push('/login')
            hideLoading()
        },2000)
    }
    render () {
        return (
            <div>
                <h1>Personal Page</h1>
                <div onClick={this.loginOut.bind(this)}>click me to loginOut</div>
                <div><Link to={`${this.props.match.url}/1`}>To Personal Child1</Link></div>
                <div><Link to={`${this.props.match.url}/2`}>To Personal Child2</Link></div>
                <Route>
                    <Switch>
                        <Route path={`${this.props.match.url}/1`} component={() => <h3>这里是子1</h3>}/>
                        <Route path={`${this.props.match.url}/2`} component={() => <h3>这里是子2</h3>}/>
                        <Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/1`}></Redirect>
                    </Switch>
                </Route>
            </div>
        )
    }
}

export default Personal