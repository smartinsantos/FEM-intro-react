import React from 'react'
import { Link } from 'react-router'
// Redux
import { connect } from 'react-redux'
import { setSearchTerm } from './redux/actionCreators'

class Landing extends React.Component {
  handleSearchTermChange (e) {
    this.props.dispatch(setSearchTerm(e.target.value))
  }
  handleSearchSubmit (e) {
    e.preventDefault()
    this.context.router.transitionTo('/search')
  }
  render () {
    const { searchTerm } = this.props
    return (
      <div className='landing'>
        <h1>rVideo</h1>
        <form onSubmit={(e) => this.handleSearchSubmit(e)}>
          <input onChange={(e) => this.handleSearchTermChange(e)} value={searchTerm} type='text' placeholder='Search' />
        </form>
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
}

Landing.contextTypes = {
  router: React.PropTypes.object
}

Landing.propTypes = {
  searchTerm: React.PropTypes.string,
  dispatch: React.PropTypes.func
}

// this function will passdown searchTerm as a prop to the Landing component
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

// this is how connect attaches th return value of mapStateToProps to Landing component
export default connect(mapStateToProps)(Landing)
