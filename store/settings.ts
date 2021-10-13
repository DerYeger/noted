import { ActionContext } from 'vuex'
import { RootState } from '~/store/index'

export interface Settings {
  sanitize: boolean
  tabSize: number
}

export const state: () => Settings = () => ({
  sanitize: true,
  tabSize: 4,
})

type Context = ActionContext<Settings, RootState>

export const actions = {
  reset({ commit }: Context) {
    commit('setSanitize', true)
    commit('setTabSize', 4)
  },
}

export const getters = {
  sanitize: (state: Settings): boolean => state.sanitize,
  tabSize: (state: Settings): number => state.tabSize,
}

export const mutations = {
  setSanitize(state: Settings, sanitize: boolean) {
    state.sanitize = sanitize
  },
  setTabSize(state: Settings, tabSize: number) {
    state.tabSize = tabSize
  },
}
