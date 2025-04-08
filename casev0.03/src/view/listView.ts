import { CandidateUpdateEvent } from "../model/types";

// function getEventFromCourseCandidateEvent(id: string,) {
//     const events = candidate.id;
//     let eventFound = events.find((x) => x.candidateId == id);
//     return /*HTML*/ `${eventFound?.courseId} ${eventFound?.eventType}`;
//   }
export function createCandidatesHtml(candidates: CandidateUpdateEvent[]) {
    // const candidateJson: string = this.getAttribute('.candidate') ?? "{}";
    // const candidateParsed: CandidateUpdateEvent = JSON.parse(candidateJson);
    let html = '';
    for (let candidate of candidates) {
      html += /*HTML*/ `
     <div candidate='${JSON.stringify(candidate)}' id="${
        candidate.id
      }" class="candidate">
     <div style="width: 100%; ">
             <input  style= "text-align: left;" type="checkbox"/>
             <button style= "float: right;">x</button>
             
     </div>
     <div style="align-text: center">
        <b>${candidate.name}</b><br/>
        <p>${candidate.emailGet}</p>  
     </div>
     
     `;
    }
    return html;
  }