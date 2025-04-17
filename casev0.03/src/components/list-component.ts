import { CandidateUpdateEvent } from '../model/types';
import CandidateComponent from './candidate-component';

export default class ListComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['candidates'];
  }

  attributeChangedCallback() {
    this.renderCandidateList();
  }

  get candidates(): CandidateUpdateEvent[] {
    const candidateJson: string = this.getAttribute('candidates') ?? '[]';
    return JSON.parse(candidateJson) as CandidateUpdateEvent[];
  }

  set candidates(candidates: CandidateUpdateEvent[]) {
    this.setAttribute('candidates', JSON.stringify(candidates));
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.shadowRoot!.innerHTML = /*HTML*/ `
        ${ListComponent.getComponentStyle()}
        <div class="candidate-header" style="width: 100%; display: flex; flex-direction: row; justify-content: space-around;">
          <input type="checkbox"/>
          <p>Navn</p>
          <p>Betalt</p>
          <p>Status</p>
        </div>
        <div id="candidates"></div>    
      `;
      this.renderCandidateList();

      //   this.shadowRoot!.querySelector('button.delete-btn')!.addEventListener(
      //     'click',
      //     () => {
      //       const details = {
      //         detail: { id: candidate.id },
      //         bubbles: true,
      //         composed: true,
      //       };
      //       const event = new CustomEvent('candidate-deleted', details);
      //       this.dispatchEvent(event);
      //     }
      //   );
      //   this.shadowRoot!.querySelector('button.edit-btn')!.addEventListener(
      //     'click',
      //     () => {
      //       const details = {
      //         detail: { id: candidate.id },
      //         bubbles: true,
      //         composed: true,
      //       };
      //       const event = new CustomEvent('edit-candidate-details', details);
      //       this.dispatchEvent(event);
      //     }
      //   );
    });
  }
  renderCandidateList() {
    const candidateDiv = this.shadowRoot!.querySelector('#candidates')!;
    if (!candidateDiv) return;
    candidateDiv.innerHTML = '';
    const candidates = this.candidates;
    for (let candidate of candidates) {
      const candidateComponent = document.createElement('candidate-component') as CandidateComponent;
      candidateComponent.candidate = candidate;
      
      candidateDiv.appendChild(candidateComponent);
    }
  }

  static getComponentStyle() {
    return /*HTML*/`
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
    `;
  }

}
