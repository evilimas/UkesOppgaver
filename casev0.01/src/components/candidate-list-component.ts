import type { ICandidate } from '../model/types';

export default class Student extends HTMLElement {
  connectedCallback() {
    const candidateJson: string = this.getAttribute('candidate') ?? '{}';
    const candidate: ICandidate = JSON.parse(candidateJson);
    window.requestAnimationFrame(() => {
      this.innerHTML = /*HTML*/ `
      <div class="list-header-container">
        <input type="checkbox"/>
        <a href="/list/${candidate.id}"><b>${candidate.name} </b></a><br/>
        <p>Betalt :</p>
        <p>${candidate.courses[0].course}</p>
      </div>
      

    
      
      `;
    });
  }
  getStatus(candidate) {
    return `
    ${candidate.id}
    `;
    candidate.courses.filter((x) => x.semesterId == 1);
  }
}
