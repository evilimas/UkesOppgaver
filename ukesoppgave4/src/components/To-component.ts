// import { month } from "./Month-component";
import { toDate as date } from '../index';

export default class ToTimeComponent extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div = document.createElement('div');

      const divDate = document.createElement('div');
      divDate.classList.add('day');
      divDate.setAttribute('id', 'from-date');
      divDate.textContent = `${date.Day} ${date.Month} ${date.Year}`;

      const divBtns = document.createElement('div');
      divBtns.classList.add('day1');

      const btnUp = document.createElement('button');
      btnUp.classList.add('day-up');
      btnUp.textContent = '▲';

      const btnDown = document.createElement('button');
      btnDown.classList.add('day-down');
      btnDown.textContent = '▼';

      divBtns.appendChild(btnUp);
      divBtns.appendChild(btnDown);
      div.appendChild(divDate);
      div.appendChild(divBtns);

      this.appendChild(div);
      const dayUpButton = div.querySelector('.day-up');
      const dayDownButton = div.querySelector('.day-down');
      dayUpButton?.addEventListener('click', () => {
        date.Day++;
        divDate.textContent = `${date.Day} ${date.Month} ${date.Year}`;
        if (date.Day > 31) {
          date.Day = 0;
        }
      });

      dayDownButton?.addEventListener('click', () => {
        date.Day--;
        divDate.textContent = `${date.Day} ${date.Month} ${date.Year}`;
      });
    });
  }
}
