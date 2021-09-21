import { ActionContext } from 'vuex'
import { uuid } from '~/model/entity'
import { Notebook } from '~/model/notebooks'
import { Section } from '~/model/section'

export interface RootState {}

type Context = ActionContext<RootState, RootState>

export const actions = {
  reset({ dispatch }: Context) {
    dispatch('notebooks/reset')
    dispatch('settings/reset')
  },
  createNotebook({ commit }: Context, name: string) {
    const notebookId = uuid()
    const sectionId = uuid()
    const notebook: Notebook = {
      id: notebookId,
      name,
      sectionIds: [sectionId],
      lastEdit: Date.now(),
    }
    const section: Section = {
      id: sectionId,
      name: 'New Section',
      notebookId,
      content: '',
    }
    commit('notebooks/add', notebook)
    commit('sections/add', section)
  },
}
