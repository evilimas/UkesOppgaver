const ROUTE_PARAMETER_REGEXP: RegExp = /:(\w+)/g
const URL_FRAGMENT_REGEXP = '([^\\/]+)'
const TICKTIME = 250
const NAV_A_SELECTOR = 'a[data-navigation]'

type Router = {
  setNotFound: (cb: () => void) => Router
  navigate: (path: string | URL | null | undefined) => void
  start: () => Router
  addRoute: (path: string, callback: any) => {},


}

const extractUrlParams = (route: string, pathname: string) => {
  if (route.params.length === 0) {
    return {}
  }

  const params = {}

  const matches = pathname
    .match(route.testRegExp)

  matches?.shift()

  matches?.forEach((paramValue: any, index: string | number) => {
    const paramName = route.params[index]
    params[paramName] = paramValue
  })

  return params
}

export default () => {
  const routes = []
  let notFound = () => {}
  let lastPathname: string

  
  const router: Router = {
    setNotFound: function (cb: () => void): Router {
      throw new Error("Function not implemented.")
    },
    navigate: function (path: string | URL | null | undefined): void {
      throw new Error("Function not implemented.")
    },
    start: function (): Router {
      throw new Error("Function not implemented.")
    },
    addRoute: function (path: string, callback: any): {} {
      throw new Error("Function not implemented.")
    }
  }

  const checkRoutes = () => {
    const { pathname } = window.location
    if (lastPathname === pathname) {
      return
    }

    lastPathname = pathname

    const currentRoute = routes.find(route => {
      return route.testRegExp.test(pathname)
    })

    if (!currentRoute) {
      notFound()
      return
    }

    const urlParams = extractUrlParams(currentRoute, pathname)

    currentRoute.callback(urlParams)
  }

  router.addRoute = (path: string, callback: any) => {
    const params = []

    const parsedPath = path
      .replace(ROUTE_PARAMETER_REGEXP, (match: any, paramName: any) => {
        params.push(paramName)
        return URL_FRAGMENT_REGEXP
      }).replace(/\//g, '\\/')

    routes.push({
      testRegExp: new RegExp(`^${parsedPath}$`),
      callback,
      params
    })

    return router
  }

  router.setNotFound = (cb: () => void) => {
    notFound = cb
    return router
  }

  router.navigate = (path: string | URL | null | undefined) => {
    window.history.pushState(null, null, path)
  }

  router.start = () => {
    checkRoutes()
    window.setInterval(checkRoutes, TICKTIME)

    document
      .body
      .addEventListener('click', e => {
        const { target } = e
        if (target?.matches(NAV_A_SELECTOR)) {
          e.preventDefault()
          router.navigate(target?.href)
        }
      })

    return router
  }

  return router
}
