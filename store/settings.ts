export interface Settings {
  tabSize: number
}

export const state: () => Settings = () => ({
  tabSize: 4,
})

export const getters = {
  tabSize: (state: Settings): number => state.tabSize,
}

export const mutations = {
  setTabSize(state: Settings, tabSize: number) {
    state.tabSize = tabSize
  },
}
