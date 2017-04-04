import React, { Component } from 'react'
import data from '../public/data.json'

class Search extends Component {
  render () {
    return (
      <div className='search'>
        <h1>CACATUA22</h1>
        <pre><code>{JSON.stringify(data, null, null)}</code></pre>
      </div>
    )
  }
}

export default Search
