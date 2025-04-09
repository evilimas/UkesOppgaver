import { CandidateUpdateEvent } from '../model/types';

export function createCandidateDetailHtml(candidate: CandidateUpdateEvent) {
  let html = `<h1>Detalj View</h1>`;

  const candidateJson = JSON.stringify(candidate).replace('"', '"');
  html += /*HTML*/ `
    <candidate-component candidate='${candidateJson}'></candidate-component>
    `;
  return html;
}
