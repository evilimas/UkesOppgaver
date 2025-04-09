
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
      <div id="${candidate.id}" class="candidate">
      
      <div>
          <b>${candidate.name}</b><br/>
          ${candidate.phoneNumber}<br/>
          ${candidate.discordName}
      </div>
      <div style="width: 100%; text-align: right;">
      <button>x</button>
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
          const event = new CustomEvent('candidate-deleted', details);
          this.dispatchEvent(event);
        }
      );
    });
  }
}
