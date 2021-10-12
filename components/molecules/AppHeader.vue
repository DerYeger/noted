<template>
  <header class="app__header">
    <slot />
    <h1 class="unselectable">
      {{ $t('app.title') }}
    </h1>
    <Spacer />
    <Logo
      size="2rem"
      :style="{ marginTop: '-0.25rem', marginBottom: '-0.25rem' }"
    />
  </header>
</template>

<style scoped>
.app__header {
  align-items: center;
  display: flex;
  padding: 0.75em;
}

.app__header h1 {
  font-size: var(--fs-large);
  margin: 0;
}
</style>
