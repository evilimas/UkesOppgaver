import model from './model.ts';
import updateView from './view.ts';

function clickedNumber(index: number): void {
  model.count++;
  let blankIndex = findBlankIndex(index);
  if (blankIndex == null) return;
  model.numbers[blankIndex] = model.numbers[index];
  model.numbers[index] = null;
  updateView();
}

function findBlankIndex(index: number): number | null {
  for (let delta of [-3, -1, 1, 3]) {
    let newIndex = index + delta;
    if (newIndex < 0 || newIndex >= model.numbers.length) continue;
    if (model.numbers[newIndex] == null) {
      return newIndex;
    }
  }
  return null;
}

export { clickedNumber };
