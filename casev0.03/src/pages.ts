import model from './model/model';
import router from "./router"
import { AppState } from './model/types';
import { createCandidatesHtml } from './view/listView';

export default (container: HTMLElement, actions: any) => {
  const home = () => {
    container.innerHTML = `
        <header>Velkommen til Get Academy!</header><br/>
          <a href="#/list"><b>Liste</b></a>
    `;
  };

  const list = (papams:any, state: AppState) => {
    container.innerHTML = /*HTML*/ `
    <filter-component></filter-component>
    
    ${createCandidatesHtml(state.candidateUpdateEvents)}
    `;
    const candidateDivs = container.querySelectorAll(".candidate");
    
    container.addEventListener("candidate-deleted", (event: CustomEvent) => {
          actions.deleteCandidate(event.detail.id);
        // actions.deleteMovie(event.detail.id);
      });
    for (let candidateDiv of candidateDivs) {
      candidateDiv.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement;
        if (target!.tagName !== 'BUTTON') {
          location.hash = `#/list/${candidateDiv.id}`;
          // router.navigate(`/movies/${movieDiv.id}`)
        }
      });
    
    }
  };

  const detail = (params: any, state: AppState) => {
    const { id } = params;
    const candidate = state.candidateUpdateEvents.find((x) => x.id == id);
    container.innerHTML = /*HTML*/ `
    <img src="/img/logo.png" alt="logo" class="logo"/>
      <candidate-component candidate='${JSON.stringify(candidate).replace(
        '"',
        '"'
      )}'></candidate-component>
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
