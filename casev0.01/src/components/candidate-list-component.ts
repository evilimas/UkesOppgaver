import type { Candidate } from '../model/types';

export default class Student extends HTMLElement {
  connectedCallback() {
    const candidateJson: string = this.getAttribute('candidate') ?? '{}';
    const candidate: Candidate = JSON.parse(candidateJson);
    window.requestAnimationFrame(() => {
      this.innerHTML = /*HTML*/ `
      <div class="student">
      <div>
      <a href="/list/${candidate.id}"><b>${candidate.name} </b></a><br/>
                  ${candidate.emailPriv}<br/>
                  ${candidate.telefonNummer}
              </div>
          </div>
      
      `;
    });
  }
}
