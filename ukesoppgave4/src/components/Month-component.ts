// import changeYear from '../changeYear';
// let DEFAULT_YEAR = '2024';
let month = 0o6;

export default class DatoComponent extends HTMLElement {
  // get year() {
  //   return this.getAttribute('year') || DEFAULT_YEAR;
  // }

  // set year(value) {
  //   this.setAttribute('year', value);
  // }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div = document.createElement('div');

      const divYear = document.createElement('div');
      divYear.classList.add('year');
      divYear.setAttribute('id', 'year');
      divYear.textContent = `${month}`;

      const divBtns = document.createElement('div');
      divBtns.classList.add('year1');

      const btnUp = document.createElement('button');
      btnUp.classList.add('year-up');
      btnUp.textContent = '▲';

      const btnDown = document.createElement('button');
      btnDown.classList.add('year-down');
      btnDown.textContent = '▼';

      divBtns.appendChild(btnUp);
      divBtns.appendChild(btnDown);
      div.appendChild(divYear);
      div.appendChild(divBtns);

      this.appendChild(div);

      const yearUpButton = div.querySelector('.year-up');
      const yearDownButton = div.querySelector('.year-down');

      yearUpButton?.addEventListener('click', () => {
        if (month == 12) {
          month = 0;
        }
        month++;
        divYear.textContent = month.toString();
      });

      yearDownButton?.addEventListener('click', () => {
        if (month <= 1) {
          month = 13;
        }
        month--;
        divYear.textContent = month.toString();
      });
    });
  }
}

export { month }
