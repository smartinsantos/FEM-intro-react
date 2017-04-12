import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
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
    const { handleSearchTermChange, searchTerm, showSearch } = this.props
    return (
      showSearch ? this.withShowSearch(handleSearchTermChange, searchTerm) : this.withLinkBack()
    )
  }
}

Header.propTypes = {
  handleSearchTermChange: React.PropTypes.func,
  searchTerm: React.PropTypes.string,
  showSearch: React.PropTypes.bool
}

export default Header
