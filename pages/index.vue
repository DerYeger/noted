<template>
  <div>
    <Toolbar>
      <Button color="secondary" @click="createNotebook">New</Button>
      <Button color="warn" @click="deleteAll">Delete all</Button>
    </Toolbar>
    <masonry-wall
      v-slot="{ item }"
      :items="notebooks"
      :column-width="300"
      :padding="16"
      class="pa-4"
    >
      <NotebookCard :notebook="item" @delete="deleteNotebook" />
    </masonry-wall>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Notebook } from '~/model/notebooks'

export default defineComponent({
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
    deleteAll() {
      this.$store.dispatch('notebooks/reset')
    },
  },
})
</script>
