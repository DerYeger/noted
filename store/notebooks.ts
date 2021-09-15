import { ActionContext } from 'vuex'
import Vue from 'vue'
import { EntityRecord } from '~/model/entity'
import { Notebook } from '~/model/notebooks'
import { RootState } from '~/store/index'

export type NotebookState = EntityRecord<Notebook>

export const state: () => NotebookState = () => Object.create(null)

type Context = ActionContext<NotebookState, RootState>

export const actions = {
  reset({ commit }: Context) {
    commit('removeAll')
  },
}

export const getters = {
  all: (state: NotebookState) => Object.values(state),
  byId:
    (state: NotebookState) =>
    (id: string): Notebook | undefined =>
      state[id],
}

export const mutations = {
  add(state: NotebookState, notebook: Notebook) {
    Vue.set(state, notebook.id, notebook)
  },
  remove(state: NotebookState, id: string) {
    Vue.delete(state, id)
  },
  removeAll(state: NotebookState) {
    Object.values(state).forEach((notebook) => Vue.delete(state, notebook.id))
  },
}
