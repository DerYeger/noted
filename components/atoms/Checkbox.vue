<template>
  <input
    :checked="value"
    type="checkbox"
    @change="$emit('input', $event.target.checked)"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style scoped>
input[type='checkbox'] {
  all: unset;
  background: var(--color-darken-3);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-depressed);
  cursor: pointer;
  transition: background var(--anim-medium) ease;
}

input[type='checkbox'],
input[type='checkbox']:checked::after {
  display: inline-flex;
  height: 1rem;
  width: 1rem;
}

input[type='checkbox']:checked {
  background: var(--color-secondary);
  box-shadow: var(--shadow-elevated);
}

input[type='checkbox']:checked::after {
  align-items: center;
  content: '✕';
  font-size: var(--fs-small);
  justify-content: center;
  position: relative;
  text-align: center;
}
</style>
