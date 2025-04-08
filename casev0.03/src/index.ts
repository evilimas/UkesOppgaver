import createRouter from "./router.ts";
import createPages from "./pages.ts";
// import dataFactory from '../src/model/createData.ts'
// import CandidateListComponent from './components/candidate-list-component.ts/index.ts';
// import CandidateComponent from './components/candidate-detail-component.ts';
import FilterComponent from "./components/filter-component.ts";
import YourFiltersComponent from "./components/your-filters-component.ts";
import ListComponent from "./components/list-component.ts";

// customElements.define('candidate-list-component', CandidateListComponent);
// customElements.define('candidate-component', CandidateComponent);

import actionsFactory from "./model/model.ts";

customElements.define("filter-component", FilterComponent);
customElements.define("your-filter-component", YourFiltersComponent);
customElements.define("list-component", ListComponent);

const container = document.querySelector<HTMLElement>("main")!;


const actions = actionsFactory();
const pages = createPages(container, actions);
// const actions = actionsFactory()
const router = createRouter();

router
  .addRoute("/", pages.list)
  .addRoute("/list", pages.list)
  .addRoute("/list/:id", pages.detail)
  .setNotFound(pages.notFound)
  .start();

actions.addChangeListener(() => {
  router.checkRoutes();
});
