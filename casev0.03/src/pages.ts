import { AppState } from './model/types';
import ListComponent from './components/list-component';
import { INITIAL_STATE } from './model/model';
import DetailsComponent from './components/details-component';

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
    `;
    const listComponent = document.createElement('list-component') as ListComponent;
    listComponent.candidates = state.candidateUpdateEvents;
    container.appendChild(listComponent);

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
    container.innerHTML = /*HTML*/ `   
    <details-component></details-component> `;
    const detailsComponent = document.createElement('details-component') as DetailsComponent;
    detailsComponent.candidates = state.candidateUpdateEvents;
    container.appendChild(detailsComponent);
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
