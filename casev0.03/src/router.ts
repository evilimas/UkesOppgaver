import { INITIAL_STATE } from './model/model';
import { AppState } from './model/types';

const ROUTE_PARAMETER_REGEXP: RegExp = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = '([^\\/]+)';

const extractUrlParams = (route, windowHash) => {
  const params = {};
  if (route.params.length === 0) {
    return params;
  }
  const matches = windowHash.match(route.testRegExp);

  matches.shift();

  matches.forEach((paramValue, index) => {
    const paramName = route.params[index];
    params[paramName] = paramValue;
  });

  return params;
};
type renderingFunctionType = (params: any, state: AppState) => void;
interface Router {
  addRoute: (hash: string, renderFunction: renderingFunctionType) => Router;
  setNotFound: (renderFunction: renderingFunctionType) => Router;
  navigate: (fragment: string) => void;
  start: () => void;
  checkRoutes: (state: AppState) => void;
}
const mainRouterFunction: () => Router = () => {
  const routes = [];
  let notFound = () => {};

  const router: Router = {};

  router.checkRoutes = (state: AppState, actions: any) => {
    const { hash } = window.location;

    const currentRoute = routes.find((route) => {
      const { testRegExp } = route;
      return testRegExp.test(hash);
    });

    if (!currentRoute) {
      notFound();
      return;
    }

    const urlParams = extractUrlParams(currentRoute, window.location.hash);

    currentRoute.component(urlParams, state, actions);
  };

  router.addRoute = (fragment, component) => {
    const params = [];

    const parsedFragment = fragment
      .replace(ROUTE_PARAMETER_REGEXP, (match, paramName) => {
        params.push(paramName);
        return URL_FRAGMENT_REGEXP;
      })
      .replace(/\//g, '\\/');

    routes.push({
      testRegExp: new RegExp(`^${parsedFragment}$`),
      component,
      params,
    });

    return router;
  };

  router.setNotFound = (cb) => {
    notFound = cb;
    return router;
  };

  router.navigate = (fragment) => {
    window.location.hash = fragment;
  };

  router.start = () => {
    window.addEventListener('hashchange', router.checkRoutes.bind(router));

    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    router.checkRoutes;
  };

  return router;
};

export default mainRouterFunction;
