// import { month } from "./Month-component";
import { toDate } from '../index';

export default class ToTimeComponent extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div = document.createElement('div');
      div.classList.add('main-div');

      const topDiv = document.createElement('div');
      topDiv.classList.add('top-div');

      const bottomDiv = document.createElement('div');
      bottomDiv.classList.add('bottom-div');

      const divDay = document.createElement('div');
      divDay.classList.add('day');
      divDay.setAttribute('id', 'day');
      divDay.textContent = `${toDate.Day} ${toDate.Month} ${toDate.Year}`;

      // Day btns
      const btnUp = document.createElement('button');
      btnUp.classList.add('day-up');
      btnUp.textContent = '▲';

      const btnDown = document.createElement('button');
      btnDown.classList.add('day-down');
      btnDown.textContent = '▼';
      //
      // Month btns
      const monthUp = document.createElement('button');
      monthUp.classList.add('month-up');
      monthUp.textContent = '▲';

      const monthDown = document.createElement('button');
      monthDown.classList.add('month-down');
      monthDown.textContent = '▼';
      //

      // Year btns
      const yearUp = document.createElement('button');
      yearUp.classList.add('year-up');
      yearUp.textContent = '▲';

      const yearDown = document.createElement('button');
      yearDown.classList.add('year-down');
      yearDown.textContent = '▼';
      //

      topDiv.appendChild(btnUp);
      topDiv.appendChild(monthUp);
      topDiv.appendChild(yearUp);
      bottomDiv.appendChild(btnDown);
      bottomDiv.appendChild(monthDown);
      bottomDiv.appendChild(yearDown);
      div.appendChild(topDiv);
      div.appendChild(divDay);
      div.appendChild(bottomDiv);

      this.appendChild(div);
      const dayUpButton = div.querySelector('.day-up');
      const dayDownButton = div.querySelector('.day-down');
      const monthUpButton = div.querySelector('.month-up');
      const monthDownButton = div.querySelector('.month-down');
      const yearUpButton = div.querySelector('.year-up');
      const yearDownButton = div.querySelector('.year-down');

      dayUpButton?.addEventListener('click', () => {
        if (toDate.Day >= 31) {
          toDate.Day = 1;
        } else {
          toDate.Day++;
        }
        divDay.textContent = `${toDate.Day} ${toDate.Month} ${toDate.Year}`;
      });

      dayDownButton?.addEventListener('click', () => {
        if (toDate.Day <= 1) {
          toDate.Day = 31;
        } else {
          toDate.Day--;
        }
        divDay.textContent = `${toDate.Day} ${toDate.Month} ${toDate.Year}`;
      });

      monthUpButton?.addEventListener('click', () => {
        if (toDate.Month >= 12) {
          toDate.Month = 1;
          toDate.Year++;
        } else {
          toDate.Month++;
        }
        divDay.textContent = `${toDate.Day} ${toDate.Month} ${toDate.Year}`;
      });

      monthDownButton?.addEventListener('click', () => {
        if (toDate.Month <= 1) {
          toDate.Month = 12;
        } else {
          toDate.Month--;
        }
        divDay.textContent = `${toDate.Day} ${toDate.Month} ${toDate.Year}`;
      });

      yearUpButton?.addEventListener('click', () => {
        toDate.Year++;
        console.log(toDate.Month);
        divDay.textContent = `${toDate.Day} ${toDate.Month} ${toDate.Year}`;
      });

      yearDownButton?.addEventListener('click', () => {
        toDate.Year--;
        divDay.textContent = `${toDate.Day} ${toDate.Month} ${toDate.Year}`;
      });
    });
  }
}
