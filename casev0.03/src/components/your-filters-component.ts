export default class YourFilters extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.innerHTML = /*HTML*/ `
        <div class="list-yourFilters-container">
        <ul>
            <li><h5>Dine valgte filter: </h5></li>
            <li>Filter Test</li>
            <li>Filter Test</li>
            <li>Filter Test</li>
            <li>Filter Test</li>
          </ul>
        </div>
        `;
    });
  }
}
