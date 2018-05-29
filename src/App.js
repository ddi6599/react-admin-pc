import React, { Component } from 'react';
import HeaderBar from 'components/HeadBar'
import FooterBar from 'components/TabsBar'
const mainStyles = {
    width: '100%',
    height: 'calc(100% - 1rem)'
}
class App extends Component {
    render () {
        return (
            <div id="container">
                <HeaderBar/>
                <main style={mainStyles}>
                    {this.props.children}
                </main>
                <FooterBar/>
            </div>
        )
    }
}
export default App
