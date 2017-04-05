import React, { Component } from 'react'
import _ from 'lodash'

// Components
import ShowCard from './ShowCard'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }
  handleSearchTermChange (e) {
    this.setState({ searchTerm: e.target.value })
  }
  renderCards (shows) {
    const filteredShows = _.filter(shows, (show) => {
      return `${show.title} ${show.description}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >= 0
    })
    const genShowCards = _.map(filteredShows, (show, idx) => {
      return <ShowCard show={show} key={show.imdbID} />
    })
    return genShowCards
  }
  render () {
    const { shows } = this.props
    return (
      <div className='search'>
        <header>
          <h1>rVideo</h1>
          <input type='text' placeholder='Search' value={this.state.searchTerm} onChange={(e) => { this.handleSearchTermChange(e) }} />
        </header>
        <div>
          { this.renderCards(shows) }
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  shows: React.PropTypes.array
}

export default Search
