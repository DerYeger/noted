import { Notebook } from '~/model/notebooks'

export interface Route {
  title: string
  path: string
  external: boolean
  subRoute: boolean
  dynamic: boolean
}

export const routes: Record<string, Route> = {
  home: {
    title: 'routes.home',
    path: '/',
    external: false,
    subRoute: false,
    dynamic: false,
  },
  notebooks: {
    title: 'routes.notebooks',
    path: '/notebooks',
    external: false,
    subRoute: false,
    dynamic: false,
  },
  settings: {
    title: 'routes.settings',
    path: '/settings',
    external: false,
    subRoute: false,
    dynamic: false,
  },
  about: {
    title: 'routes.about',
    path: '/about',
    external: false,
    subRoute: true,
    dynamic: false,
  },
  source: {
    title: 'routes.source',
    path: 'https://github.com/DerYeger/noted',
    external: true,
    subRoute: true,
    dynamic: false,
  },
}

export function getNotebookPath(notebook: Notebook): string {
  return `${routes.notebooks.path}/${notebook.id}`
}
