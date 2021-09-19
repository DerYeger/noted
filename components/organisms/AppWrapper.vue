<template>
  <div class="app__wrapper" :style="{ '--tab-size': tabSize }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  computed: {
    tabSize(): number {
      return this.$store.getters['settings/tabSize']
    },
  },
})
</script>

<style scoped>
.app__wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
