import filterView from '../view/filterView';

export default class Filter extends HTMLElement {
  btns: NodeListOf<HTMLButtonElement> | undefined;
  tabContent: HTMLElement | undefined | null;
  filterName!: string;

  // constructor() {
  //   super();
  //   this.attachShadow({ mode: 'open' });
  // }

  private openFilter(event: Event): void {
    const btn = event.target as HTMLButtonElement;
    this.filterName = btn.innerHTML;
    this.render();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="tab">
          <button class="tablinks">Kurs</button>
          <button class="tablinks">Dato</button>
          <button class="tablinks">Hendelser</button>
      </div>
      <div id="tab-content">
      </div>
    `;
    this.tabContent = this.querySelector<HTMLElement>('#tab-content');
    document.querySelectorAll('.tablinks').forEach((btn) => {
      btn.addEventListener('click', this.openFilter.bind(this));
    });
  }

  render() {
    if (this.filterName == null) return '';
    this.tabContent!.innerHTML = /*HTML*/ `
    <div id="${this.filterName}" class="tabcontent">
    <h3>Velg ${this.filterName}</h3>
         ${filterView(this.filterName)}
    </div>    
    `;
  }
}
