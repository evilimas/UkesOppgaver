import { CandidateUpdateEvent } from '../model/types';

export default class DetailsComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const candidateJson: string = this.getAttribute('candidate') ?? '{}';
    const candidate: CandidateUpdateEvent = JSON.parse(candidateJson);
    window.requestAnimationFrame(() => {
      this.shadowRoot!.innerHTML = /*HTML*/ `
      <style>
        .candidate {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: left;
     
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
   
  </div>
            `;
    });
  }
}
