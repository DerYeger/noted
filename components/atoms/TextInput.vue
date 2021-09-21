<template>
  <input
    :class="{ small }"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>
input {
  all: unset;
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-depressed);
  padding: 0.5em 1em 0.5em 1em;
}

input.small,
.toolbar input {
  font-size: var(--fs-small);
}
</style>
