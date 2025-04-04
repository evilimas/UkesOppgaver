import type {  CandidateUpdateEvent } from '../model/types';


export default class Student extends HTMLElement {
  private StudenData: CandidateUpdateEvent[] = []
  connectedCallback() {
    const candidateJson: string = this.getAttribute('candidate') ?? '{}';
    const candidate: CandidateUpdateEvent = JSON.parse(candidateJson);
    this.render()
  };
    private render(){
      window.requestAnimationFrame(() => {
      this.innerHTML = /*HTML*/ `
      <div class="list-header-container">
        <input type="checkbox"/>
        <a href="/list/${candidate.id}"><b>${candidate.name} </b></a><br/>
        <p>Betalt :</p>
        <p>${candidate.discordName}</p>
      </div>
     
    } `;
  }
  // getStatus(candidate) {
  //   return `
  //   ${candidate.id}
  //   `;
  //   candidate.courses.filter((x) => x.semesterId == 1);
  // }
}
