<template>
  <div class="toolbar">
    <slot />
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
