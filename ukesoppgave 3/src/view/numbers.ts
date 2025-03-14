import { State, numberOrNull } from '../types';
// import { clickedNumber } from './_controller';
import { state } from '../index';

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
