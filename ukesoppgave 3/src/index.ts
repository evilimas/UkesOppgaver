import registry from './registry';
import countView from './view/count';
import numbersView from './view/numbers';
import { State } from './types';

registry.add('count', countView);
registry.add('numbers', numbersView);

const state: State = {
  numbers: [1, 2, 3, null, 1, 2, 3, 4, 5],
  count: 0,
};

window.requestAnimationFrame(() => {
  const main = document.querySelector<Element>('#app');
  const newMain = registry?.renderRoot(main, state);
  main?.replaceWith(newMain);
});

function clickedNumber(index: number): void {
  state.count++;
  let blankIndex = findBlankIndex(index);
  if (blankIndex == null) return;
  state.numbers[blankIndex] = state.numbers[index];
  state.numbers[index] = null;
  // updateView();
}

function findBlankIndex(index: number): number | null {
  for (let delta of [-3, -1, 1, 3]) {
    let newIndex = index + delta;
    if (newIndex < 0 || newIndex >= state.numbers.length) continue;
    if (state.numbers[newIndex] == null) {
      return newIndex;
    }
  }
  return null;
}

export { state, clickedNumber };
