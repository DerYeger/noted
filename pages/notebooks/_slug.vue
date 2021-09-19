<template>
  <ClientOnly>
    <div class="h-100 d-flex flex-column">
      <Toolbar class="ma-4">
        <NuxtLink :to="localePath(notebooksRoute.path)">
          <Button color="warn">
            {{ $t('actions.close') }}
          </Button>
        </NuxtLink>
        <Button color="secondary" @click="download">
          {{ $t('actions.download') }}
        </Button>
      </Toolbar>
      <TabNavigation
        v-model="tab"
        :tabs="tabs"
        class="mx-4 mb-4"
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
import { routes } from '~/model/routes'
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
      notebooksRoute: routes.notebooks,
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
      this.$store.dispatch('notebooks/download', this.notebookId)
    },
  },
})
</script>
