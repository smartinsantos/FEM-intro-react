import React, { Component } from 'react'

class Details extends Component {
  render () {
    return (
      <div className='details'>
        <pre><code>{JSON.stringify(this.props, null, 4)}</code></pre>
      </div>
    )
  }
}

export default Details
