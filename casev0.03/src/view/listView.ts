import { CandidateUpdateEvent } from "../model/types";

// function getEventFromCourseCandidateEvent(id: string,) {
//     const events = candidate.id;
//     let eventFound = events.find((x) => x.candidateId == id);
//     return /*HTML*/ `${eventFound?.courseId} ${eventFound?.eventType}`;
//   }
export function createCandidatesHtml(candidates: CandidateUpdateEvent[]) {
  // const candidateJson: string = this.getAttribute('.candidate') ?? "{}";
  // const candidateParsed: CandidateUpdateEvent = JSON.parse(candidateJson);
  let html = `<div class="candidate-header" style="width: 100%; display: flex; flex-direction: row; justify-content: space-around;">
                <input type="checkbox"/>
                  <p>Navn</p>
                  <p>Betalt</p>
                  <p>Status</p>
              </div>`;
  for (let candidate of candidates) {
    
    html += /*HTML*/ `
        <list-component candidate="${JSON.stringify(candidate)}"></list-component>
    `;
  }
  return html;
}
