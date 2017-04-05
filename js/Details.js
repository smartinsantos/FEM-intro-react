import React, { Component } from 'react'

class Details extends Component {
  render () {
    const { poster, title, year, description, trailer } = this.props.show
    return (
      <div className='details'>
        <header>
          <h1>rVideo</h1>
        </header>
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
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
    trailer: React.PropTypes.string
  })
}

export default Details
