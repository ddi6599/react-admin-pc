import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Icon, Card } from 'antd'
import CountUp from 'react-countup'
import './index.less'

class CardNumber extends Component{
    static propTypes = {
        icon: PropTypes.string,
        color: PropTypes.string,
        title: PropTypes.string,
        number: PropTypes.number,
        countUp: PropTypes.object
    }
    static defaultProps = {
        icon: 'question-circle-o',
        color: '#ccc9c9',
        title: 'Not Data',
        number: '0000',
        countUp: {},
    }
    render () {
        const {icon, color, title, number, countUp} = this.props
        return (
            <Card className="numberCard" bordered={false} bodyStyle={{ padding: 0 }}>
                <Icon className="iconWarp" style={{ color }} type={icon} />
                <div className="content">
                    <p className="title">{title}</p>
                    <p className="number">
                        <CountUp
                            start={0}
                            end={number}
                            duration={2.75}
                            useEasing
                            useGrouping
                            separator=","
                            {...countUp || {}}
                        />
                    </p>
                </div>
            </Card>
        )
    }
}

export default CardNumber