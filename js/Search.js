import React, { Component } from 'react'
import _ from 'lodash'
// Components
import ShowCard from './ShowCard'
import Header from './Header'

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
        <Header
          handleSearchTermChange={(e) => this.handleSearchTermChange(e)}
          searchTerm={this.state.searchTerm}
          showSearch
        />
        <div>
          { this.renderCards(shows) }
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  shows: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    description: React.PropTypes.string
  }))
}

export default Search
