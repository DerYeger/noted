<template>
  <p class="card__title unselectable">
    <slot />
  </p>
</template>

<style>
.card__title {
  font-size: var(--fs-large);
  padding: 0.25em;
}
</style>
