import {
  SET_SEARCH_TERM,
  ADD_OMDB_DATA
} from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { searchTerm: action.searchTerm })
  return newState
}

const addOMDBData = (state, action) => {
  // create newOMDBData obj
  const newOMDBData = {}
  Object.assign(newOMDBData, state.omdbData, {[action.imdbID]: action.omdbData})
  // set new state
  const newState = {}
  Object.assign(newState, state, { omdbData: newOMDBData })
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  console.log('rootReducer action => ', action)
  console.log('current state => ', state)
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case ADD_OMDB_DATA:
      return addOMDBData(state, action)
    default:
      return state
  }
}

export default rootReducer
