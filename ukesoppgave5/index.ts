import createRouter from './router.ts';
import createPages from './pages.ts';

const container = document.querySelector<HTMLElement>('main');

const pages = createPages(container!);

const router = createRouter();

router
  .addRoute('/', pages.home)
  .addRoute('/list', pages.list)
  .addRoute('/list/:id', pages.detail)
  .setNotFound(pages.notFound)
  .start();
