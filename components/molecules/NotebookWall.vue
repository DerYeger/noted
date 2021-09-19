<template>
  <MasonryWall
    v-slot="{ item }"
    :items="notebooks"
    :column-width="300"
    :padding="16"
  >
    <NotebookCard :notebook="item" @delete="$emit('delete', item.id)" />
  </MasonryWall>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Notebook } from '~/model/notebooks'

export default defineComponent({
  props: {
    notebooks: {
      type: Array as PropType<Notebook[]>,
      required: true,
    },
  },
})
</script>
