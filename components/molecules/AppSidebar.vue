<template>
  <aside class="app__sidebar" :class="{ open: value, closed: !value }">
    <ClientOnly>
      <AppNavigation @navigate="closeIfMobile" />
    </ClientOnly>
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
  methods: {
    closeIfMobile() {
      if (window.innerWidth <= 600) {
        this.$emit('input', false)
      }
    },
  },
})
</script>

<style scoped>
.app__sidebar {
  height: 100%;
  overflow-y: auto;
  transform: translateX(0);
  transition: padding-left var(--anim-medium) ease,
    padding-right var(--anim-medium) ease, transform var(--anim-medium) ease,
    width var(--anim-medium) ease;
}

.app__sidebar.closed {
  overflow-x: hidden;
  padding-left: 0;
  padding-right: 0;
  transform: translateX(-100%);
  width: 0;
}

@media only screen and (max-width: 600px) {
  .app__sidebar {
    width: 100vw;
  }
}
</style>
