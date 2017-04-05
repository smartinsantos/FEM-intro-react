import React, { Component } from 'react'

class Details extends Component {
  render () {
    return (
      <div className='details'>
        <pre><code>{JSON.stringify(this.props.show, null, 4)}</code></pre>
      </div>
    )
  }
}

Details.propTypes = {
  show: React.PropTypes.shape({
    poster: React.PropTypes.string,
    title: React.PropTypes.string,
    year: React.PropTypes.string,
    description: React.PropTypes.string
  })
}

export default Details
