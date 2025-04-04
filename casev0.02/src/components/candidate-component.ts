import type { CandidateUpdateEvent } from '../model/types';

export default class Student extends HTMLElement {
  connectedCallback() {
    const candidateJson: string = this.getAttribute('candidate') ?? '{}';
    const candidate: CandidateUpdateEvent = JSON.parse(candidateJson);
    window.requestAnimationFrame(() => {
      this.innerHTML = /*HTML*/ `
        <h1>${candidate.name}</h1>
        <div>
          <img src="${candidate.id}" style="height: 120px"/>
        </div>
        <div>
          <b></b><br/>
          ${candidate.discordName}<br/>
        </div>
        `;
    });
  }
}
