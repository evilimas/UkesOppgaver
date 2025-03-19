const DEFAULT_YEAR = '2024';

export default class DatoIntervallKomponent extends HTMLElement {
  get countdown() {
    return this.getAttribute('year') || DEFAULT_YEAR;
  }

  set countdown(value) {
    this.setAttribute('year', value);
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div
        style="
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          column-gap: 6px;
        "
      >
        <div style="font-size: 300%; margin-right: 0px">2025</div>
        <div style="display: flex; flex-direction: column">
          <button data-year-up>▲</button>
          <button data-year-down>▼</button>
        </div>
      </div>`;
      this.appendChild(div);
    });
  }
}
