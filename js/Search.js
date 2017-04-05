import React, { Component } from 'react'
import data from '../public/data.json'
import _ from 'lodash'

// Components
import ShowCard from './ShowCard'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: 'this is the default string'
    }
  }
  renderCard () {
    return _.map(data.shows, (show, idx) => {
      return <ShowCard show={show} key={show.imdbID} />
    })
  }
  render () {
    return (
      <div className='search'>
        <header>
          <h1>rVideo</h1>
          <input type='text' placeholder='Search' value={this.state.searchTerm} />
        </header>
        <div>
          { this.renderCard() }
        </div>
      </div>
    )
  }
}

export default Search
