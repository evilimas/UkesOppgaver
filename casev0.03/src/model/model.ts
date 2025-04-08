import observableFactory from './observable';
import appState from './state.ts';
import { AppState } from './types.ts';
const INITIAL_STATE = appState;

export default (initialState: AppState = INITIAL_STATE) => {
  const state = observableFactory(initialState);

  const deleteItem = (index: number) => {
    if (index < 0) {
      return;
    }

    if (!state.candidateUpdateEvents[index]) {
      return;
    }

    state.candidateUpdateEvents = state.candidateUpdateEvents.filter(
      (_candidate: any, i: number) => i !== index
    );
  };
  return {
    addChangeListener: state.addChangeListener,
    deleteItem,
  };
};
//
