<template>
  <NumberInput
    v-model="tabSize"
    min="0"
    style="text-align: center; width: 4rem"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  computed: {
    tabSize: {
      get(): number {
        return this.$store.getters['settings/tabSize']
      },
      set(value: number) {
        const tabSize = value >= 0 ? Math.round(value) : 0
        this.$store.commit('settings/setTabSize', tabSize)
      },
    },
  },
})
</script>
