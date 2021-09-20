<template>
  <div class="pa-4">
    <Toolbar class="mb-4">
      <Button color="secondary" @click="createNotebook">New</Button>
    </Toolbar>
    <NotebookWall :notebooks="notebooks" @delete="deleteNotebook" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { MetaInfo } from 'vue-meta'
import { Notebook } from '~/model/notebooks'
import { generateSocialTags } from '~/model/meta'
import { routes } from '~/model/routes'

export default defineComponent({
  head(): MetaInfo {
    const title = this.$t(routes.notebooks.title) as string
    const description = this.$t('meta.description') as string
    return {
      title,
      meta: [...generateSocialTags(title, description)],
    }
  },
  computed: {
    notebooks(): Notebook[] {
      return this.$store.getters['notebooks/all']
    },
  },
  methods: {
    createNotebook() {
      this.$store.dispatch('createNotebook', 'New Notebook')
    },
    deleteNotebook(id: string) {
      this.$store.commit('notebooks/remove', id)
    },
  },
})
</script>
