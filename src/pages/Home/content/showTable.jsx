import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import '../index.less'

class ShowTable extends Component {
  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
  }
  static defaultProps = {
    data: [],
    columns: [],
  }

  render () {
    const {columns, data} = this.props
    return (
      <div className="showTable">
        <Table
          pagination={{
            hideOnSinglePage: true
          }
          }
          columns={columns}
          rowKey={(record, key) => key}
          expandedRowRender={record => <p style={{margin: 0}}>{record.description}</p>}
          dataSource={data}
        />
      </div>

    )
  }
}

export default ShowTable