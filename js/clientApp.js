// React
import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
// CSS
import '../public/normalize.css'
import '../public/style.css'

// Components
import Landing from './Landing'

var App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
