<template>
  <div>
    <Toolbar>
      <Button @click="createNotebook">New</Button>
      <Button @click="deleteAll">Delete all</Button>
    </Toolbar>
    <masonry-wall
      v-slot="{ item }"
      :items="notebooks"
      :column-width="300"
      :padding="16"
      class="pa-4"
    >
      <NotebookCard :notebook="item" />
    </masonry-wall>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Notebook } from '~/model/notebooks'
import { uuid } from '~/model/entity'

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
    deleteAll() {
      this.$store.dispatch('notebooks/reset')
    },
  },
})
</script>
