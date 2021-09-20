<template>
  <input
    type="number"
    :value="value"
    @input="$emit('input', +$event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style>
input[type='number'] {
  all: unset;
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-depressed);
  min-width: 4rem;
  padding: 0.5em;
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
