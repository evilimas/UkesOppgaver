import observableFactory from './observable.js'

// const INITIAL_STATE = { => appState
//   todos: [],
//   currentFilter: 'All'
// }

/*
export default (initialState = INITIAL_STATE) => {
  const state = observableFactory(initialState)

  const deleteItem = index => {
    if (index < 0) {
      return
    }

    if (!state.movies[index]) {
      return
    }

    state.movies = state.movies.filter((todo, i) => i !== index)
  }
  return {
    addChangeListener: state.addChangeListener,
    deleteItem,
  }
}
  */