<template>
  <div>
    <p>{{ notebook.name }}</p>
    <NuxtLink :to="`/notebooks/${notebook.id}`">
      <Button color="primary">Open</Button>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Notebook } from '~/model/notebooks'

export default defineComponent({
  props: {
    notebook: {
      type: Object as PropType<Notebook>,
      required: true,
    },
  },
})
</script>

<style scoped>
div {
  color: var(--text-primary);
  background: var(--color-secondary);
  border-radius: var(--border-radius-medium);
  padding: 0.5rem;
}
</style>
