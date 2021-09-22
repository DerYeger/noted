<template>
  <Checkbox v-model="sanitize" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  computed: {
    sanitize: {
      get(): boolean {
        return this.$store.getters['settings/sanitize']
      },
      set(value: boolean) {
        this.$store.commit('settings/setSanitize', value)
      },
    },
  },
})
</script>
