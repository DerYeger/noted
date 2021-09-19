<template>
  <div class="card__actions">
    <slot />
  </div>
</template>

<style scoped>
.card__actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>
