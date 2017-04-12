import React from 'react'
import _ from 'lodash'
// REDUX
import connect from 'react-redux'
// Components
import ShowCard from './ShowCard'
import Header from './Header'

class Search extends React.Component {
  renderCards (shows) {
    const { searchTerm } = this.props
    const filteredShows = _.filter(shows, (show) => {
      return `${show.title} ${show.description}`.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
    })
    const genShowCards = _.map(filteredShows, (show, idx) => {
      return <ShowCard show={show} key={show.imdbID} />
    })
    return genShowCards
  }
  render () {
    const { shows, searchTerm } = this.props
    return (
      <div className='search'>
        <Header
          handleSearchTermChange={(e) => this.handleSearchTermChange(e)}
          searchTerm={searchTerm}
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
  })),
  searchTerm: React.PropTypes.string
}


// this function will passdown searchTerm as a prop to the Landing component
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

// this is how connect attaches th return value of mapStateToProps to Landing component
export default connect(mapStateToProps)(Search)
