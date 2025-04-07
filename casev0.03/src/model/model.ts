import observableFactory from './observable.ts';
import * as model from './state.ts';
const INITIAL_STATE = { ...model};
// const candidate = state.candidateUpdateEvents

export default (initialState = INITIAL_STATE) => {
  const state = observableFactory(initialState);

  const deleteItem = (index: number) => {
    if (index < 0) {
      return;
    }

    if (!state.candidateUpdateEvents[index]) {
      return;
    }

    state.candidateUpdateEvents = state.candidateUpdateEvents.filter(
      (candidate, i) => i !== index
    );
  };
  return {
    addChangeListener: state.addChangeListener,
    deleteItem,
  };
};
//
