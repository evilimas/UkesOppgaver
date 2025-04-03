export default class ListComponent extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.innerHTML = /*HTML*/ `
            
                <filter-component></filter-component>
                <your-filter-component></your-filter-component>
                <div class="list-header-container">
                  <input type="checkbox"/>
                  <p>Navn</p>
                  <p>Betalt</p>
                  <p>Status</p>
            
                </div>
            `;
    });
  }
}
