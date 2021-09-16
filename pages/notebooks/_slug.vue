<template>
  <ClientOnly>
    <div class="h-100 d-flex flex-column">
      <Toolbar>
        <NuxtLink to="/">
          <Button>Close</Button>
        </NuxtLink>
        <Button @click="download">Export</Button>
      </Toolbar>
      <TabNavigation
        v-model="tab"
        :tabs="tabs"
        @add="createNewSection"
        @menu="onMenu"
      />
      <SectionViewer v-if="currentSection" :id="currentSection.id" />
    </div>
  </ClientOnly>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Notebook } from '~/model/notebooks'
import { Section } from '~/model/section'
import { uuid } from '~/model/entity'
import { Tab } from '~/model/tab'

export default defineComponent({
  validate({ i18n, params, store }): boolean {
    const notebookExists =
      store.getters['notebooks/byId'](params.slug) !== undefined
    if (!notebookExists) {
      const message = i18n.t('error.notebooks.not-found', [
        params.slug,
      ]) as string
      throw new Error(message)
    }
    return true
  },
  data() {
    return {
      tab: '',
    }
  },
  computed: {
    notebookId(): string {
      return this.$route.params.slug
    },
    notebook(): Notebook {
      return this.$store.getters['notebooks/byId'](this.notebookId)
    },
    sections(): Section[] {
      return this.$store.getters['sections/byNotebookId'](this.notebookId)
    },
    tabs(): Tab[] {
      return this.sections.map((section) => ({
        id: section.id,
        title: section.name,
      }))
    },
    currentSection(): Section | undefined {
      return this.$store.getters['sections/byId'](this.tab)
    },
  },
  mounted() {
    if (this.sections.length > 0) {
      this.tab = this.sections[0].id
    }
  },
  methods: {
    createNewSection() {
      const section: Section = {
        id: uuid(),
        content: '',
        name: 'New Section',
        notebookId: this.notebookId,
      }
      this.$store.commit('sections/add', section)
    },
    onMenu(id: string) {
      this.$store.commit('sections/remove', id)
    },
    download() {
      // TODO download as zip
      this.sections.forEach((section) => {
        const blob = new Blob([section.content], { type: 'text/markdown' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = `${section.name}.md`
        link.click()
        URL.revokeObjectURL(link.href)
      })
    },
  },
})
</script>
