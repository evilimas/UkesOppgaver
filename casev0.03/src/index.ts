import createRouter from './router.ts';
import createPages from './pages.ts';
import FilterComponent from './components/filter-component.ts';
import YourFiltersComponent from './components/your-filters-component.ts';
import DetailsComponent from './components/details-component.ts';
import ListComponent from './components/list-component.ts';
import CandidateComponent from './components/candidate-component.ts';
import { AppState } from './model/types.ts';

// customElements.define('candidate-list-component', CandidateListComponent);
// customElements.define('candidate-component', CandidateComponent);

import actionsFactory from './model/model.ts';

customElements.define('details-component', DetailsComponent);
customElements.define('filter-component', FilterComponent);
customElements.define('your-filter-component', YourFiltersComponent);
customElements.define('list-component', ListComponent);
customElements.define('candidate-component', CandidateComponent);

const container = document.querySelector<HTMLElement>('main')!;
const actions = actionsFactory();
const pages = createPages(container, actions);
const router = createRouter();

router
  .addRoute('#/', pages.home)
  .addRoute('#/list', pages.list)
  .addRoute('#/list/:id', pages.detail)
  .setNotFound(pages.notFound)
  .start(actions);

actions.addChangeListener((state: AppState) => {
  router.checkRoutes(state);
});
