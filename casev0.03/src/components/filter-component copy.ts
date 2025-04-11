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
    // Get from attribute: state.courseAddedEvents

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
    if (this.filterName == null) return;

    if (filterName == 'Kurs') this.renderKurs();
    else if (filterName == 'Dato') this.renderDato();
    else if (filterName == 'Hendelser') this.renderEvent();

    // this.tabContent!.innerHTML = /*HTML*/ `
    //   <div id="${this.filterName}" class="tabcontent">
    //   <h3>Velg ${this.filterName}</h3>
    //       ${filterView(this.filterName)}
    //   </div>
    // `;
  }

  renderKurs() {
    let html = '';
    for (let course of this.courses) {
      // kommer fra html-attributt courses
      html += `
        <label>
        <input type="checkbox" id='${course.id}' name='${
        course.name
      }' value='${JSON.stringify(course).replace('"', '"')}' />
        ${course.name}
        </label>
        `;
      // console.log(document.querySelector('#' + `${course.id}`));
    }

    this.tabContent!.innerHTML = html;

    const checkboxes = this.tabContent!.querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        /* 
            1: dispatche event 
            2: fange opp på app-nivå
            3: endre state 
            4: rerendering av appen
            */
        // this.dispatchEvent(new CustomEvent('filter-changed', {});
      });
    });
  }
  renderDato() {
    this.tabContent!.innerHTML = /*HTML*/ `
    <div id="${this.filterName}" class="tabcontent">
    <h3>Velg ${this.filterName}</h3>
        ${filterView(this.filterName)}
    </div>    
  `;
  }
  renderEvent() {
    this.tabContent!.innerHTML = /*HTML*/ `
    <div id="${this.filterName}" class="tabcontent">
    <h3>Velg ${this.filterName}</h3>
        ${filterView(this.filterName)}
    </div>    
  `;
  }
}
