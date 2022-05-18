<template>
  <select v-model="$colorMode.preference">
    <option v-for="colorMode of colorModes" :key="colorMode" :value="colorMode">
      {{ $t(`color-modes.${colorMode}`) }}
    </option>
  </select>
</template>

<script setup lang="ts">
const colorModes = ['system', 'light', 'dark']
</script>
