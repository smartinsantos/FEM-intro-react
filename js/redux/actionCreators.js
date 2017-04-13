import axios from 'axios'
import {
  SET_SEARCH_TERM,
  ADD_OMDB_DATA
} from './actions'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addOMDBData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID, omdbData }
}

export function getOMDBDetails (imdbID) {
  console.log('imdbID => ', imdbID)
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
    .then((res) => {
      console.log('res => ', res)
      dispatch(addOMDBData(imdbID, res.data))
    })
    .catch((err) => {
      console.error('axios error', err)
    })
  }
}
