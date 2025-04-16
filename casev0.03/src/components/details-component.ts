import { CandidateUpdateEvent } from "../model/types";

export default class DetailsComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["candidate"];
  }

  attributeChangedCallback() {
    this.renderCandidate();
  }

  get candidate(): CandidateUpdateEvent[] {
    const candidateJson: string = this.getAttribute("candidate") ?? "[]";
    return JSON.parse(candidateJson) as CandidateUpdateEvent[];
  }

  set candidates(candidates: CandidateUpdateEvent[]) {
    this.setAttribute("candidate", JSON.stringify(candidates));
  }

  connectedCallback() {
    const candidateJson: string = this.getAttribute("candidate") ?? "{}";
    const candidate: CandidateUpdateEvent = JSON.parse(candidateJson);
    window.requestAnimationFrame(() => {
      this.shadowRoot!.innerHTML = /*HTML*/ `
      ${DetailsComponent.getComponentStyle()}
      <img src="/img/logo.png" alt="logo" class="logo"/>
      <h1>Detalj View</h1>
      <div id="candidate"></div>
      `;
    });
  }
  renderCandidate() {
    const candidateDiv = this.shadowRoot!.querySelector("#candidate")!;
    if (!candidateDiv) return;
    candidateDiv.innerHTML = "";

    const detailsComponent = document.createElement(
      "details-component"
    ) as DetailsComponent;
    detailsComponent.candidate = candidate;
    candidateDiv.appendChild(detailsComponent);
  }

  static getComponentStyle() {
    return /*HTML*/ `
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
    `;
  }
}
