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

<script setup lang="ts">
import { DynamicComponent } from '~/types/dynamicComponent'

export const components: DynamicComponent[] = [
  {
    name: 'AppearanceSettingsCard',
  },
]
</script>
