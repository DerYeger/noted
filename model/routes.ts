export interface Route {
  title: string
  path: string
}

export const routes: Record<string, Route> = {
  notebooks: {
    title: 'routes.notebooks',
    path: '/notebooks',
  },
  settings: {
    title: 'routes.settings',
    path: '/settings',
  },
}
