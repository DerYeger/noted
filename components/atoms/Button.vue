<template>
  <button
    :style="{ '--button-color': colorVar }"
    class="darken-on-focus unselectable"
    :class="{ small }"
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
  background: var(--button-color);
  border: none;
  border-radius: var(--border-radius-medium);
  color: var(--text-primary);
  cursor: pointer;
  min-width: 4em;
  padding: 0.5em 1em;
}

button.small,
.card__actions button,
.toolbar button {
  font-size: var(--fs-small);
}
</style>
