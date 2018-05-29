import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Home extends Component {
    render () {
        return (
            <div>
                <h1>Home Page</h1>
                <div><Link to='/login'>To Login</Link></div>
                <div><Link to='/personal'>To Personal</Link></div>
                <div>personalPage need authority</div>
            </div>
        )
    }
}

export default Home