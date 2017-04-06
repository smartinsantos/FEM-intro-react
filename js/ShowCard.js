import React, { Component } from 'react'
import { Link } from 'react-router'

class ShowCard extends Component {
  render () {
    const { poster, title, year, description, imdbID } = this.props.show
    return (
      <Link to={`/details/${imdbID}`}>
        <div className='show-card'>
          <img src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
}

ShowCard.propTypes = {
  show: React.PropTypes.shape({
    poster: React.PropTypes.string,
    title: React.PropTypes.string,
    year: React.PropTypes.string,
    description: React.PropTypes.string,
    imdbID: React.PropTypes.string
  })
}

export default ShowCard
