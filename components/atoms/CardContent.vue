<template>
  <div class="card__content">
    <slot />
  </div>
</template>

<style scoped>
.card__content {
  padding: 1rem;
}

.card__title + .card__content {
  padding-top: 0;
}
</style>
