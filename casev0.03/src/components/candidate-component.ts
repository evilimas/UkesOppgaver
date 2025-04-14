import { CandidateUpdateEvent } from '../model/types';

export default class CandidateComponent extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['candidate'];
  }

  attributeChangedCallback() {
    this.render();
  }

  get candidate(): CandidateUpdateEvent {
    const candidateJson: string = this.getAttribute('candidate') ?? '{}';
    return JSON.parse(candidateJson) as CandidateUpdateEvent;
  }

  set candidate(candidate: CandidateUpdateEvent) {
    this.setAttribute('candidate', JSON.stringify(candidate));
  }

  render() {
    this.shadowRoot!.innerHTML = /*HTML*/ `
    <link rel="stylesheet" href="../styles.css" />
        <div id="${this.candidate.id}" class="candidate" >
      <div>
      <b>${this.candidate.name}</b><br/>
      ${this.candidate.phoneNumber}<br/>
      ${this.candidate.discordName}
      </div>
      
      <div class="eventById">${this.candidateEvent(this.candidate.id)}</div>
      <div style="width: 100%; text-align: right;">
      <button class="edit-btn">Edit</button>
      <button 
      onclick="window.location.hash = '#/list/${this.candidate.id}'" 
        class="details-btn">Details</button>
    <button class="delete-btn">Delete</button>
        
        </div>
        `;

    this.shadowRoot!.querySelector('button.delete-btn')!.addEventListener(
      'click',
      () => {
        const details = {
          detail: { id: this.candidate.id },
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
          detail: { id: this.candidate.id },
          bubbles: true,
          composed: true,
        };
        const event = new CustomEvent('edit-candidate-details', details);
        this.dispatchEvent(event);
      }
    );
  };

  candidateEvent(id: string) {
    const lastEvent = ''
    return `Hello ${id}`;
  }
}
