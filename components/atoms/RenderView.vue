<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="render-view" v-html="htmlOutput" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    input: {
      type: String,
      required: true,
    },
  },
  computed: {
    htmlOutput(): string {
      // TODO sanitize
      return this.$md(this.input)
    },
  },
})
</script>

<style>
.render-view {
  background: var(--color-lighten-1);
  color: var(--text-primary);
  padding: 1rem;
  height: 100%;
}
</style>
