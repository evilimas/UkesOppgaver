// import model from

// export default () => {
//   if (model.app.loggedInAsUserId == null) updateViewLogin();
//   else if (model.app.currentPage == 'editProfile') updateViewEditProfile();
//   else if (model.app.currentPage == 'movies') updateViewMovies();
//   else if (model.app.currentPage == 'singleMovie') updateViewSingleMovie();
//   else updateViewMain();
// }

import createRouter from './router.js';
import createPages from './pages.js';

const container = document.querySelector('main');

const pages = createPages(container);

const router = createRouter();

router
  .addRoute('/', pages.home)
  .addRoute('/list', pages.list)
  .addRoute('/list/:id', pages.detail)
  //   .addRoute('/list/:id/:anotherId', pages.anotherDetail)
  .setNotFound(pages.notFound)
  .start();
