import React from 'react'
import _ from 'lodash'
// Redux
import { connect } from 'react-redux'
import { getOMDBDetails } from './redux/actionCreators'
// Components
import Header from './Header'

class Details extends React.Component {
  componentDidMount () {
    if (!this.props.omdbData.imdbRating) {
      this.props.dispatch(getOMDBDetails(this.props.show.imdbID))
    }
  }
  render () {
    const { poster, title, year, description, trailer, imdbID } = this.props.show
    var rating = _.has(this.props.omdbData, imdbID)
    ? <h3>{this.props.omdbData[imdbID].imdbRating}</h3>
    : <img src='/public/img/loading.png' alt='loading indicator' />
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder='0'
            allowFullScreen
          />
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  show: React.PropTypes.shape({
    poster: React.PropTypes.string,
    title: React.PropTypes.string,
    year: React.PropTypes.string,
    description: React.PropTypes.string,
    trailer: React.PropTypes.string,
    imdbID: React.PropTypes.string
  }),
  omdbData: React.PropTypes.shape({
    imdbID: React.PropTypes.string,
    imdbRating: React.PropTypes.number
  }),
  dispatch: React.PropTypes.func
}

// this function will passdown searchTerm as a prop to the Landing component
const mapStateToProps = (state) => {
  return {
    omdbData: state.omdbData
  }
}

// this is how connect attaches th return value of mapStateToProps to Landing component
export default connect(mapStateToProps)(Details)
