<template>
  <Card>
    <CardTitle>{{ notebook.name }}</CardTitle>
    <CardActions>
      <Button color="warn" @click="$emit('delete', notebook.id)">
        {{ $t('actions.delete') }}
      </Button>
      <NuxtLink :to="`/notebooks/${notebook.id}`">
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

export default defineComponent({
  props: {
    notebook: {
      type: Object as PropType<Notebook>,
      required: true,
    },
  },
})
</script>
