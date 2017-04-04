import React, { Component } from 'react'
import data from '../public/data.json'
import _ from 'lodash'

// Components
import ShowCard from './ShowCard'

class Search extends Component {
  render () {
    return (
      <div className='search'>
        {_.map(data.shows, (show, idx) => {
          return (
            <ShowCard show={show} key={show.imdbID} />
          )
        })}
      </div>
    )
  }
}

export default Search
