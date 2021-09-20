<template>
  <select v-model="$colorMode.preference" class="color-mode-select">
    <option v-for="colorMode of colorModes" :key="colorMode" :value="colorMode">
      {{ $t(`color-modes.${colorMode}`) }}
    </option>
  </select>
</template>

<script setup lang="ts">
export const colorModes = ['system', 'light', 'dark']
</script>

<style scoped>
.color-mode-select {
  all: unset;
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-depressed);
  min-width: 4rem;
  padding: 0.5em;
  text-align: center;
}
</style>
