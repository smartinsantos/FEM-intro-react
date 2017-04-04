// React
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
// CSS
import '../public/normalize.css'
import '../public/style.css'

// Components
import Landing from './Landing'
import Search from './Search'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
