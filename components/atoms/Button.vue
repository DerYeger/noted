<template>
  <button
    :style="{ '--button-color': colorVar }"
    class="darken-on-focus unselectable"
    :class="{ 'text--small': small }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'lighten-3',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorVar(): string {
      return `var(--color-${this.color})`
    },
  },
})
</script>

<style scoped>
button {
  align-items: center;
  background: var(--button-color);
  border: none;
  border-radius: var(--border-radius-medium);
  color: var(--text-primary);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  height: 100%;
  min-width: max(4em, -moz-fit-content);
  min-width: max(4em, fit-content);
  padding: 0.5em 1em;
}
</style>
