import observableFactory from './observable.ts'
import state from './state.ts'
const INITIAL_STATE = state


export default (initialState = INITIAL_STATE) => {
  const state = observableFactory(initialState)

  const deleteItem = (index: number) => {
    if (index < 0) {
      return
    }

    if (!state.movies[index]) {
      return
    }

    state.movies = state.movies.filter((state.movies, i) => i !== index)
  }
  return {
    addChangeListener: state.addChangeListener,
    deleteItem,
  }
}