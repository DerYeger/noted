<template>
  <masonry-wall
    v-slot="{ item }"
    :items="components"
    :column-width="400"
    :padding="16"
    class="pa-4"
  >
    <component :is="item.name" v-bind="item.props" />
  </masonry-wall>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

interface DynamicComponent {
  name: string
  props?: Record<string, any>
}

export default defineComponent({
  computed: {
    components(): DynamicComponent[] {
      const notebooks = this.$store.getters['notebooks/all']
      return [
        {
          name: 'NotebookList',
          props: {
            notebooks,
          },
        },
      ]
    },
  },
})
</script>
