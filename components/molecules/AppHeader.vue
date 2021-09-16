<template>
  <header class="app__header">
    <slot />
    <h1>{{ $t('app.title') }}</h1>
  </header>
</template>

<style scoped>
.app__header {
  align-items: center;
  background: var(--color-darken-1);
  display: flex;
  padding: 0.5em;
}

.app__header h1 {
  font-size: var(--fs-large);
  margin: 0;
}
</style>
