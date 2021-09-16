import { Notebook } from '~/model/notebooks'

export interface Route {
  title: string
  path: string
}

export const routes: Record<string, Route> = {
  home: {
    title: 'routes.home',
    path: '/',
  },
  notebooks: {
    title: 'routes.notebooks',
    path: '/notebooks',
  },
  settings: {
    title: 'routes.settings',
    path: '/settings',
  },
}

export function getNotebookPath(notebook: Notebook): string {
  return `${routes.notebooks.path}/${notebook.id}`
}
