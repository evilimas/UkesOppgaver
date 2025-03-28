import createRouter from './router.ts';
import createPages from './pages.ts';

const container: HTMLElement | null =
  document.querySelector<HTMLElement>('main');

const pages = createPages(container!);

const router = createRouter();

router.addRoute('/', pages.home);
router.addRoute('/list', pages.list);
router.addRoute('/list/:id', pages.detail);
router.setNotFound(pages.notFound);
router.start();
