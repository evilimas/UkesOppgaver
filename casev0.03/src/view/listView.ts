import { INITIAL_STATE } from '../model/model';
import { CandidateUpdateEvent } from '../model/types';

export function createCandidatesHtml(
  candidates: CandidateUpdateEvent[] = INITIAL_STATE.candidateUpdateEvents
) {
  // const candidateJson: string = this.getAttribute('.candidate') ?? "{}";
  // const candidateParsed: CandidateUpdateEvent = JSON.parse(candidateJson);
  let html = `
    
    <div class="candidate-header" style="width: 100%; display: flex; flex-direction: row; justify-content: space-around;">
                <input type="checkbox"/>
                  <p>Navn</p>
                  <p>Betalt</p>
                  <p>Status</p>
              </div>`;
  for (let candidate of candidates) {
    const candidateJson = JSON.stringify(candidate).replace('"', '"');
    html += /*HTML*/ `
        <list-component candidate='${candidateJson}'></list-component>
    `;
  }
  return html;
}
