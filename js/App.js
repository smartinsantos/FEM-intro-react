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
import Details from './Details'

// Data
import data from '../public/data.json'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match
            pattern='/search'
            component={(props) => <Search shows={data.shows} {...props} />}
          />
          <Match pattern='/details/:id' component={Details} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
