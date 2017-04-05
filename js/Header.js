import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  withShowSearch (handleSearchTermChange, searchTerm) {
    return (
      <header>
        <h1>rVideo</h1>
        <input type='text' placeholder='Search' value={searchTerm} onChange={handleSearchTermChange} />
      </header>
    )
  }
  withLinkBack () {
    return (
      <header>
        <h1>rVideo</h1>
        <Link to='/search'>
          Back
        </Link>
      </header>
    )
  }
  render () {
    const { handleSearchTermChange, showSearch, searchTerm } = this.props
    return (
      showSearch ? this.withShowSearch(handleSearchTermChange, searchTerm) : this.withLinkBack()
    )
  }
}

Header.propTypes = {
  handleSearchTermChange: React.PropTypes.func,
  showSearch: React.PropTypes.bool,
  searchTerm: React.PropTypes.string
}

export default Header
