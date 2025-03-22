import { toDate } from '../index';
// const {Day, Month, Year} = toDate

export default class ToTimeComponent extends HTMLElement {
  connectedCallback() {
    const div = document.createElement('div');
    div.classList.add('main-div');
    const dateStr = () =>
      toDate.makeDateString(toDate.Day, toDate.Month, toDate.Year);

    div.innerHTML = /*HTML*/ `
      <div>
        <h1 class="to">To:</h1>
      </div>
      <div>
        <div class="top-div">
          <button class="day-up">▲</button>
          <button class="month-up">▲</button>
          <button class="year-up">▲</button>
        </div>
        <div class="day" id="day">${dateStr()}</div>
        <div class="bottom-div">
          <button class="day-down">▼</button>
          <button class="month-down">▼</button>
          <button class="year-down">▼</button>
        </div>
      </div>
  `;

    this.appendChild(div);
    const dayUpButton = div.querySelector<HTMLDivElement>('.day-up');
    const dayDownButton = div.querySelector<HTMLDivElement>('.day-down');
    const monthUpButton = div.querySelector<HTMLDivElement>('.month-up');
    const monthDownButton = div.querySelector<HTMLDivElement>('.month-down');
    const yearUpButton = div.querySelector<HTMLDivElement>('.year-up');
    const yearDownButton = div.querySelector<HTMLDivElement>('.year-down');
    const divDay = document.querySelector<HTMLDivElement>('.day');

    dayUpButton?.addEventListener('click', () => {
      toDate.Day >= 31 ? (toDate.Day = 1) : toDate.Day++;
      divDay!.textContent = `${dateStr()}`;
    });

    dayDownButton?.addEventListener('click', () => {
      toDate.Day <= 1 ? (toDate.Day = 31) : toDate.Day--;
      divDay!.textContent = `${dateStr()}`;
    });

    monthUpButton?.addEventListener('click', () => {
      toDate.Month >= 12 ? (toDate.Month = 1) : toDate.Month++;
      divDay!.textContent = `${dateStr()}`;
    });

    monthDownButton?.addEventListener('click', () => {
      toDate.Month <= 1 ? (toDate.Month = 12) : toDate.Month--;
      divDay!.textContent = `${dateStr()}`;
    });

    yearUpButton?.addEventListener('click', () => {
      toDate.Year++;
      divDay!.textContent = `${dateStr()}`;
    });

    yearDownButton?.addEventListener('click', () => {
      toDate.Year--;
      divDay!.textContent = `${dateStr()}`;
    });
  }
}
