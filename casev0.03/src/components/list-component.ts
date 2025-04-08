
import { createCandidatesHtml } from '../view/listView';
import { CandidateUpdateEvent } from '../model/types';

export default class ListComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
 

  connectedCallback() {
    window.requestAnimationFrame(() => {
      const candidateJson: string = this.getAttribute('candidate') ?? '{}';
      const candidate: CandidateUpdateEvent = JSON.parse(candidateJson);

      this.shadowRoot!.innerHTML = /*HTML*/ `
      <head>
      <link rel="stylesheet" href="styles.css" />
      </head>
      <style>
        .candidate {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: left;
          border: 1px solid black;
          width: 100%;
        }
        .logo {
         width: 25%;
        }

      </style>
      <img src="/img/logo.png" alt="logo" class="logo"/>
        <header>Velkommen til Get Academy Student Administrasjon!</header>
          <filter-component></filter-component>
          <your-filter-component></your-filter-component>
              <div class="candidate-header" style="width: 100%; display: flex; flex-direction: row; justify-content: space-around;">
                <input type="checkbox"/>
                  <p>Navn</p>
                  <p>Betalt</p>
                  <p>Status</p>
              </div>
              <div candidate='${JSON.stringify(candidate)}' id="${
                 candidate.id
               }" class="candidate">
              <div style="width: 100%; ">
                      <input  style= "text-align: left;" type="checkbox"/>
                      <button style= "float: right;">x</button>
                      
              </div>
              <div style="align-text: center">
                 <b>${candidate.name}</b><br/>
                 <p>${candidate.emailGet}</p>  
              </div>
            `;

      this.shadowRoot!.querySelector('button')!.addEventListener(
        'click',
        () => {
          const details = {
            detail: { id: candidate.id },
            bubbles: true,
            // composed: true, => bobler forbi shadow root
          };
          const event = new CustomEvent('movie-deleted', details);
          this.dispatchEvent(event);
        }
      );
    });
  }
}
