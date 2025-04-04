import state from '../model/state';
export default class ListComponent extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      let html = /*HTML*/ `
      <img src="/img/logo.png" alt="logo" class="logo"/>
      <header>Velkommen til Get Academy Student Administrasjon!</header>
                  <filter-component></filter-component>
                  <your-filter-component></your-filter-component>
                  <div class="list-header-container">
                    <input type="checkbox"/>
                    <p>Navn</p>
                    <p>Betalt</p>
                    <p>Status</p>
                  </div>
              `;
      for (let candidate of state.candidateUpdateEvents) {
        const candidateJson = JSON.stringify(candidate).replace('"', '"');
        html += /*HTML*/ `
                      <candidate-list-component candidate='${candidateJson}'></candidate-list-component>
                   `;
      }

      this.innerHTML = html;
    });
  }
}
