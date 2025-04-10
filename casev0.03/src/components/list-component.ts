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
      <div id="${candidate.id}" class="candidate">
      
      <div>
          <b>${candidate.name}</b><br/>
          ${candidate.phoneNumber}<br/>
          ${candidate.discordName}
      </div>
      <div class="eventById">${this.candidateEvent(candidate.id)}</div>
      <div style="width: 100%; text-align: right;">
      <button class="edit-btn">Edit</button>
      <button onclick="window.location.hash = '#/list/${candidate.id}'" class="details-btn">Details</button>
      <button class="delete-btn">Delete</button>
      
  </div>
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
  candidateEvent(id: string){
    return `Hello ${id}`
  }
}
