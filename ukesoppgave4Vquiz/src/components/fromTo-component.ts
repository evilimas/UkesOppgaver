export class FromToComponent extends HTMLElement {
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
      <div class="fromto-container"
           style="
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            column-gap: 6px;
          ">
          <slot></slot>
        </div>
        </dato-component>
        `;
    }
  
    private setUpListeners() {
        const buttons = this.querySelectorAll("year-counter, month-counter, day-counter")
      this.shadowRoot!.addEventListener('click', (e) => console.log('Hello', e))
    }
  }