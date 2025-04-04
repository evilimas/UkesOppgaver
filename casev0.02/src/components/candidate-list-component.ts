import type { CandidateUpdateEvent, } from '../model/types';
import state from '../model/state';

export default class Student extends HTMLElement {
  private getEventFromCourseCandidateEvent(){
    const candidates = state.candidateUpdateEvents
    for(let e of state.courseCandidateUpdateEvents){
      console.log(e.candidateId)
      let candidateFound = candidates.find((x) => x.id == e.candidateId)
      return `${candidateFound?.name}, ${e.eventType}`
    }

  }
  connectedCallback() {
    const candidateJson: string = this.getAttribute('candidate') ?? '{}';
    const candidate: CandidateUpdateEvent = JSON.parse(candidateJson);
    window.requestAnimationFrame(() => {
      this.innerHTML = /*HTML*/ `
      <div class="candidate-container">
        <input type="checkbox"/>
        <a href="/list/${candidate.id}"><b>${candidate.name} </b></a><br/>
        <p>Betalt :</p>
        <p>${this.getEventFromCourseCandidateEvent()}</p>
      </div>
      `;
    });
  }
  // getStatus(candidate) {
  //   return `
  //   ${candidate.id}
  //   `;
  //   candidate.courses.filter((x) => x.semesterId == 1);
  // }
}
