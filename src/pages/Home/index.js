import React, { Component } from 'react'
import CardNumber from 'components/CardNumber'
import Sale from './content/sale'
import ShowTable from './content/showTable'
import { Row, Col, Card, Icon, Avatar } from 'antd'
import './index.less'
const { Meta } = Card;
class Home extends Component {
    state = {
        numbers : [
            {color:"#eade40", icon: "usergroup-add", number: 6781, title: "访问人数"},
            {color:"#64ea91", icon: "contacts", number: 1781, title: "活跃人数"},
            {color:"#ea4e21", icon: "pay-circle-o", number: 22781, title: "营业额"},
            {color:"#265dea", icon: "switcher", number: 2781, title: "订单量"}
        ],
        sales : [
            { '总销售额': 7388, '外卖': 1979, '套餐': 1918, name: '2018-01' },
            { '总销售额': 11388, '外卖': 4599, '套餐': 3198, name: '2018-02' },
            { '总销售额': 12388, '外卖': 5499, '套餐': 2298, name: '2018-03' },
            { '总销售额': 19388, '外卖': 9499, '套餐': 1498, name: '2018-04' },
            { '总销售额': 21388, '外卖': 9489, '套餐': 1198, name: '2018-05' }
        ],
        columns : [
            { title: 'Name', dataIndex: 'name', key: 'name' },
            { title: 'Age', dataIndex: 'age', key: 'age' },
            { title: 'Address', dataIndex: 'address', key: 'address' },
            { title: 'Action', dataIndex: '', key: 'x', render: () => <a href="javascript:;">Delete</a> },
        ],
        data : [
            { key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
            { key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
            { key: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
            { key: 4, name: 'Jio Cio', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
            { key: 5, name: 'Jeri Grace', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' }
        ],
    }
    render () {
        const numberCards = this.state.numbers.map((item, key) => (<Col key={key} lg={6} md={12}>
            <CardNumber {...item} />
        </Col>))
        return (
            <div className="home-top">
                <Row gutter={24}>
                    {numberCards}
                    <Col lg={18} md={24}>
                        <Card bordered={false}
                              bodyStyle={{
                                  padding: '24px 36px 24px 0',
                              }}
                        >
                            <Sale data={this.state.sales} />
                        </Card>
                    </Col>
                    <Col lg={6} md={24}>
                        <Card bordered={false}
                              bodyStyle={{
                                  paddingTop: 30,
                                  height: 177,
                              }}
                              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    </Col>
                    <Col lg={12} md={24}>
                        <ShowTable data={this.state.data} columns={this.state.columns} />
                    </Col>
                    <Col lg={12} md={24}>
                        <ShowTable data={this.state.data} columns={this.state.columns} />
                    </Col>
                    </Row>
            </div>
        )
    }
}

export default Home