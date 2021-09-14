<template>
  <div class="h-100 d-flex flex-column">
    <Toolbar>
      <NuxtLink to="/">
        <Button>Close</Button>
      </NuxtLink>
      <Button @click="download">Export</Button>
    </Toolbar>
    <Tabs class="section-tabs" @add="createNewSection">
      <client-only>
        <Tab
          v-for="section of sections"
          :id="section.id"
          :key="section.id"
          :title="section.name"
        >
          <SectionViewer :id="section.id" />
        </Tab>
      </client-only>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Notebook } from '~/model/notebooks'
import { Section } from '~/model/section'
import { uuid } from '~/model/entity'

export default defineComponent({
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

<style scoped>
.section-tabs {
  flex-grow: 1;
  min-height: 0;
}
</style>
