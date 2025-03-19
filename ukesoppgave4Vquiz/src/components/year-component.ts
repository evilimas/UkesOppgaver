export default class DatoComponent extends HTMLElement {
    private year = "2024";
    constructor() {
      super();
      this.attachShadow({ mode: "open"})
    }
    connectedCallback() {
      this.render();
      this.setUpListeners();
    }
  
    private render() {
      this.shadowRoot!.innerHTML = /*HTML*/ `
      <dato-component>
      <div
          style="
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            column-gap: 6px;
          ">
          <div style="font-size: 300%; margin-right: 0px">${this.year}</div>
          <div style="display: flex; flex-direction: column">
            <button id="year-up">▲</button>
            <button data-year-down>▼</button>
          </div>
        </div>
        </dato-component>
        `;
    }
  
    private setUpListeners() {
      const btnYearUp = document.querySelector("#year-up");
      btnYearUp?.addEventListener("click", () => console.log('Click'));
    }
  }
  