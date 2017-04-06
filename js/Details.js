import React, { Component } from 'react'
import axios from 'axios'
// Components
import Header from './Header'

class Details extends Component {
  constructor (props) {
    super(props)
    this.state = {
      omdbData: {}
    }
  }
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.props.show.imdbID}`)
    .then((res) => {
      this.setState({ omdbData: res.data })
    })
    .catch((err) => {
      console.error('axios error', err)
    })
  }
  render () {
    const { poster, title, year, description, trailer } = this.props.show

    let rating = this.state.omdbData.imdbRating
    ? <h3>{this.state.omdbData.imdbRating}</h3>
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
  })
}

export default Details
