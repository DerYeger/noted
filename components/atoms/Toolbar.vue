<template>
  <div class="toolbar">
    <slot />
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  padding-right: 1rem;
}

.toolbar > * {
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>
