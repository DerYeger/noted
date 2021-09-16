<template>
  <Card>
    <CardTitle>{{ $t(title) }}</CardTitle>
    <ul>
      <li v-for="notebook in notebooks" :key="notebook.id">
        <NuxtLink :to="localePath(getNotebookPath(notebook))">
          {{ notebook.name }}
        </NuxtLink>
      </li>
    </ul>
  </Card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Notebook } from '~/model/notebooks'
import { getNotebookPath, routes } from '~/model/routes'

export default defineComponent({
  props: {
    notebooks: {
      type: Array as PropType<Notebook[]>,
      required: true,
    },
  },
  data() {
    return {
      title: routes.notebooks.title,
    }
  },
  methods: {
    getNotebookPath,
  },
})
</script>
