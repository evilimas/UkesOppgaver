import { CandidateUpdateEvent } from '../model/types';

export default class CandidateComponent extends HTMLElement {
    /**
     *
     */
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }
  connectedCallback() {
    const candidate: string = this.getAttribute('candidate') ?? '{}';
    const candidateJson: CandidateUpdateEvent = JSON.parse(candidate);
    // console.log(candidateJson);
    
    this.shadowRoot!.innerHTML = /*HTML*/ `
        <div id="${candidateJson.id}" class="candidate" >
      <div>
      <b>${candidateJson.name}</b><br/>
      ${candidateJson.phoneNumber}<br/>
      ${candidateJson.discordName}
      </div>
      
      <div class="eventById">${this.candidateEvent(candidateJson.id)}</div>
      <div style="width: 100%; text-align: right;">
      <button class="edit-btn">Edit</button>
      <button 
      onclick="window.location.hash = '#/list/${candidateJson.id}'" 
        class="details-btn">Details</button>
    <button class="delete-btn">Delete</button>
        
        </div>
        `;

        this.shadowRoot!.querySelector('button.delete-btn')!.addEventListener(
            'click',
            () => {
              const details = {
                detail: { id: candidateJson.id },
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
                detail: { id: candidateJson.id },
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
