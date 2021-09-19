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
  padding: 1rem;
  min-height: 100%;
}

.render-view > *:first-child {
  margin-top: 0;
}
</style>
