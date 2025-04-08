
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
      <candidate-info-short></candidate-info-short>
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
