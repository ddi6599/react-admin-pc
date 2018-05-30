import React, { Component } from 'react'
import { Menu, Icon, Avatar, Badge } from 'antd'
import {withRouter} from 'react-router-dom'
import './index.less'
const SubMenu = Menu.SubMenu

@withRouter
class Head extends Component {
    state = {
        current: '/',
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    handleLoginOut = () => { // arrow function to bind this
        const { history } = this.props
        history.push(`/login`)
    }
    render() {
        return (
            <div className="head-wrap">
                <div className="head-container">
                    <div className="left-menu">
                        <div><img src={require('assets/images/logo.png')} height='47' alt="LOGO" /></div>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="/">
                                <Icon type="coffee" />
                                首页
                            </Menu.Item>
                            <SubMenu title={<span><Icon type="desktop" />系统管理</span>}>
                                <Menu.Item key="sys-dic"><Icon type="filter" />字典管理</Menu.Item>
                                <Menu.Item key="sys-tags"><Icon type="tag-o" />标签管理</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span><Icon type="user" />用户管理</span>}>
                                <Menu.Item key="user-list"><Icon type="pushpin-o" />用户列表</Menu.Item>
                                <Menu.Item key="user-new"><Icon type="folder-add" />创建用户</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span><Icon type="shop" />活动管理</span>}>
                                <Menu.Item key="activity-list"><Icon type="compass" />活动列表</Menu.Item>
                                <Menu.Item key="activity-new"><Icon type="select" />创建活动</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span><Icon type="table" />报表管理</span>}>
                                <Menu.Item key="rpt-region"><Icon type="area-chart" />地域特征</Menu.Item>
                                <Menu.Item key="rpt-buy"><Icon type="bar-chart" />购买特征</Menu.Item>
                                <Menu.Item key="rpt-crow"><Icon type="pie-chart" />人群特征</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="right-menu">
                        <div>
                            <span className="message-tips">
                              <Badge dot><Avatar icon="mail" size="small" /></Badge>
                            </span>
                        </div>
                        <div>
                            <Menu
                                onClick={this.handleLoginOut}
                                mode="horizontal"
                            >
                                <SubMenu title={<span><Icon type="user" />guest</span>}>
                                    <Menu.Item key="user:logout"><Icon type="logout" />退出</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Head