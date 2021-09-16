<template>
  <aside class="app__sidebar" :class="{ open: value, closed: !value }">
    <Button class="close-button" @click="$emit('input', false)"> X </Button>
    <AppNavigation />
  </aside>
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
.app__sidebar {
  background: var(--color-darken-1);
  height: 100%;
  padding: 1rem 2rem 1rem 2rem;
}

.close-button {
  position: fixed;
  top: 1rem;
  right: 1rem;
}

@media only screen and (max-width: 600px) {
  .app__sidebar {
    background: var(--color-darken-2);
    inset: 0;
    position: absolute;
    z-index: 42;
  }

  .app__sidebar:not(.open) {
    display: none;
  }
}

@media only screen and (min-width: 601px) {
  .app__sidebar {
    transform: translateX(0);
    transition: padding-left var(--anim-medium) ease,
      padding-right var(--anim-medium) ease, width var(--anim-medium) ease,
      transform var(--anim-medium) ease;
  }

  .app__sidebar.closed {
    overflow: hidden;
    padding-left: 0;
    padding-right: 0;
    transform: translateX(-100%);
    width: 0;
  }

  .close-button {
    display: none;
  }
}
</style>
