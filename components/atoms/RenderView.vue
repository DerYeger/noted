<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="render-view" v-html="htmlOutput" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import DOMPurify from 'dompurify'

export default defineComponent({
  props: {
    input: {
      type: String,
      required: true,
    },
    sanitize: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    htmlOutput(): string {
      const parsed = this.$md(this.input)
      if (this.sanitize) {
        return DOMPurify.sanitize(parsed)
      }
      return parsed
    },
  },
})
</script>

<style>
.render-view {
  background: var(--color-lighten-1);
  min-height: 100%;
  padding: 1rem;
}

.render-view > *:first-child {
  margin-top: 0;
}

.render-view a {
  text-decoration: underline;
}
</style>
