import { State, numberOrNull } from '../../types';
import { state } from '../../index';

const getNumberElement = (number: number) => {
  return `<div id="square">${number ?? ''}</div>`;
};

// const createEventListeners = () => {
//     const square = document.querySelector('#square')
//     square.addEventListener('click', console.log("klikk"))
// }
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

const divFromNumber = (number: numberOrNull, index: number) => {
    const div: HTMLDivElement = document.createElement('div');
    div.textContent = `${number ?? ''}`;
    div.addEventListener('click', () => clickedNumber(index));
    return div;
  };
export default (targetElement: Element, { numbers }: { numbers: number[] }) => {
  const newNumbersList = targetElement.cloneNode(true) as Element;
  const numbersElements = numbers.map(getNumberElement).join('');
  newNumbersList.innerHTML = numbersElements;
  return newNumbersList;
};
