<template>
  <Card>
    <CardTitle>{{ notebook.name }}</CardTitle>
    <CardActions>
      <Button color="warn" @click="$emit('delete', notebook.id)">
        {{ $t('actions.delete') }}
      </Button>
      <NuxtLink :to="localePath(getNotebookPath(notebook))">
        <Button color="secondary">
          {{ $t('actions.open') }}
        </Button>
      </NuxtLink>
    </CardActions>
  </Card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Notebook } from '~/model/notebooks'
import { getNotebookPath } from '~/model/routes'

export default defineComponent({
  props: {
    notebook: {
      type: Object as PropType<Notebook>,
      required: true,
    },
  },
  methods: {
    getNotebookPath,
  },
})
</script>
