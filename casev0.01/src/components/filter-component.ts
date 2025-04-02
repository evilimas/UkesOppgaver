:
export default class Filter extends HTMLElement {
  btns: NodeListOf<HTMLButtonElement> | undefined;
  tabContent: HTMLElement | undefined | null;
  filterName!: string;

  // constructor() {
  //   super();
  //   // this.btns = document.querySelectorAll('button') 
  // }
  private openFilter(event: Event): void {
    const btn = event.target as HTMLButtonElement;
    this.filterName = btn.innerHTML;
    this.render();
  };


  connectedCallback() {
    this.innerHTML = `
      <div class="tab">
          <button class="tablinks">London</button>
          <button class="tablinks">Paris</button>
          <button class="tablinks">Tokyo</button>
      </div>
      <div id="tab-content">
      </div>
    `;
    this.tabContent = this.querySelector<HTMLElement>('#tab-content');
    document.querySelectorAll('.tablinks').forEach((btn) => {
      btn.addEventListener('click', this.openFilter.bind(this))
    });
  }

  render() {
    if (this.filterName == null) return '';
    this.tabContent!.innerHTML = /*HTML*/`
      <div id="${this.filterName}" class="tabcontent">
        <h3>${this.filterName}</h3>
        <p>${this.filterName} is the capital city of </p>
      </div>    
    `;
  }
}

