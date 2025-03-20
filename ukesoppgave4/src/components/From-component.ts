// import { month } from "./Month-component";
import { fromDate } from '../index';

export default class FromTimeComponent extends HTMLElement {
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
      divDay.textContent = `${fromDate.Day} ${fromDate.Month} ${fromDate.Year}`;

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
      btnUp.classList.add('month-up');
      monthUp.textContent = '▲';

      const monthDown = document.createElement('button');
      btnDown.classList.add('month-down');
      monthDown.textContent = '▼';
      //

      // Year btns
      const yearUp = document.createElement('button');
      btnUp.classList.add('year-up');
      yearUp.textContent = '▲';

      const yearDown = document.createElement('button');
      btnDown.classList.add('year-down');
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
      dayUpButton?.addEventListener('click', () => {
        fromDate.Day++;
        divDay.textContent = `${fromDate.Day} ${fromDate.Month} ${fromDate.Year}`;
        if (fromDate.Day >= 31) {
          fromDate.Day = 0;
        }
        // if (date.Day >= 31) {
        //   date.Day = 1;
        // } else if (date.Day >= 28 && date.Month == 2) {
        //   date.Month++;
        //   date.Day = 1;
        // } else {
        //   date.Day++;
        //   divDay.textContent = date.Day.toString();
        //   date.makeDateString(date.Day, date.Month, date.Year);
        //   if (date.checkDateIsValid(date.DateString))
        // }
      });

      dayDownButton?.addEventListener('click', () => {
        fromDate.Day--;
        divDay.textContent = `${fromDate.Day} ${fromDate.Month} ${fromDate.Year}`;
        // if (day <= 1) {
        //   day = 31;
        // }
        // day--;
        // divDay.textContent = day.toString();
      });

      monthUpButton?.addEventListener('click', () => {
        fromDate.Month++;
        divDay.textContent = `${fromDate.Day} ${fromDate.Month} ${fromDate.Year}`;
      });
      monthDownButton?.addEventListener('click', () => {
        fromDate.Month--;
        divDay.textContent = `${fromDate.Day} ${fromDate.Month} ${fromDate.Year}`;
      });
    });
  }
}
