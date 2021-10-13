<template>
  <Button color="warn" @click="clearData">
    {{ $t('settings.general.clear-data') }}
  </Button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  methods: {
    clearData() {
      this.$store.dispatch('reset')
    },
  },
})
</script>
