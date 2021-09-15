<template>
  <splitpanes class="splitpanes">
    <pane class="pane" :min-size="0">
      <Editor v-model="content" />
    </pane>
    <pane class="pane" :min-size="0">
      <RenderView :input="content" />
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
      },
    },
  },
})
</script>

<style>
.splitpanes {
  display: flex;
  height: 100%;
  overflow-y: auto;
}

.container > * {
  flex-grow: 1;
}

.pane {
  overflow-y: auto;
}
</style>
