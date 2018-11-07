import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import '../index.less'

class Sale extends Component {
  static propTypes = {
    data: PropTypes.array
  }
  static defaultProps = {
    data: []
  }

  render () {
    const {data} = this.props
    return (
      <div>
        <div>月度销售</div>
        <ResponsiveContainer minHeight={325}>
          <LineChart data={data}>
            <Legend verticalAlign="top"
                    content={(prop) => {
                      const {payload} = prop
                      return (<ul className="legend-list">
                        {payload.map ((item, key) => <li key={key}><span className="radiusdot"
                                                                         style={{background: item.color}} />{item.value}
                        </li>)}
                      </ul>)
                    }}
            />
            <XAxis dataKey="name" axisLine={{strokeWidth: 1}} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip
              wrapperStyle={{border: 'none', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)'}}
              content={(content) => {
                const list = content.payload.map ((item, key) => <li key={key}><span
                  style={{background: item.color}} />{`${item.name}:${item.value}`}</li>)
                return <div><p>{content.label}</p>
                  <ul>{list}</ul>
                </div>
              }}
            />
            <Line type="monotone" dataKey="总销售额" stroke='purple' strokeWidth={3} dot={{fill: 'purple'}}
                  activeDot={{r: 5, strokeWidth: 0}} />
            <Line type="monotone" dataKey="外卖" stroke='green' strokeWidth={3} dot={{fill: 'green'}}
                  activeDot={{r: 5, strokeWidth: 0}} />
            <Line type="monotone" dataKey="套餐" stroke='blue' strokeWidth={3} dot={{fill: 'blue'}}
                  activeDot={{r: 5, strokeWidth: 0}} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default Sale