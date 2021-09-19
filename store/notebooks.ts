import { ActionContext } from 'vuex'
import Vue from 'vue'
import JSZip from 'jszip'
import { EntityRecord } from '~/model/entity'
import { Notebook } from '~/model/notebooks'
import { RootState } from '~/store/index'
import { Section } from '~/model/section'

function normalizeName(name: string): string {
  return name.replaceAll(' ', '_')
}

export type NotebookState = EntityRecord<Notebook>

export const state: () => NotebookState = () => Object.create(null)

type Context = ActionContext<NotebookState, RootState>

export const actions = {
  download({ rootGetters }: Context, id: string) {
    const notebook: Notebook = rootGetters['notebooks/byId'](id)
    const sections: Section[] = rootGetters['sections/byNotebookId'](id)
    const zip = new JSZip()
    const zipFilename = `${normalizeName(notebook.name)}.zip`

    sections.forEach((section) => {
      let filename = `${normalizeName(section.name)}.md`
      let counter = 1
      while (filename in zip.files) {
        filename = `${normalizeName(section.name)}_${counter}.md`
        counter += 1
      }
      zip.file(filename, section.content)
    })
    zip.generateAsync({ type: 'blob' }).then((blob) => {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = zipFilename
      link.click()
      URL.revokeObjectURL(link.href)
    })
  },
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
