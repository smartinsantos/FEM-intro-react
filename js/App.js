// React
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
// REDUX
import { Provider } from 'react-redux'
import store from './redux/store'
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
      <Provider store={store}>
        <BrowserRouter>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match
              pattern='/search'
              component={(props) => <Search shows={data.shows} {...props} />}
            />
            <Match
              pattern='/details/:id'
              component={(props) => {
                // filter the one show by its id, if not return null, then return details with the selected show
                const show = data.shows.filter((show) => props.params.id === show.imdbID)[0] || null
                return <Details show={show} {...props} />
              }}
            />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
