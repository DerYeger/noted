<template>
  <splitpanes class="splitpanes">
    <pane class="pane" :min-size="0">
      <Editor v-model="content" />
    </pane>
    <pane class="pane" :min-size="0">
      <RenderView :input="content" :sanitize="sanitize" />
    </pane>
  </splitpanes>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Splitpanes, Pane } from 'splitpanes'
import { Section } from '~/model/section'
import 'splitpanes/dist/splitpanes.css'

export default defineComponent({
  components: { Splitpanes, Pane },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    section(): Section {
      return this.$store.getters['sections/byId'](this.id)
    },
    content: {
      get(): string {
        return this.section.content
      },
      set(value: string) {
        this.$store.commit('sections/add', {
          ...this.section,
          content: value,
        })
        this.$store.commit('notebooks/updateLastEdit', this.section.notebookId)
      },
    },
    sanitize(): boolean {
      return this.$store.getters['settings/sanitize']
    },
  },
})
</script>

<style>
.splitpanes {
  flex-grow: 1;
  overflow-y: auto;
}

.container > * {
  flex-grow: 1;
}

.pane {
  overflow-y: auto;
}
</style>
