import { State, numberOrNull } from '../types';
// import { clickedNumber } from './_controller';
import { state } from '../index';

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

// /*HTML*/ `<div onclick="clickedNumber(${index})">${number ?? ''}</div>`;

export default (targetElement: Element, state: State) => {
  const newNumbersGrid = targetElement.cloneNode(true) as Element;

  newNumbersGrid.innerHTML = '';

  state.numbers.forEach((number, index) => {
    newNumbersGrid.appendChild(divFromNumber(number, index));
  });
  // const todosElements = state.numbers.map(divFromNumber).join('');
  // newNumbersGrid.innerHTML = todosElements;

  /*
    const numberDivs = document.querySelectorAll('.grid div');
    for (let i = 0; i < numberDivs.length; i++) {
        const numberDiv = numberDivs[i];
        numberDiv.addEventListener('click', () => clickedNumber(i));
    }
  */

  return newNumbersGrid;
};
