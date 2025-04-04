import createRouter from './router.ts';
import createPages from './render.ts';
// import dataFactory from '../src/model/createData.ts'
import CandidateListComponent from './components/candidate-list-component.ts';
import CandidateComponent from './components/candidate-detail-component.ts';
import FilterComponent from './components/filter-component.ts';
import YourFiltersComponent from './components/your-filters-component.ts';
import ListComponent from './components/list-component.ts';

customElements.define('candidate-list-component', CandidateListComponent);
customElements.define('candidate-component', CandidateComponent);
customElements.define('filter-component', FilterComponent);
customElements.define('your-filter-component', YourFiltersComponent);
customElements.define('list-component', ListComponent);

const container: HTMLElement | null =
  document.querySelector<HTMLElement>('#app');

const pages = createPages(container!);

const router = createRouter();

router
  .addRoute('/', pages.home)
  .addRoute('/list', pages.list)
  .addRoute('/list/:id', pages.detail)
  .setNotFound(pages.notFound)
  .start();
