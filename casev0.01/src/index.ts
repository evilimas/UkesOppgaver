import createRouter from './router.ts';
import createPages from './render.ts';
import CandidateListComponent from './components/candidate-list-component.ts';

customElements.define('candidate-list-component', CandidateListComponent);

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
