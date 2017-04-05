import React, { Component } from 'react'
import _ from 'lodash'

// Components
import ShowCard from './ShowCard'

class Search extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      searchTerm: ''
    }
  }
  handleSearchTermChange (e) {
    this.setState({ searchTerm: e.target.value })
  }
  renderCard () {
    const filteredShows = _.filter(this.props.shows, (show) => {
      return `${show.title} ${show.description}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >= 0
    })
    const genShowCards = _.map(filteredShows, (show, idx) => {
      return <ShowCard show={show} key={show.imdbID} />
    })
    return genShowCards
  }
  render () {
    return (
      <div className='search'>
        <header>
          <h1>rVideo</h1>
          <input type='text' placeholder='Search' value={this.state.searchTerm} onChange={(e) => { this.handleSearchTermChange(e) }} />
        </header>
        <div>
          { this.renderCard() }
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  shows: React.PropTypes.array
}

export default Search
