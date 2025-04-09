
import { AppState } from './model/types';
import { createCandidatesHtml } from './view/listView';
import { createCandidateDetailHtml } from './view/detailView';

export default (container: HTMLElement, actions: any) => {
  const home = () => {
    container.innerHTML = `
        <header>Velkommen til Get Academy!</header><br/>
          <a href="#/list"><b>Liste</b></a>
    `;
  };

  const list = (params: any, state: AppState) => {
    container.innerHTML = /*HTML*/ `
    <filter-component></filter-component>
    ${createCandidatesHtml(state.candidateUpdateEvents)}
    `;

    container.addEventListener('candidate-deleted', (event: CustomEvent) => {
      actions.deleteCandidate(event.detail.id);
    });
    container.addEventListener('candidate-details', (event: CustomEvent) => {
      actions.candidateDetail(event.detail.id);
    });

    // const candidates = container.querySelectorAll(".candidate");
    // for (let candidate of candidates) {
    //   candidate.addEventListener("click", (event: Event) => {
    //     const target = event.target as HTMLElement;
    //     if (target!.tagName !== "BUTTON") {
    //       location.hash = `#/list/${candidate.id}`;
    //     }
    //   });
    // }
  };

  const detail = (params: any, state: AppState) => {
    const { id } = params;
    const candidate = state.candidateUpdateEvents.find((x) => x.id == id);
    console.log(id, candidate);

    container.innerHTML = /*HTML*/ `
    <img src="/img/logo.png" alt="logo" class="logo"/>
    ${createCandidateDetailHtml(candidate)}
      
`;
  };

  const notFound = () => {
    container.innerHTML = 'Page Not Found!';
  };

  return {
    home,
    list,
    detail,
    notFound,
  };
};
