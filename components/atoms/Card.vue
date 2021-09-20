<template>
  <div class="card concave elevated">
    <slot />
  </div>
</template>

<style scoped>
.card {
  border-radius: var(--border-radius-medium);
  padding: 0.5rem;
}
</style>
