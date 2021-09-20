<template>
  <textarea
    ref="textarea"
    class="editor"
    :value="value"
    :placeholder="$t('editor.placeholder')"
    wrap="off"
    @input.prevent="$emit('input', $event.target.value)"
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
  },
  computed: {
    textArea(): HTMLTextAreaElement {
      return this.$refs.textarea as HTMLTextAreaElement
    },
  },
  mounted() {
    this.textArea.addEventListener('keydown', this.$indentHandler)
  },
  beforeDestroy() {
    this.textArea.removeEventListener('keydown', this.$indentHandler)
  },
})
</script>

<style scoped>
.editor {
  display: block;
  background: transparent;
  border: none;
  color: var(--text-primary);
  height: 100%;
  padding: 1rem;
  resize: none;
  overflow-wrap: normal;
  overflow-x: auto;
  tab-size: var(--tab-size);
  width: 100%;
}

.editor:focus-visible {
  outline: none;
}
</style>
