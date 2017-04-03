// React
import React from 'react'
import { render } from 'react-dom'

// CSS
import '../public/normalize.css'
import '../public/style.css'

var App = React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>rVideo</h1>
          <input type='text' placeholder='Search' />
          <a>or Browse All</a>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
