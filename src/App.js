import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderBar from 'components/HeadBar'
import FooterBar from 'components/TabsBar'
const {Content } = Layout;
const mainStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
}
class App extends Component {
    render () {
        return (
            <Layout id="container" style={{height: '100vh'}}>
                <HeaderBar/>
                <Content style={{backgroundColor:'#fff'}}>
                    <div style={mainStyles}>
                        {this.props.children}
                    </div>
                </Content>
                <FooterBar/>
            </Layout>
        )
    }
}
export default App
