<template>
  <input
    :class="{ 'text--small': small }"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
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
    small: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
