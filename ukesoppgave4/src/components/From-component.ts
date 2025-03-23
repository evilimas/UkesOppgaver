import { fromDate } from '../index';

export default class FromTimeComponent extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div: HTMLElement = document.createElement('div');
      div.classList.add('main-div');
      const dateStr = () =>
        fromDate.makeDateString(fromDate.Day, fromDate.Month, fromDate.Year);
      div.innerHTML = /*HTML*/ `
      <div>
        <h1>From:</h1>
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
        fromDate.Day >= 31 ? (fromDate.Day = 1) : fromDate.Day++;
        divDay!.textContent = `${dateStr()}`;
      });

      dayDownButton?.addEventListener('click', () => {
        fromDate.Day <= 1 ? (fromDate.Day = 31) : fromDate.Day--;
        divDay!.textContent = `${dateStr()}`;
      });

      monthUpButton?.addEventListener('click', () => {
        fromDate.Month == 12 ? (fromDate.Month = 1) : fromDate.Month++;
        divDay!.textContent = `${dateStr()}`;
      });

      monthDownButton?.addEventListener('click', () => {
        fromDate.Month <= 1 ? (fromDate.Month = 12) : fromDate.Month--;
        divDay!.textContent = `${dateStr()}`;
      });
      yearUpButton?.addEventListener('click', () => {
        fromDate.Year++;
        divDay!.textContent = `${dateStr()}`;
      });
      yearDownButton?.addEventListener('click', () => {
        fromDate.Year--;
        divDay!.textContent = `${dateStr()}`;
      });
    });
  }
}
