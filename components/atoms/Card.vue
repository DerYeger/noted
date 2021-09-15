<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  color: var(--text-primary);
  background: var(--color-lighten-2);
  border-radius: var(--border-radius-medium);
  padding: 0.5rem;
}
</style>
