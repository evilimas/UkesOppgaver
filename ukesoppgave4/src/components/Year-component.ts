// import changeYear from '../changeYear';
// let DEFAULT_YEAR = '2024';
let year = 2024;

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
      divYear.textContent = `${year}`;

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
        year++;
        divYear.textContent = year.toString();
      });

      yearDownButton?.addEventListener('click', () => {
        year--;
        divYear.textContent = year.toString();
      });
    });
  }
}

// export default class DatoComponent extends HTMLElement {
//   private year = "2024";
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open"})
//   }
//   connectedCallback() {
//     this.render();
//     this.setUpListeners();
//   }

//   private render() {
//     this.shadowRoot!.innerHTML = /*HTML*/ `
//     <dato-component>
//     <div
//         style="
//           display: inline-flex;
//           flex-direction: row;
//           align-items: center;
//           column-gap: 6px;
//         ">
//         <div style="font-size: 300%; margin-right: 0px">${this.year}</div>
//         <div style="display: flex; flex-direction: column">
//           <button id="year-up">▲</button>
//           <button data-year-down>▼</button>
//         </div>
//       </div>
//       </dato-component>
//       `;
//   }

//   private setUpListeners() {
//     const btnYearUp = document.querySelector("#year-up");
//     btnYearUp?.addEventListener("click", () => console.log('Click'));
//   }
// }
