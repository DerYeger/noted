<template>
  <textarea
    ref="textarea"
    class="editor"
    :value="value"
    placeholder="Start typing..."
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
    this.textArea.addEventListener('keydown', this.handleTabInput)
  },
  beforeDestroy() {
    this.textArea.removeEventListener('keydown', this.handleTabInput)
  },
  methods: {
    handleTabInput(event: KeyboardEvent) {
      if (event.key === 'Tab') {
        event.preventDefault()
        const target = event.target as HTMLTextAreaElement
        const start = target.selectionStart
        const end = target.selectionEnd
        const value = target.value
        target.value = value.substring(0, start) + '\t' + value.substring(end)
        target.selectionStart = target.selectionEnd = start + 1
      }
    },
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
  width: 100%;
}

.editor:focus-visible {
  outline: none;
}
</style>
