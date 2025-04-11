import { INITIAL_STATE } from '../model/model';
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
          display: grid;
          grid-template-columns:1fr 1fr 1fr; 
          flex-direction: column;
          justify-content: space-around;
          align-items: left;
          border: 1px solid black;
          width: 100%;
        }
        .logo {
         width: 25%;
        }
        .eventById {
          display: flex;
          align-items: center;
          justify-content: center;
        }

      </style>
      <div class="candidate-header" style="width: 100%; display: flex; flex-direction: row; justify-content: space-around;">
      <input type="checkbox"/>
        <p>Navn</p>
        <p>Betalt</p>
        <p>Status</p>
    </div>
    ${this.renderCandidateList(INITIAL_STATE.candidateUpdateEvents)}
            `;

      this.shadowRoot!.querySelector('button.delete-btn')!.addEventListener(
        'click',
        () => {
          const details = {
            detail: { id: candidate.id },
            bubbles: true,
            composed: true,
          };
          const event = new CustomEvent('candidate-deleted', details);
          this.dispatchEvent(event);
        }
      );
      this.shadowRoot!.querySelector('button.edit-btn')!.addEventListener(
        'click',
        () => {
          const details = {
            detail: { id: candidate.id },
            bubbles: true,
            composed: true,
          };
          const event = new CustomEvent('edit-candidate-details', details);
          this.dispatchEvent(event);
        }
      );
    });
  }
  renderCandidateList(
    candidates: CandidateUpdateEvent[] = INITIAL_STATE.candidateUpdateEvents
  ) {
    let html = '';
    for (let candidate of candidates) {
      const candidateJson = JSON.stringify(candidate).replace(/"/g, '&quot;');
      html += /*HTML*/ `
      <candidate-component candidate="${candidateJson}"></candidate-component>
        `;
    }
    return html;
  }
}
