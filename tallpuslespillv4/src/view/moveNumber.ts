import { state } from '../../index';
import { render } from '../../index';

function clickedNumber(index: number) {
  state.count++;
  let blankIndex = findBlankIndex(index);
  if (blankIndex == null) {
    return null;
  }
  console.log(index)
  state.numbers[blankIndex] = state.numbers[index];
  state.numbers[index] = null;
  render();
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

export { clickedNumber };
