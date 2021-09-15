import { ActionContext } from 'vuex'
import Vue from 'vue'
import { EntityRecord } from '~/model/entity'
import { RootState } from '~/store/index'
import { Section } from '~/model/section'

export type SectionState = EntityRecord<Section>

export const state: () => SectionState = () => Object.create(null)

type Context = ActionContext<SectionState, RootState>

export const actions = {
  reset({ commit }: Context) {
    commit('removeAll')
  },
}

export const getters = {
  all: (state: SectionState) => Object.values(state),
  byId:
    (state: SectionState) =>
    (id: string): Section | undefined =>
      state[id],
  byNotebookId:
    (state: SectionState) =>
    (id: string): Section[] =>
      Object.values(state).filter((section) => section.notebookId === id),
}

export const mutations = {
  add(state: SectionState, section: Section) {
    Vue.set(state, section.id, section)
  },
  remove(state: SectionState, id: string) {
    Vue.delete(state, id)
  },
  removeAll(state: SectionState) {
    Object.values(state).forEach((section) => Vue.delete(state, section.id))
  },
}
