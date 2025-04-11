import { AppState } from './model/types';
import { createCandidatesHtml } from './view/listView';
import { createCandidateDetailHtml } from './view/detailView';
import { INITIAL_STATE } from './model/model';

export default (container: HTMLElement, actions: any) => {
  const home = () => {
    container.innerHTML = `
        <header>Velkommen til Get Academy!</header><br/>
          <a href="#/list"><b>Liste</b></a>
    `;
  };

  const list = (params: any, state: AppState) => {
    container.innerHTML = /*HTML*/ `
    <img src="/img/logo.png" alt="logo" class="logo"/>
      <header>Velkommen til Get Academy Student Administrasjon!</header>
    <filter-component></filter-component>
    <list-component></list-component>
    
    
    `;

    container.addEventListener('candidate-deleted', (event: CustomEvent) => {
      actions.deleteCandidate(event.detail.id);
    });
    container.addEventListener(
      'edit-candidate-details',
      (event: CustomEvent, state: AppState) => {
        actions.candidateDetail(event.detail.id);
      }
    );

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
    const candidate = INITIAL_STATE.candidateUpdateEvents.find(
      (x) => x.id == id
    );
    console.log(id, candidate);

    container.innerHTML = /*HTML*/ `
    <img src="/img/logo.png" alt="logo" class="logo"/>
    ${createCandidateDetailHtml(candidate!)}
      
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
