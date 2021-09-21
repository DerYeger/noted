<template>
  <div class="toolbar__container">
    <div class="toolbar">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.toolbar__container {
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0.5rem;
}

.toolbar {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
