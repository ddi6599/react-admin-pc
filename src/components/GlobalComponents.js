import React from 'react'
import DefaultLoading from 'components/DefaultLoading'
import connect from 'connect'

@connect
export default class GlobalComponents extends React.Component {
  render () {
    const {loading} = this.props.state.config
    return (
      <div className="global-components-wrapper">
        <DefaultLoading show={loading.show} />
      </div>
    )
  }
}