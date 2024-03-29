<template>
  <ClientOnly>
    <div class="h-100 d-flex flex-column">
      <Toolbar class="my-4">
        <NuxtLink :to="localePath(notebooksRoute.path)">
          <Button color="warn">
            {{ $t('actions.close') }}
          </Button>
        </NuxtLink>
        <Button color="secondary" @click="download">
          {{ $t('actions.download') }}
        </Button>
        <TextInput
          v-model="notebookName"
          :placeholder="$t('editor.notebooks.name')"
        />
        <TextInput
          v-show="currentSection"
          v-model="currentSectionName"
          :placeholder="$t('editor.sections.name')"
        />
      </Toolbar>
      <TabNavigation
        v-model="tab"
        :tabs="tabs"
        class="mb-4"
        @add="createNewSection"
        @menu="onMenu"
      />
      <SectionViewer v-if="currentSection" :id="currentSection.id" />
      <div v-else class="section-placeholder text--secondary">
        {{ $t('editor.notebooks.empty') }}
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { MetaInfo } from 'vue-meta'
import { Notebook } from '~/model/notebooks'
import { Section } from '~/model/section'
import { uuid } from '~/model/entity'
import { routes } from '~/model/routes'
import { Tab } from '~/model/tab'
import { generateSocialTags } from '~/model/meta'

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
  head(): MetaInfo {
    const title = this.notebook.name
    const description = this.$t('meta.description') as string
    return {
      title,
      meta: [...generateSocialTags(title, description)],
    }
  },
  computed: {
    notebookId(): string {
      return this.$route.params.slug
    },
    notebook(): Notebook {
      return this.$store.getters['notebooks/byId'](this.notebookId)
    },
    notebookName: {
      get(): string {
        return this.notebook.name
      },
      set(value: string) {
        if (!value) {
          return
        }
        this.$store.commit('notebooks/add', { ...this.notebook, name: value })
      },
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
    currentSectionName: {
      get(): string {
        return this.currentSection?.name ?? ''
      },
      set(value: string) {
        if (!value) {
          return
        }
        this.$store.commit('sections/add', {
          ...this.currentSection,
          name: value,
        })
        this.$store.commit('notebooks/updateLastEdit', this.notebookId)
      },
    },
  },
  mounted() {
    if (this.sections.length > 0) {
      this.tab = this.sections[0].id
    }
  },
  methods: {
    createNewSection() {
      const name = this.$t('editor.sections.new') as string
      const section: Section = {
        id: uuid(),
        content: '',
        name,
        notebookId: this.notebookId,
      }
      this.$store.commit('sections/add', section)
      this.tab = section.id
    },
    onMenu(id: string) {
      this.$store.commit('sections/remove', id)
      if (this.tab === id) {
        this.tab = this.tabs[0]?.id ?? ''
      }
    },
    download() {
      this.$store.dispatch('notebooks/download', this.notebookId)
    },
  },
})
</script>

<style scoped>
.section-placeholder {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
}
</style>
