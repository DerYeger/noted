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
  },
})
</script>
